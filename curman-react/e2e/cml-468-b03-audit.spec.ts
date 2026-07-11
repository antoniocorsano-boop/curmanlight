import { expect, test, type Page } from '@playwright/test'

const STORAGE_KEY = 'curmanlight:work-decisions:v1'

async function configureProfile(page: Page) {
  await page.getByRole('button', { name: 'Apri Impostazioni' }).click()
  await page.getByLabel('Ruolo', { exact: true }).selectOption('docente')
  await page.getByLabel('Ordine di scuola', { exact: true }).selectOption('Secondaria')
  await page.getByLabel('Disciplina', { exact: true }).selectOption('tecnologia')
  await page.getByLabel('Nome', { exact: true }).fill('Audit')
  await page.getByLabel('Cognome', { exact: true }).fill('B03')
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

test.describe('CML-468 B03 interactive audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(key => localStorage.removeItem(key), STORAGE_KEY)
    await page.reload()
  })

  test('desktop: complete workflow persists across reloads', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', message => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })

    await configureProfile(page)
    await openRevision(page)
    await expect(page.getByRole('status')).toContainText('conservate automaticamente')

    const accept = page.getByRole('button', { name: 'Accogli proposta' }).first()
    await expect(accept).toBeVisible()
    await accept.click()
    await expect(page.getByText('Proposta accolta nel lavoro corrente').first()).toBeVisible()
    await expect(page.getByRole('status')).toContainText('salvate')

    expect(await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY)).toContain('accepted_proposal')

    await page.reload()
    await expect(page.getByRole('status')).toContainText('ripristinate')
    await expect(page.getByText('Proposta accolta nel lavoro corrente').first()).toBeVisible()

    await page.getByRole('button', { name: 'Riapri' }).first().click()
    await page.getByRole('button', { name: 'Chiedi revisione' }).first().click()
    await page.getByLabel('Motivo della revisione richiesta', { exact: true }).fill('Chiarire il raccordo con il nucleo tematico.')
    await page.getByRole('button', { name: 'Registra richiesta' }).click()
    await expect(page.getByText('Revisione richiesta prima della scelta finale').first()).toBeVisible()
    await expect(page.getByText('Chiarire il raccordo con il nucleo tematico.').first()).toBeVisible()

    await page.getByRole('button', { name: 'Riapri' }).first().click()
    await page.getByRole('button', { name: 'Usa testo personalizzato' }).first().click()
    await page.getByLabel('Testo da utilizzare nel lavoro corrente', { exact: true }).fill('Testo curricolare personalizzato per audit B03.')
    await page.getByLabel('Nota facoltativa', { exact: true }).fill('Nota locale non vincolante.')
    await page.getByRole('button', { name: 'Registra testo' }).click()
    await expect(page.getByText('Testo personalizzato registrato nel lavoro corrente').first()).toBeVisible()

    await page.reload()
    await expect(page.getByText('Testo personalizzato registrato nel lavoro corrente').first()).toBeVisible()
    const storedAfterCustom = await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY)
    expect(storedAfterCustom).toContain('accepted_custom')
    expect(storedAfterCustom).toContain('Nota locale non vincolante.')
    expect(consoleErrors).toEqual([])
  })

  test('mobile: navigation and decision controls remain usable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await configureProfile(page)
    await openRevision(page)
    await expect(page.getByRole('button', { name: 'Accogli proposta' }).first()).toBeVisible()
    await expect(page.getByRole('button', { name: 'Chiedi revisione' }).first()).toBeVisible()
    await expect(page.getByRole('button', { name: 'Usa testo personalizzato' }).first()).toBeVisible()
    await page.screenshot({ path: 'test-results/cml-468-mobile.png', fullPage: true })
  })
})
