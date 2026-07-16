import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const baseUrl = process.env.CML_PREVIEW_URL || 'https://curmanlight-preview.antonio-corsano.workers.dev/'
const outDir = path.resolve('report/screenshots/CML-491')
await mkdir(outDir, { recursive: true })

const viewports = [
  { name: 'mobile-390x844', width: 390, height: 844 },
  { name: 'mobile-360x800', width: 360, height: 800 },
  { name: 'tablet-768x1024', width: 768, height: 1024 },
]

const results = []
const observations = []
function record(viewport, check, pass, detail = '') {
  results.push({ viewport, check, pass, detail })
}

const browser = await chromium.launch({ headless: true })

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } })
  const errors = []
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  page.on('pageerror', error => errors.push(error.message))

  await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 60000 })

  const main = page.locator('main')
  const consultCta = main.getByRole('button', { name: /Consulta il curricolo/ }).first()
  const guidedCta = main.getByRole('button', { name: /Inizia il test pilota|Riprendi il test pilota|Inizia il percorso|Riprendi il percorso/ }).first()

  await page.screenshot({ path: path.join(outDir, `${viewport.name}-viewport.png`) })

  const metrics = await main.evaluate(element => ({
    scrollWidth: element.scrollWidth,
    clientWidth: element.clientWidth,
    scrollHeight: element.scrollHeight,
    clientHeight: element.clientHeight,
  }))

  record(viewport.name, 'nessun overflow orizzontale', metrics.scrollWidth <= metrics.clientWidth + 1, `${metrics.scrollWidth}px / ${metrics.clientWidth}px`)
  record(viewport.name, 'titolo Home visibile', await main.getByRole('heading', { name: 'Cosa vuoi fare oggi?' }).isVisible())
  record(viewport.name, 'CTA Consulta presente', await consultCta.isVisible())
  record(viewport.name, 'CTA test pilota presente', await guidedCta.isVisible())
  record(viewport.name, 'touch target CTA principale', await consultCta.evaluate(element => {
    const rect = element.getBoundingClientRect()
    return rect.height >= 44 && rect.width >= 44
  }))
  record(viewport.name, 'nessun errore console', errors.length === 0, errors.join(' | '))

  const ctaOffset = await consultCta.evaluate(element => element.offsetTop)
  const guidedOffset = await guidedCta.evaluate(element => element.offsetTop)
  observations.push({
    viewport: viewport.name,
    contentHeight: metrics.scrollHeight,
    visibleHeight: metrics.clientHeight,
    ctaOffset: Math.round(ctaOffset),
    guidedOffset: Math.round(guidedOffset),
  })

  await page.evaluate(() => {
    const shell = document.querySelector('body > div > div')
    const contentRow = shell?.children?.[1]
    const mainElement = document.querySelector('main')
    if (shell instanceof HTMLElement) {
      shell.style.height = 'auto'
      shell.style.overflow = 'visible'
    }
    if (contentRow instanceof HTMLElement) {
      contentRow.style.overflow = 'visible'
      contentRow.style.minHeight = '0'
    }
    if (mainElement instanceof HTMLElement) {
      mainElement.style.overflow = 'visible'
      mainElement.style.height = 'auto'
    }
    document.documentElement.style.height = 'auto'
    document.body.style.height = 'auto'
    document.body.style.overflow = 'visible'
  })
  await page.screenshot({ path: path.join(outDir, `${viewport.name}-full.png`), fullPage: true })

  await page.close()
}

await browser.close()

const passed = results.filter(result => result.pass).length
const failed = results.filter(result => !result.pass)
const markdown = [
  '# CML-491 — React Home Mobile Visual Audit',
  '',
  `- URL: ${baseUrl}`,
  `- Controlli superati: ${passed}/${results.length}`,
  `- Controlli falliti: ${failed.length}`,
  '',
  '## Controlli',
  '',
  '| Viewport | Controllo | Esito | Dettaglio |',
  '|---|---|---|---|',
  ...results.map(result => `| ${result.viewport} | ${result.check} | ${result.pass ? 'PASS' : 'FAIL'} | ${String(result.detail || '').replaceAll('|', '\\|')} |`),
  '',
  '## Misure di densità',
  '',
  '| Viewport | Altezza contenuto | Altezza visibile | Offset CTA Consulta | Offset CTA test pilota |',
  '|---|---:|---:|---:|---:|',
  ...observations.map(item => `| ${item.viewport} | ${item.contentHeight}px | ${item.visibleHeight}px | ${item.ctaOffset}px | ${item.guidedOffset}px |`),
  '',
  '## Evidenze',
  '',
  '- screenshot viewport e full-page in `report/screenshots/CML-491/`;',
  '- controllo overflow orizzontale sul contenitore `main`;',
  '- visibilità delle CTA principali nella superficie di contenuto;',
  '- touch target minimo;',
  '- errori console e runtime.',
  '',
  failed.length
    ? '## Verdetto\n\n`CML_491_REACT_HOME_MOBILE_VISUAL_AUDIT_FAILED`'
    : '## Verdetto\n\n`CML_491_REACT_HOME_MOBILE_VISUAL_AUDIT_PASS`',
  '',
].join('\n')

await writeFile('report/CML-491_react_home_mobile_visual_audit.md', markdown)
console.log(markdown)
if (failed.length) process.exitCode = 1
