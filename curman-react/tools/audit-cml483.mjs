import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const BASE = 'http://127.0.0.1:5174/curmanlight/'
const EVAL_STORAGE_KEY = 'curmanlight:guided-teacher-evaluation:v1'
const DECISION_STORAGE_KEY = 'curmanlight:work-decisions:v1'
const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(scriptDir, '../..')
const screenshotDir = path.join(repoRoot, 'report/screenshots/CML-483')
const exportDir = path.join(repoRoot, 'report/CML-483-export-test')

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

async function audit() {
  await fs.mkdir(screenshotDir, { recursive: true })
  await fs.mkdir(exportDir, { recursive: true })

  const consoleErrors = []
  const networkRequests = []
  const results = {}

  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })

  // ===================== DESKTOP =====================
  console.log('=== DESKTOP 1440x1000 ===')
  const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  const page = await desktopCtx.newPage()

  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(`[desktop] ${msg.text()}`) })
  page.on('request', req => {
    const url = req.url()
    if (url.includes('guided') || url.includes('evaluation') || url.includes('osservaz')) {
      networkRequests.push(`[desktop] ${req.method()} ${url}`)
    }
  })

  try {
    // 1. Load app + clean state
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 })
    await page.evaluate(() => {
      localStorage.removeItem('curmanlight:guided-teacher-evaluation:v1')
      localStorage.removeItem('curmanlight:work-decisions:v1')
    })
    await page.reload({ waitUntil: 'networkidle' })
    console.log('1. App loaded, state cleaned')

    // 2. Verify Home shows evaluation section
    const evalSection = page.locator('section', { hasText: 'Esplora lo strumento e lascia le tue osservazioni' })
    assert(await evalSection.isVisible(), 'Evaluation section not visible on Home')
    console.log('2. Evaluation section visible on Home')
    await page.screenshot({ path: path.join(screenshotDir, '01-home-desktop.png'), fullPage: true })

    // 3. Open the guided path
    const startBtn = page.getByRole('button', { name: /Inizia il percorso/i })
    assert(await startBtn.isVisible(), 'Start button not visible')
    await startBtn.click()
    await page.waitForTimeout(400)
    console.log('3. Path opened')

    // Verify dialog
    const dialog = page.locator('[role="dialog"]')
    assert(await dialog.isVisible(), 'Dialog not visible')
    await page.screenshot({ path: path.join(screenshotDir, '02-panel-desktop-step1.png'), fullPage: true })

    // 4. Insert a note
    const textarea = page.locator('#guided-evaluation-note')
    assert(await textarea.isVisible(), 'Textarea not visible')
    await textarea.fill('Test di osservazione CML-483: la Home e chiara.')
    console.log('4. Note inserted')

    // 5. Advance to step 2
    const continueBtn = page.getByRole('button', { name: /^Continua$/ })
    assert(await continueBtn.isVisible(), 'Continue button not visible')
    await continueBtn.click()
    await page.waitForTimeout(300)
    const headerText = await page.locator('#evaluation-dialog-title').innerText()
    assert(headerText.includes('Consultare'), `Step 2 title wrong: ${headerText}`)
    console.log('5. Advanced to step 2')

    // 6. Go back to step 1
    const backBtn = page.getByRole('button', { name: /^Indietro$/ })
    assert(await backBtn.isVisible(), 'Back button not visible')
    assert(await backBtn.isEnabled(), 'Back button disabled at step 2')
    await backBtn.click()
    await page.waitForTimeout(300)
    const headerBack = await page.locator('#evaluation-dialog-title').innerText()
    assert(headerBack.includes('Orientarsi'), `Back to step 1 failed: ${headerBack}`)
    console.log('6. Back to step 1')

    // 7. Verify note persists after back
    const noteVal = await textarea.inputValue()
    assert(noteVal.includes('Test di osservazione CML-483'), 'Note lost after back navigation')
    console.log('7. Note persisted after back')

    // Advance again to step 2
    await continueBtn.click()
    await page.waitForTimeout(300)

    // Skip to step 3 (Salta removed — use Continue)
    await continueBtn.click()
    await page.waitForTimeout(300)
    const headerSkip = await page.locator('#evaluation-dialog-title').innerText()
    assert(headerSkip.includes('attivit') || headerSkip.includes('Provare'), `Skip to step 3 failed: ${headerSkip}`)
    console.log('7b. Advanced to step 3')

    // 8. Close panel
    const closeBtn = page.getByRole('button', { name: /Chiudi e continua/i })
    assert(await closeBtn.isVisible(), 'Close button not visible')
    await closeBtn.click()
    await page.waitForTimeout(300)
    assert(!(await dialog.isVisible()), 'Dialog still visible after close')
    console.log('8. Panel closed')

    // 9. Navigate to Consultazione
    const consultBtn = page.getByRole('button', { name: /Consulta il curricolo/i }).first()
    assert(await consultBtn.isVisible(), 'Consulta button not visible')
    await consultBtn.click()
    await page.waitForTimeout(800)
    console.log('9. Navigated to Consultazione')

    // 10. Return to Home
    const homeLink = page.getByRole('button', { name: /^Home$/ }).first()
    await homeLink.click()
    await page.waitForTimeout(500)
    console.log('10. Returned to Home')

    // 11. Resume from saved step
    const resumeBtn = page.getByRole('button', { name: /Riprendi il percorso/i })
    assert(await resumeBtn.isVisible(), 'Resume button not visible')
    await resumeBtn.click()
    await page.waitForTimeout(400)
    const resumedHeader = await page.locator('#evaluation-dialog-title').innerText()
    assert(resumedHeader.includes('attivit') || resumedHeader.includes('Provare'), `Resume failed, header: ${resumedHeader}`)
    console.log('11. Resumed from saved step')

    // Close again for reload test
    await closeBtn.click()
    await page.waitForTimeout(300)

    // 12. Reload page
    await page.reload({ waitUntil: 'networkidle' })
    console.log('12. Page reloaded')

    // 13. Verify notes survive reload
    const savedData = await page.evaluate(key => localStorage.getItem(key), EVAL_STORAGE_KEY)
    assert(savedData, 'Evaluation data lost after reload')
    const parsed = JSON.parse(savedData)
    assert(parsed.notes[0].includes('Test di osservazione CML-483'), 'Note 0 lost after reload')
    assert(parsed.currentStep >= 2, `Step not preserved after reload: ${parsed.currentStep}`)
    console.log('13. Notes preserved after reload')
    await page.screenshot({ path: path.join(screenshotDir, '06-home-after-reload-desktop.png'), fullPage: true })

    // 14. Go to last step
    const resumeBtn2 = page.getByRole('button', { name: /Riprendi il percorso/i })
    await resumeBtn2.click()
    await page.waitForTimeout(400)
    // Navigate to last step by clicking Continue repeatedly
    for (let i = 0; i < 10; i++) {
      const currentTitle = await page.locator('#evaluation-dialog-title').innerText()
      if (currentTitle.includes('Restituire')) break
      const btn = page.getByRole('button', { name: /^Continua$/ })
      if (await btn.isVisible().catch(() => false)) {
        await btn.click()
        await page.waitForTimeout(200)
      }
    }
    const lastStepTitle = await page.locator('#evaluation-dialog-title').innerText()
    assert(lastStepTitle.includes('Restituire'), `Not on last step: ${lastStepTitle}`)
    console.log('14. Reached last step')

    // 15. Fill second test availability
    const yesBtn = page.getByRole('button', { name: /^Sì$/ }).first()
    assert(await yesBtn.isVisible(), 'Sì button not visible for second test')
    await yesBtn.click()
    await page.waitForTimeout(200)
    console.log('15. Second test availability set')

    // 16. Complete the path
    const completeBtn = page.getByRole('button', { name: /Salva e completa/i })
    assert(await completeBtn.isVisible(), 'Complete button not visible')
    await completeBtn.click()
    await page.waitForTimeout(400)
    const completedBody = await page.locator('[role="dialog"]').innerText()
    assert(completedBody.includes('completato') || completedBody.includes('Grazie'), 'Completion message not shown')
    console.log('16. Path completed')
    await page.screenshot({ path: path.join(screenshotDir, '03-last-step-desktop-completed.png'), fullPage: true })

    // 17. Export JSON
    const exportBtn = page.getByRole('button', { name: /Esporta osservazioni/i })
    assert(await exportBtn.isVisible(), 'Export button not visible')
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      exportBtn.click(),
    ])
    const downloadPath = path.join(exportDir, download.suggestedFilename())
    await download.saveAs(downloadPath)
    console.log(`17. Exported: ${download.suggestedFilename()}`)

    // 18. Validate exported file
    const exportContent = JSON.parse(await fs.readFile(downloadPath, 'utf8'))
    assert(exportContent.schema === 'cml-guided-teacher-evaluation-v1', 'Export schema missing')
    assert(exportContent.id, 'Export id missing')
    assert(exportContent.createdAt, 'Export createdAt missing')
    assert(exportContent.updatedAt, 'Export updatedAt missing')
    assert(typeof exportContent.currentStep === 'number', 'Export currentStep missing')
    assert(typeof exportContent.completed === 'boolean', 'Export completed missing')
    assert(Array.isArray(exportContent.notes), 'Export notes missing')
    assert(Array.isArray(exportContent.responses), 'Export responses missing')
    assert(exportContent.privacy, 'Export privacy missing')
    assert(exportContent.product === 'CurManLight React', 'Export product missing')
    assert(exportContent.secondTestAvailable !== undefined, 'Export secondTestAvailable missing')
    // Verify no sensitive data
    assert(!JSON.stringify(exportContent).includes('curmanlight:work-decisions'), 'B03 decisions leaked into export')
    console.log('18. Export file validated')

    // Close panel
    const closeBtn2 = page.getByRole('button', { name: /Chiudi e continua/i })
    await closeBtn2.click()
    await page.waitForTimeout(500)
    assert(!(await dialog.isVisible()), 'Dialog still visible after close (step 19)')

    // 19. Delete the path with confirmation
    const resumeBtn3 = page.getByRole('button', { name: /Riprendi il percorso/i })
    await resumeBtn3.click()
    await page.waitForTimeout(600)
    assert(await dialog.isVisible(), 'Dialog not visible after reopen for delete')

    const deleteBtn = page.getByRole('button', { name: /Cancella il percorso locale/i })
    assert(await deleteBtn.isVisible(), 'Delete button not visible')
    await deleteBtn.click()
    await page.waitForTimeout(500)

    // Confirmation should appear
    const confirmDelete = page.getByRole('button', { name: /Sì, elimina/i })
    assert(await confirmDelete.isVisible(), 'Confirm delete button not visible')
    await confirmDelete.click()
    await page.waitForTimeout(600)
    console.log('19. Path deleted with confirmation')

    // 20. Verify localStorage removed
    const afterDelete = await page.evaluate(key => localStorage.getItem(key), EVAL_STORAGE_KEY)
    assert(afterDelete === null, 'Evaluation key still in localStorage after delete')
    console.log('20. localStorage key removed')

    // 21. No console errors (already tracking)
    console.log(`21. Console errors: ${consoleErrors.length}`)
    if (consoleErrors.length > 0) consoleErrors.forEach(e => console.log('  ERROR:', e))

    // 22. Network requests check
    console.log(`22. Evaluation-related network requests: ${networkRequests.length}`)
    if (networkRequests.length > 0) networkRequests.forEach(r => console.log('  NET:', r))

    // 23. B03 decisions not modified
    const b03 = await page.evaluate(key => localStorage.getItem(key), DECISION_STORAGE_KEY)
    assert(b03 === null, 'B03 decisions modified by evaluation flow')
    console.log('23. B03 decisions unchanged')

    // 24. Consultazione and Revisione regression check
    const consultBtn2 = page.getByRole('button', { name: /Consulta il curricolo/i }).first()
    await consultBtn2.click()
    await page.waitForTimeout(800)
    const consultBody = await page.locator('body').innerText()
    assert(consultBody.includes('Consulta') || consultBody.includes('curricolo'), 'Consultation view regression')
    console.log('24. Consultation view OK')

    const homeLink2 = page.getByRole('button', { name: /^Home$/ }).first()
    await homeLink2.click()
    await page.waitForTimeout(500)
    const revisionBtn = page.getByRole('button', { name: /Proponi un aggiornamento/i }).first()
    await revisionBtn.click()
    await page.waitForTimeout(800)
    const revisionBody = await page.locator('body').innerText()
    assert(revisionBody.includes('Revisione') || revisionBody.includes('Proposta') || revisionBody.includes('Nessun lavoro'), 'Revision view regression')
    console.log('25. Revision view OK')

    // 25b. Final cleanup
    await page.evaluate(() => localStorage.removeItem('curmanlight:guided-teacher-evaluation:v1'))
    await page.evaluate(() => localStorage.removeItem('curmanlight:work-decisions:v1'))

  } catch (error) {
    await page.screenshot({ path: path.join(screenshotDir, 'audit-failure-desktop.png'), fullPage: true }).catch(() => {})
    throw error
  } finally {
    await desktopCtx.close()
  }

  // ===================== MOBILE =====================
  console.log('\n=== MOBILE 390x844 ===')
  const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } })
  const mPage = await mobileCtx.newPage()
  mPage.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(`[mobile] ${msg.text()}`) })

  try {
    await mPage.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 })
    await mPage.evaluate(() => localStorage.removeItem('curmanlight:guided-teacher-evaluation:v1'))
    await mPage.reload({ waitUntil: 'networkidle' })

    // Home mobile screenshot
    await mPage.screenshot({ path: path.join(screenshotDir, '04-home-mobile.png'), fullPage: true })
    console.log('M1. Home mobile captured')

    // Open evaluation
    const mStartBtn = mPage.getByRole('button', { name: /Inizia il percorso/i })
    await mStartBtn.click()
    await mPage.waitForTimeout(400)
    await mPage.screenshot({ path: path.join(screenshotDir, '05-panel-mobile.png'), fullPage: true })
    console.log('M2. Panel mobile captured')

    // Verify no [object Object]
    const mBody = await mPage.locator('body').innerText()
    assert(!mBody.includes('[object Object]'), '[object Object] found in mobile UI')
    console.log('M3. No [object Object] in mobile')

    // Cleanup
    await mPage.evaluate(() => localStorage.removeItem('curmanlight:guided-teacher-evaluation:v1'))
  } catch (error) {
    await mPage.screenshot({ path: path.join(screenshotDir, 'audit-failure-mobile.png'), fullPage: true }).catch(() => {})
    throw error
  } finally {
    await mobileCtx.close()
    await browser.close()
  }

  console.log('\n=== SUMMARY ===')
  console.log(`Console errors: ${consoleErrors.length}`)
  console.log(`Network requests (eval-related): ${networkRequests.length}`)
  console.log(JSON.stringify({
    desktop: 'PASS',
    mobile: 'PASS',
    consoleErrors: consoleErrors.length,
    networkRequests: networkRequests.length,
    screenshots: await fs.readdir(screenshotDir),
  }, null, 2))
}

audit().catch(err => {
  console.error('AUDIT FAILED:', err.message)
  process.exit(1)
})
