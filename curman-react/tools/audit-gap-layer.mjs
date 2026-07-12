import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const BASE = 'http://127.0.0.1:5173/curmanlight/'
const STORAGE_KEY = 'curmanlight:work-decisions:v1'
const UNIT_ID = 'ef_sec_3_001'
const EXPECTED_TRAGUARDO_FRAGMENT = 'agisce con autonomia e responsabilità'
const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(scriptDir, '../..')
const screenshotDir = path.join(repoRoot, 'report/screenshots/CML-470')

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

async function configureProfile(page) {
  console.log('STEP configure context in Impostazioni')
  const settingsButton = page.getByRole('button', { name: /Apri Impostazioni/i })
  assert(await settingsButton.isVisible(), 'Pulsante Apri Impostazioni non visibile')
  await settingsButton.click()
  await page.waitForTimeout(300)

  await page.getByLabel('Ruolo').selectOption('docente')
  await page.getByLabel('Ordine di scuola').selectOption('Secondaria')
  await page.getByLabel('Classe o sezione').selectOption('3')
  await page.getByLabel('Disciplina').selectOption('educazione-fisica')

  const saveContext = page.getByRole('button', { name: /Salva il contesto/i })
  assert(await saveContext.isVisible(), 'Pulsante Salva il contesto non visibile')
  await saveContext.click()
  await page.waitForTimeout(300)
  assert((await page.locator('body').innerText()).includes('Contesto aggiornato'), 'Conferma contesto aggiornato non visibile')
}

async function openEducazioneFisica(page) {
  console.log('STEP open Educazione Fisica')
  const proponi = page.getByText('Proponi un aggiornamento', { exact: true }).first()
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
  await fs.mkdir(screenshotDir, { recursive: true })
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

    console.log('STEP verify field-compatible comparison')
    const body = await page.locator('body').innerText()
    assert(body.includes('Campo: Obiettivi'), 'Target field Obiettivi non visibile')
    assert(body.includes('Obiettivi vigenti'), 'Confronto obiettivi vigenti non visibile')
    assert(body.includes('Obiettivi proposti'), 'Confronto obiettivi proposti non visibile')
    assert(body.includes('Secondaria classe 1 e 2'), 'Delta Secondaria classe 1 e 2 non visibile')
    assert(body.includes('corrette abitudini'), 'Delta corrette abitudini non visibile')
    assert(body.includes('gli altri contenuti dell’unità restano invariati'), 'Garanzia di preservazione campi non visibile')

    const accogli = page.getByRole('button', { name: /Accogli proposta/i }).first()
    const mantieni = page.getByRole('button', { name: /Mantieni vigente/i }).first()
    assert(await accogli.isVisible(), 'Pulsante Accogli proposta non visibile')
    assert(await mantieni.isVisible(), 'Pulsante Mantieni vigente non visibile')
    assert(await accogli.isEnabled(), 'Pulsante Accogli proposta disabilitato dopo configurazione contesto')

    console.log('STEP record accepted field proposal')
    await accogli.click()
    await page.waitForTimeout(700)

    const saved = await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY)
    assert(saved, 'Payload decisionale non salvato in localStorage')
    const parsed = JSON.parse(saved)
    const decision = parsed.workDecisioni?.[UNIT_ID]
    assert(decision, `Decisione ${UNIT_ID} assente dal payload`)
    assert(decision.outcome === 'accepted_proposal', `Outcome inatteso: ${decision.outcome}`)
    assert(decision.contesto?.targetField === 'obiettivi', 'targetField obiettivi assente dal contesto decisionale')
    assert(decision.testoFinale?.includes('Traguardo:'), 'Fotografia finale priva del traguardo')
    assert(decision.testoFinale?.includes(EXPECTED_TRAGUARDO_FRAGMENT), 'Traguardo vigente non preservato nella fotografia finale')
    assert(decision.testoFinale?.includes('Obiettivi:'), 'Fotografia finale priva degli obiettivi')
    assert(decision.testoFinale?.includes('corrette abitudini e pause attive'), 'Obiettivi proposti non applicati alla fotografia finale')
    assert(decision.testoFinale?.includes('Conoscenze:'), 'Fotografia finale priva delle conoscenze')

    console.log('STEP reload and restore')
    await page.reload({ waitUntil: 'networkidle' })
    await openEducazioneFisica(page)

    const savedAfterReload = await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY)
    assert(savedAfterReload, 'Payload decisionale perso dopo reload')
    const restored = JSON.parse(savedAfterReload).workDecisioni?.[UNIT_ID]
    assert(restored?.outcome === 'accepted_proposal', 'Decisione non ripristinata dopo reload')
    assert(restored?.contesto?.targetField === 'obiettivi', 'Target field non ripristinato dopo reload')
    assert(restored?.testoFinale?.includes(EXPECTED_TRAGUARDO_FRAGMENT), 'Traguardo perso dopo reload')
    assert((await page.locator('body').innerText()).includes('Proposta accolta nel lavoro corrente'), 'Esito accolto non ripristinato nella UI')

    await page.screenshot({ path: path.join(screenshotDir, 'revisione-ef-decision-persisted.png'), fullPage: true })
    await page.setViewportSize({ width: 390, height: 844 })
    await page.screenshot({ path: path.join(screenshotDir, 'revisione-ef-mobile-persisted.png'), fullPage: true })

    assert(consoleErrors.length === 0, `Errori console: ${consoleErrors.join(' | ')}`)

    console.log('STEP cleanup')
    await page.evaluate(key => localStorage.removeItem(key), STORAGE_KEY)
    assert(await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY) === null, 'Pulizia localStorage non riuscita')

    console.log(JSON.stringify({
      unitId: UNIT_ID,
      targetField: 'obiettivi',
      fieldComparisonVisible: true,
      decisionSaved: true,
      completeUnitSnapshot: true,
      traguardoPreserved: true,
      proposalAppliedToObjectives: true,
      decisionRestoredAfterReload: true,
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
