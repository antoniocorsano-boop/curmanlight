import { chromium } from 'playwright';

const BASE = 'http://localhost:5173/curmanlight/';

async function audit() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

  try {
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(2000);

    // Click on "Proponi un aggiornamento" card on home page
    const proponi = page.locator('text=Proponi un aggiornamento').first();
    if (await proponi.isVisible()) {
      await proponi.click();
      await page.waitForTimeout(2000);
      console.log('Clicked "Proponi un aggiornamento"');
    }

    // Check what we have now
    const bodyText = await page.textContent('body');
    console.log('URL:', page.url());
    console.log('Has "Revisione" heading:', bodyText.includes('Revisione'));

    // Take screenshot of revisione view
    await page.screenshot({ path: 'report/screenshots/CML-470/revisione-initial.png', fullPage: true });

    // Look for discipline selector
    const selects = await page.locator('select').count();
    console.log('Select count:', selects);

    if (selects > 0) {
      // Select Educazione Fisica
      await page.locator('select').first().selectOption({ label: 'Educazione fisica' }).catch(async () => {
        // Try value-based
        const options = await page.locator('select option').allTextContents();
        console.log('Available options:', options);
        // Try first option that contains "fisica"
        for (const opt of options) {
          if (opt.toLowerCase().includes('fisica')) {
            await page.locator('select').first().selectOption({ label: opt });
            break;
          }
        }
      });
      await page.waitForTimeout(2000);

      const efText = await page.textContent('body');
      const results = {
        ef_sec_3_001_visible: efText.includes('ef_sec_3_001') || efText.includes('Espressione e inclusione'),
        secondaria_1_2_reference: efText.includes('Secondaria classe 1 e 2') || efText.includes('Secondaria 1 e 2'),
        corrette_abitudini: efText.includes('corrette abitudini'),
        accogli_present: efText.includes('Accogli') || efText.includes('accogli'),
        rifiuta_present: efText.includes('Rifiuta') || efText.includes('rifiuta'),
        console_errors: errors,
      };

      // Desktop screenshot
      await page.screenshot({ path: 'report/screenshots/CML-470/revisione-ef-desktop.png', fullPage: true });

      // Test Accogli click if button exists
      const accogliBtn = page.locator('button:has-text("Accogli"), button:has-text("accogli")').first();
      if (await accogliBtn.isVisible()) {
        console.log('Accogli button found - NOT clicking (audit only)');
        results.accogli_button_found = true;
      }

      // Reload to test persistence
      await page.reload({ waitUntil: 'networkidle' });
      await page.waitForTimeout(2000);
      // Navigate back to revisione after reload
      const proponiAfterReload = page.locator('text=Proponi un aggiornamento').first();
      if (await proponiAfterReload.isVisible()) {
        await proponiAfterReload.click();
        await page.waitForTimeout(2000);
      }
      // Re-select EF if needed
      const selectsAfterReload = await page.locator('select').count();
      if (selectsAfterReload > 0) {
        const options = await page.locator('select option').allTextContents();
        for (const opt of options) {
          if (opt.toLowerCase().includes('fisica')) {
            await page.locator('select').first().selectOption({ label: opt });
            break;
          }
        }
        await page.waitForTimeout(2000);
      }
      const afterReloadText = await page.textContent('body');
      results.persistence_check = afterReloadText.includes('Espressione e inclusione') || afterReloadText.includes('ef_sec_3_001');

      // Mobile viewport
      await page.setViewportSize({ width: 390, height: 844 });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'report/screenshots/CML-470/revisione-ef-mobile.png', fullPage: true });

      console.log('\n=== AUDIT RESULTS ===');
      console.log(JSON.stringify(results, null, 2));
    } else {
      console.log('No <select> found. Body excerpt:', bodyText.substring(0, 1500));
      // Maybe need to look for a different selector (could be a custom dropdown)
      const buttons = await page.locator('button').allTextContents();
      console.log('Buttons:', buttons.filter(b => b.trim()).map(b => b.trim().substring(0, 60)));
    }

  } finally {
    await browser.close();
  }
}

audit().catch(e => { console.error('FATAL:', e.message); process.exit(1); });
