import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

// Re-run against the preview after the CML-449C mobile sidebar correction.
const baseUrl = 'https://antoniocorsano-boop.github.io/curmanlight/react-preview/'
const outDir = path.resolve('report/screenshots/CML-449B')
await mkdir(outDir, { recursive: true })

const results = []
function record(name, pass, detail = '') { results.push({ name, pass, detail }) }

async function auditViewport(name, viewport) {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport })
  const errors = []
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
  page.on('pageerror', err => errors.push(err.message))

  await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 60000 })
  const main = page.locator('main')
  await page.screenshot({ path: path.join(outDir, `${name}-home.png`), fullPage: true })

  record(`${name}: Home title`, await main.getByRole('heading', { name: 'Cosa vuoi fare oggi?' }).isVisible())
  for (const label of ['Consulta il curricolo', 'Prepara una progettazione', 'Proponi un aggiornamento', 'Esporta un documento']) {
    record(`${name}: ${label}`, await main.getByText(label, { exact: true }).first().isVisible())
  }

  const planning = main.getByRole('button', { name: /Prepara una progettazione/ })
  record(`${name}: Progettazione non operativa`, await planning.isDisabled())

  await main.getByRole('button', { name: /Consulta il curricolo/ }).click()
  await page.waitForTimeout(300)
  record(`${name}: Consultazione aperta`, await page.getByText('Consulta il curricolo', { exact: true }).first().isVisible())
  await page.screenshot({ path: path.join(outDir, `${name}-consultazione.png`), fullPage: true })

  const navButton = async (label) => {
    const nav = page.getByRole('navigation', { name: 'Navigazione principale' })
    if (!(await nav.isVisible())) await page.getByRole('button', { name: 'Apri o chiudi il menu' }).click()
    await nav.getByRole('button', { name: label }).click()
  }

  await navButton(/^Home$/)
  await page.locator('main').getByRole('button', { name: /Proponi un aggiornamento/ }).click()
  await page.waitForTimeout(300)
  record(`${name}: Revisione aperta`, await page.getByText('Proponi un aggiornamento', { exact: true }).first().isVisible())
  await page.screenshot({ path: path.join(outDir, `${name}-revisione.png`), fullPage: true })

  await navButton(/^Home$/)
  await page.locator('main').getByRole('button', { name: /Esporta un documento/ }).click()
  await page.waitForTimeout(300)
  record(`${name}: Esportazioni aperte`, await page.getByText('Esporta un documento', { exact: true }).first().isVisible())
  await page.screenshot({ path: path.join(outDir, `${name}-esportazioni.png`), fullPage: true })

  await page.getByRole('button', { name: /Apri Impostazioni|Vai a Impostazioni/ }).first().click()
  await page.waitForTimeout(300)
  record(`${name}: Impostazioni aperte`, await page.getByRole('heading', { name: 'Impostazioni' }).isVisible())

  const discipline = page.getByLabel('Disciplina')
  if (await discipline.isVisible()) {
    await discipline.selectOption({ index: 1 })
    const selected = await discipline.inputValue()
    await page.getByRole('button', { name: 'Salva il contesto' }).click()
    record(`${name}: Salvataggio contesto`, await page.getByText('Contesto aggiornato.').isVisible())
    await navButton(/^Home$/)
    await page.getByRole('button', { name: /Apri Impostazioni|Vai a Impostazioni/ }).first().click()
    record(`${name}: Disciplina conservata`, (await page.getByLabel('Disciplina').inputValue()) === selected)
  }
  await page.screenshot({ path: path.join(outDir, `${name}-impostazioni.png`), fullPage: true })

  if (name === 'mobile') {
    const nav = page.getByRole('navigation', { name: 'Navigazione principale' })
    if (!(await nav.isVisible())) await page.getByRole('button', { name: 'Apri o chiudi il menu' }).click()
    record('mobile: menu aperto', await nav.isVisible())
    await nav.getByRole('button', { name: /Consulta il curricolo/ }).click()
    await page.waitForTimeout(300)
    record('mobile: menu chiuso dopo navigazione', !(await nav.isVisible()))
    await page.screenshot({ path: path.join(outDir, 'mobile-after-nav.png'), fullPage: true })
  }

  record(`${name}: nessun errore console`, errors.length === 0, errors.join(' | '))
  await browser.close()
}

await auditViewport('desktop', { width: 1440, height: 1000 })
await auditViewport('mobile', { width: 390, height: 844 })

const passed = results.filter(r => r.pass).length
const failed = results.filter(r => !r.pass)
const markdown = [
  '# CML-449B — React Preview Visual Interaction Audit', '',
  `- URL: ${baseUrl}`,
  `- Controlli superati: ${passed}/${results.length}`,
  `- Controlli falliti: ${failed.length}`, '',
  '| Controllo | Esito | Dettaglio |', '|---|---|---|',
  ...results.map(r => `| ${r.name} | ${r.pass ? 'PASS' : 'FAIL'} | ${String(r.detail || '').replaceAll('|', '\\|')} |`), '',
  failed.length ? '## Verdetto\n\n`CML_449B_REACT_PREVIEW_VISUAL_AUDIT_FAILED`' : '## Verdetto\n\n`CML_449B_REACT_PREVIEW_VISUAL_AUDIT_PASS`', ''
].join('\n')

await writeFile('report/CML-449B_react_preview_visual_interaction_audit.md', markdown)
console.log(markdown)
if (failed.length) process.exitCode = 1
