import { expect, test, type Page } from '@playwright/test'

const STORAGE_KEY = 'curmanlight:work-decisions:v1'

type Pilot = {
  slug: 'educazione-fisica' | 'tecnologia'
  order: 'Secondaria' | 'Primaria'
  unitId: 'ef_sec_3_001' | 'tec_pri_1_001'
  targetField: 'obiettivi' | 'traguardo'
  visibleFieldLabel: 'Obiettivi' | 'Traguardo'
}

const PILOTS: Pilot[] = [
  {
    slug: 'educazione-fisica',
    order: 'Secondaria',
    unitId: 'ef_sec_3_001',
    targetField: 'obiettivi',
    visibleFieldLabel: 'Obiettivi',
  },
  {
    slug: 'tecnologia',
    order: 'Primaria',
    unitId: 'tec_pri_1_001',
    targetField: 'traguardo',
    visibleFieldLabel: 'Traguardo',
  },
]

async function cleanStorage(page: Page) {
  await page.evaluate(key => localStorage.removeItem(key), STORAGE_KEY)
}

async function configureProfile(page: Page, pilot: Pilot) {
  await page.getByRole('button', { name: 'Apri Impostazioni' }).click()
  await expect(page.getByRole('heading', { name: 'Impostazioni' })).toBeVisible()

  const form = page.getByRole('main')
  const selects = form.getByRole('combobox')
  const textboxes = form.getByRole('textbox')

  await selects.nth(0).selectOption('docente')
  await selects.nth(1).selectOption(pilot.order)
  await selects.nth(2).selectOption(pilot.slug)
  await textboxes.nth(2).fill('Audit')
  await textboxes.nth(3).fill('CML-473')
  await page.getByRole('button', { name: 'Salva il contesto' }).click()
  await expect(page.getByText('Contesto aggiornato.')).toBeVisible()
}

async function openRevision(page: Page) {
  if (await page.getByRole('button', { name: 'Proponi un aggiornamento' }).count() === 0) {
    await page.getByRole('button', { name: 'Apri o chiudi il menu' }).click()
  }
  await page.getByRole('button', { name: 'Proponi un aggiornamento' }).click()
  await expect(page.getByRole('heading', { name: 'Revisione' })).toBeVisible()
}

async function selectPilot(page: Page, pilot: Pilot) {
  const discipline = page.getByRole('main').getByRole('combobox').first()
  await discipline.selectOption(pilot.slug)
  await expect(page.getByText(new RegExp(`Campo:\\s*${pilot.visibleFieldLabel}`, 'i')).first()).toBeVisible()
  await expect(page.getByText(new RegExp(`${pilot.visibleFieldLabel} vigent`, 'i')).first()).toBeVisible()
  await expect(page.getByRole('button', { name: 'Accogli proposta' }).first()).toBeVisible()
}

async function reopenAfterReload(page: Page, pilot: Pilot) {
  await page.reload()
  await configureProfile(page, pilot)
  await openRevision(page)
  await selectPilot(page, pilot)
}

async function readPayload(page: Page) {
  const raw = await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY)
  expect(raw).not.toBeNull()
  return JSON.parse(raw ?? '{}') as {
    version?: string
    workDecisioni?: Record<string, {
      outcome?: string
      fieldDecision?: {
        targetField?: string
        valoreDeciso?: unknown
        fotografiaUnita?: Record<string, unknown> | null
      } | null
    }>
  }
}

async function auditPilot(page: Page, pilot: Pilot) {
  await configureProfile(page, pilot)
  await openRevision(page)
  await selectPilot(page, pilot)

  await page.getByRole('button', { name: 'Accogli proposta' }).first().click()
  await expect(page.getByText('Proposta accolta nel lavoro corrente').first()).toBeVisible()

  const accepted = await readPayload(page)
  expect(accepted.version).toBe('cml-work-decisions-v2')
  expect(accepted.workDecisioni?.[pilot.unitId]?.outcome).toBe('accepted_proposal')
  expect(accepted.workDecisioni?.[pilot.unitId]?.fieldDecision?.targetField).toBe(pilot.targetField)
  expect(accepted.workDecisioni?.[pilot.unitId]?.fieldDecision?.valoreDeciso).not.toBeNull()
  expect(accepted.workDecisioni?.[pilot.unitId]?.fieldDecision?.fotografiaUnita).toBeTruthy()

  await reopenAfterReload(page, pilot)
  await expect(page.getByText('Proposta accolta nel lavoro corrente').first()).toBeVisible()
  await page.getByRole('button', { name: 'Riapri' }).first().click()
  await expect(page.getByRole('button', { name: 'Accogli proposta' }).first()).toBeVisible()

  const reopened = await readPayload(page)
  expect(reopened.workDecisioni?.[pilot.unitId]?.outcome).toBe('reopened')
  expect(reopened.workDecisioni?.[pilot.unitId]?.fieldDecision?.targetField).toBe(pilot.targetField)
  expect(reopened.workDecisioni?.[pilot.unitId]?.fieldDecision?.valoreDeciso).toBeNull()
  expect(reopened.workDecisioni?.[pilot.unitId]?.fieldDecision?.fotografiaUnita).toBeNull()
}

test.describe('CML-473 comparative B03 remote audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await cleanStorage(page)
    await page.reload()
  })

  test('desktop: both canonical field-level pilots persist and reopen correctly', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', message => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })

    for (const pilot of PILOTS) {
      await cleanStorage(page)
      await page.reload()
      await auditPilot(page, pilot)
    }

    expect(consoleErrors).toEqual([])
    await cleanStorage(page)
  })
})

test.describe('CML-473 cold mobile audit', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('mobile: cold load uses the mobile navigation and exposes both pilot controls', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', message => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })

    await page.goto('/')
    await cleanStorage(page)
    await page.reload()

    for (const pilot of PILOTS) {
      await configureProfile(page, pilot)
      await openRevision(page)
      await selectPilot(page, pilot)
      await expect(page.getByRole('button', { name: 'Accogli proposta' }).first()).toBeVisible()
      await expect(page.getByRole('button', { name: 'Chiedi revisione' }).first()).toBeVisible()
      await expect(page.getByRole('button', { name: 'Personalizza il campo' }).first()).toBeVisible()
      await page.screenshot({ path: `test-results/cml-473-${pilot.slug}-mobile.png`, fullPage: true })
      await page.goto('/')
    }

    expect(consoleErrors).toEqual([])
    await cleanStorage(page)
  })
})
