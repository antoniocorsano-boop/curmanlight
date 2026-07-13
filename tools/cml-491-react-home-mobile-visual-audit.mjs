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
  await page.screenshot({ path: path.join(outDir, `${viewport.name}-viewport.png`) })
  await page.screenshot({ path: path.join(outDir, `${viewport.name}-full.png`), fullPage: true })

  const metrics = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    documentHeight: document.documentElement.scrollHeight,
    viewportHeight: document.documentElement.clientHeight,
  }))

  record(viewport.name, 'nessun overflow orizzontale', metrics.documentWidth <= metrics.viewportWidth + 1, `${metrics.documentWidth}px / ${metrics.viewportWidth}px`)
  record(viewport.name, 'titolo Home visibile', await page.getByRole('heading', { name: 'Cosa vuoi fare oggi?' }).isVisible())
  record(viewport.name, 'CTA Consulta visibile', await page.getByRole('button', { name: /Consulta il curricolo/ }).isVisible())
  record(viewport.name, 'CTA percorso guidato visibile', await page.getByRole('button', { name: /Inizia il percorso|Riprendi il percorso/ }).isVisible())
  record(viewport.name, 'touch target CTA principale', await page.getByRole('button', { name: /Consulta il curricolo/ }).evaluate(el => {
    const rect = el.getBoundingClientRect()
    return rect.height >= 44 && rect.width >= 44
  }))
  record(viewport.name, 'nessun errore console', errors.length === 0, errors.join(' | '))

  const ctaTop = await page.getByRole('button', { name: /Consulta il curricolo/ }).evaluate(el => el.getBoundingClientRect().top)
  const guidedTop = await page.getByRole('button', { name: /Inizia il percorso|Riprendi il percorso/ }).evaluate(el => el.getBoundingClientRect().top)
  observations.push({
    viewport: viewport.name,
    pageHeight: metrics.documentHeight,
    ctaTop: Math.round(ctaTop),
    guidedTop: Math.round(guidedTop),
  })

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
  '| Viewport | Altezza pagina | Inizio CTA Consulta | Inizio CTA percorso guidato |',
  '|---|---:|---:|---:|',
  ...observations.map(item => `| ${item.viewport} | ${item.pageHeight}px | ${item.ctaTop}px | ${item.guidedTop}px |`),
  '',
  '## Evidenze',
  '',
  '- screenshot viewport e full-page in `report/screenshots/CML-491/`;',
  '- controllo overflow orizzontale;',
  '- visibilità delle CTA principali;',
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
