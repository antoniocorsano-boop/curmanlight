import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const url = 'https://antoniocorsano-boop.github.io/curmanlight/react-preview/'
const outDir = path.resolve('report/screenshots/CML-453')
await mkdir(outDir, { recursive: true })

const results = []
const record = (name, pass, detail = '') => results.push({ name, pass, detail })

async function openPreview(page) {
  for (let attempt = 1; attempt <= 12; attempt += 1) {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
    if (await page.getByRole('heading', { name: 'Cosa vuoi fare oggi?' }).isVisible().catch(() => false)) return
    await page.waitForTimeout(10000)
  }
  throw new Error('Anteprima React non aggiornata entro il limite previsto')
}

async function audit(name, viewport) {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport })
  const errors = []
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
  page.on('pageerror', err => errors.push(err.message))

  try {
    await openPreview(page)
    await page.locator('main').getByRole('button', { name: /Consulta il curricolo/ }).click()
    await page.getByRole('heading', { name: 'Consulta il curricolo' }).waitFor()

    const discipline = page.getByLabel('Disciplina')
    const order = page.getByLabel('Ordine di scuola')
    const nucleus = page.getByLabel('Nucleo')

    record(`${name}: disciplina non preimpostata`, (await discipline.inputValue()) === '')
    record(`${name}: 14 discipline`, (await discipline.locator('option').count()) === 15)
    record(`${name}: ordine inizialmente disabilitato`, await order.isDisabled())
    record(`${name}: nucleo inizialmente disabilitato`, await nucleus.isDisabled())

    await discipline.selectOption('geografia')
    await page.getByText('Curricolo di riferimento', { exact: true }).waitFor()
    record(`${name}: riepilogo curricolo`, true)
    record(`${name}: fonte visibile`, await page.getByText('Fonte', { exact: true }).isVisible())
    record(`${name}: validazione visibile`, await page.getByText('Validazione', { exact: true }).isVisible())
    record(`${name}: ordine abilitato`, !(await order.isDisabled()))
    record(`${name}: nucleo abilitato`, !(await nucleus.isDisabled()))
    record(`${name}: nuclei derivati`, (await nucleus.locator('option').count()) > 1)

    await order.selectOption('Primaria')
    await page.waitForTimeout(300)
    const resultText = await page.getByText(/unità trovata|unità trovate/).textContent()
    record(`${name}: risultati aggiornati`, Boolean(resultText), resultText ?? '')

    const cards = page.locator('section[aria-label="Unità del curricolo"] article')
    const cardsBeforeNucleus = await cards.count()
    record(`${name}: unità disponibili per Primaria`, cardsBeforeNucleus > 0, String(cardsBeforeNucleus))

    if (cardsBeforeNucleus > 0) {
      const firstCard = cards.first()
      await firstCard.getByRole('button', { name: /Apri il dettaglio/ }).click()
      record(`${name}: dettaglio aperto`, await firstCard.getByText('Obiettivi', { exact: true }).isVisible())
      record(`${name}: conoscenze visibili`, await firstCard.getByText('Conoscenze', { exact: true }).isVisible())
      record(`${name}: abilità visibili`, await firstCard.getByText('Abilità', { exact: true }).isVisible())
      record(`${name}: evidenze visibili`, await firstCard.getByText('Evidenze', { exact: true }).isVisible())
      record(`${name}: criteri visibili`, await firstCard.getByText('Criteri di valutazione', { exact: true }).isVisible())
      await firstCard.getByRole('button', { name: /Chiudi il dettaglio/ }).click()
    } else {
      for (const check of ['dettaglio aperto', 'conoscenze visibili', 'abilità visibili', 'evidenze visibili', 'criteri visibili']) {
        record(`${name}: ${check}`, false, 'Nessuna unità disponibile')
      }
    }

    const nucleusOptions = await nucleus.locator('option').allTextContents()
    const targetNucleus = nucleusOptions.find(value => value !== 'Tutti i nuclei')
    if (targetNucleus) {
      await nucleus.selectOption({ label: targetNucleus })
      await page.waitForTimeout(300)
    }
    record(`${name}: nucleo selezionabile`, Boolean(targetNucleus) && (await nucleus.inputValue()) !== 'Tutti', targetNucleus ?? '')
    record(`${name}: filtro nucleo coerente`, !targetNucleus || (await cards.count()) > 0, String(await cards.count()))
    record(`${name}: nessuna approvazione`, (await page.getByRole('button', { name: /Approva|Rifiuta/ }).count()) === 0)

    await page.getByRole('button', { name: 'Azzera filtri' }).click()
    record(`${name}: disciplina mantenuta`, (await discipline.inputValue()) === 'geografia')
    record(`${name}: nucleo azzerato`, (await nucleus.inputValue()) === 'Tutti')
  } catch (error) {
    record(`${name}: esecuzione completa`, false, error instanceof Error ? error.message : String(error))
  } finally {
    await page.screenshot({ path: path.join(outDir, `${name}-consultazione.png`), fullPage: true }).catch(() => {})
    record(`${name}: nessun errore console`, errors.length === 0, errors.join(' | '))
    await browser.close()
  }
}

await audit('desktop', { width: 1440, height: 1000 })
await audit('mobile', { width: 390, height: 844 })

const failed = results.filter(item => !item.pass)
const markdown = [
  '# CML-453 — B02 React Preview Interaction Audit', '',
  `- URL: ${url}`,
  `- Controlli superati: ${results.length - failed.length}/${results.length}`,
  `- Controlli falliti: ${failed.length}`, '',
  '| Controllo | Esito | Dettaglio |', '|---|---|---|',
  ...results.map(item => `| ${item.name} | ${item.pass ? 'PASS' : 'FAIL'} | ${String(item.detail).replace(/\|/g, '\\|')} |`), '',
  failed.length ? '`CML_453_B02_PREVIEW_AUDIT_FAILED`' : '`CML_453_B02_PREVIEW_AUDIT_PASS`', ''
].join('\n')

await writeFile('report/CML-453_b02_preview_interaction_audit.md', markdown)
console.log(markdown)
if (failed.length) process.exitCode = 1
