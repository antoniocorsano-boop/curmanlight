import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const BASE = 'http://127.0.0.1:5173/curmanlight/'
const STORAGE_KEY = 'curmanlight:work-decisions:v1'
const UNIT_ID = 'ef_sec_3_001'
const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(scriptDir, '../..')
const screenshotDir = path.join(repoRoot, 'report/screenshots/CML-470')

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

async function configureProfile(page) {
  console.log('STEP configure profile')
  const profiloLink = page.getByText('Profilo', { exact: true }).first()
  assert(await profiloLink.isVisible(), 'Voce Profilo non visibile')
  await profiloLink.click()
  await page.waitForTimeout(300)

  const selects = page.locator('main select')
  assert(await selects.count() >= 2, 'Selettori Ruolo/Ordine non disponibili nel profilo')
  await selects.nth(0).selectOption('docente')
  await selects.nth(1).selectOption('Secondaria')

  const saveProfile = page.getByRole('button', { name: /Salva profilo/i })
  assert(await saveProfile.isVisible(), 'Pulsante Salva profilo non visibile')
  await saveProfile.click()
  await page.waitForTimeout(300)
}

async function openEducazioneFisica(page) {
  console.log('STEP open Educazione Fisica')
  const homeLink = page.getByText('Home', { exact: true }).first()
  if (await homeLink.isVisible()) {
    await homeLink.click()
    await page.waitForTimeout(300)
  }

  const proponi = page.getByText('Proponi un aggiornamento').first()
  assert(await proponi.isVisible(), 'Accesso a Revisione non visibile')
  await proponi.click()
  await page.waitForTimeout(500)

  const select = page.locator('main select').first()
  const options = await select.locator('option').allTextContents()
  const label = options.find(option => option.toLowerCase().includes('fisica'))
  assert(label, 'Disciplina Educazione Fisica non disponibile')
  await select.selectOption({ label })
  await page.waitForTimeout(500)
}

async function audit() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } })
  const page = await context.newPage()
  const consoleErrors = []
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  try {
    console.log('STEP load app')
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 })
    await page.evaluate(key => localStorage.removeItem(key), STORAGE_KEY)

    await configureProfile(page)
    await openEducazioneFisica(page)

    console.log('STEP verify card and deltas')
    const body = await page.locator('body').innerText()
    assert(body.includes('Espressione e inclusione') || body.includes(UNIT_ID), 'Card ef_sec_3_001 non visibile')
    assert(body.includes('Secondaria classe 1 e 2'), 'Delta Secondaria classe 1 e 2 non visibile')
    assert(body.includes('corrette abitudini'), 'Delta corrette abitudini non visibile')

    const accogli = page.getByRole('button', { name: /Accogli proposta/i }).first()
    const mantieni = page.getByRole('button', { name: /Mantieni vigente/i }).first()
    assert(await accogli.isVisible(), 'Pulsante Accogli proposta non visibile')
    assert(await mantieni.isVisible(), 'Pulsante Mantieni vigente non visibile')
    assert(await accogli.isEnabled(), 'Pulsante Accogli proposta disabilitato dopo configurazione profilo')

    console.log('STEP record accepted proposal')
    await accogli.click()
    await page.waitForTimeout(700)

    const saved = await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY)
    assert(saved, 'Payload decisionale non salvato in localStorage')
    const parsed = JSON.parse(saved)
    const decision = parsed.workDecisioni?.[UNIT_ID]
    assert(decision, `Decisione ${UNIT_ID} assente dal payload`)
    assert(decision.outcome === 'accepted_proposal', `Outcome inatteso: ${decision.outcome}`)

    console.log('STEP reload and restore')
    await page.reload({ waitUntil: 'networkidle' })
    await openEducazioneFisica(page)

    const savedAfterReload = await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY)
    assert(savedAfterReload, 'Payload decisionale perso dopo reload')
    const parsedAfterReload = JSON.parse(savedAfterReload)
    assert(parsedAfterReload.workDecisioni?.[UNIT_ID]?.outcome === 'accepted_proposal', 'Decisione non ripristinata dopo reload')
    assert((await page.locator('body').innerText()).includes('Proposta accolta nel lavoro corrente'), 'Esito accolto non ripristinato nella UI')

    await page.screenshot({ path: path.join(screenshotDir, 'revisione-ef-decision-persisted.png'), fullPage: true })
    await page.setViewportSize({ width: 390, height: 844 })
    await page.screenshot({ path: path.join(screenshotDir, 'revisione-ef-mobile-persisted.png'), fullPage: true })

    assert(consoleErrors.length === 0, `Errori console: ${consoleErrors.join(' | ')}`)

    console.log('STEP cleanup')
    await page.evaluate(key => localStorage.removeItem(key), STORAGE_KEY)
    const cleaned = await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY)
    assert(cleaned === null, 'Pulizia localStorage non riuscita')

    console.log(JSON.stringify({
      unitId: UNIT_ID,
      cardVisible: true,
      deltasVisible: true,
      accogliVisible: true,
      mantieniVigenteVisible: true,
      decisionSaved: true,
      outcome: 'accepted_proposal',
      decisionRestoredAfterReload: true,
      uiRestoredAfterReload: true,
      consoleErrors: 0,
      storageCleaned: true,
    }, null, 2))
  } catch (error) {
    await page.screenshot({ path: path.join(screenshotDir, 'revisione-ef-audit-failure.png'), fullPage: true }).catch(() => {})
    throw error
  } finally {
    await browser.close()
  }
}

audit().catch(error => {
  console.error('CML-470 audit failed:', error)
  process.exit(1)
})
