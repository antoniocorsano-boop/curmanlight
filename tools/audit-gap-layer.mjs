import { chromium } from 'playwright';

const BASE = 'http://127.0.0.1:5173/curmanlight/';
const STORAGE_KEY = 'curmanlight:work-decisions:v1';
const UNIT_ID = 'ef_sec_3_001';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function openEducazioneFisica(page) {
  const proponi = page.getByText('Proponi un aggiornamento').first();
  if (await proponi.isVisible()) await proponi.click();
  await page.waitForTimeout(500);

  const select = page.locator('main select').first();
  const options = await select.locator('option').allTextContents();
  const label = options.find(option => option.toLowerCase().includes('fisica'));
  assert(label, 'Disciplina Educazione Fisica non disponibile');
  await select.selectOption({ label });
  await page.waitForTimeout(500);
}

async function audit() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  try {
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
    await page.evaluate(key => localStorage.removeItem(key), STORAGE_KEY);
    await openEducazioneFisica(page);

    const body = await page.locator('body').innerText();
    assert(body.includes('Espressione e inclusione') || body.includes(UNIT_ID), 'Card ef_sec_3_001 non visibile');
    assert(body.includes('Secondaria classe 1 e 2'), 'Delta Secondaria classe 1 e 2 non visibile');
    assert(body.includes('corrette abitudini'), 'Delta corrette abitudini non visibile');

    const accogli = page.getByRole('button', { name: /Accogli/i }).first();
    const rifiuta = page.getByRole('button', { name: /Rifiuta/i }).first();
    assert(await accogli.isVisible(), 'Pulsante Accogli non visibile');
    assert(await rifiuta.isVisible(), 'Pulsante Rifiuta non visibile');

    await accogli.click();
    await page.waitForTimeout(500);

    const saved = await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY);
    assert(saved, 'Payload decisionale non salvato in localStorage');
    const parsed = JSON.parse(saved);
    const decision = parsed.workDecisioni?.[UNIT_ID];
    assert(decision, `Decisione ${UNIT_ID} assente dal payload`);
    assert(decision.outcome === 'accepted_proposal', `Outcome inatteso: ${decision.outcome}`);

    await page.reload({ waitUntil: 'networkidle' });
    await openEducazioneFisica(page);

    const savedAfterReload = await page.evaluate(key => localStorage.getItem(key), STORAGE_KEY);
    assert(savedAfterReload, 'Payload decisionale perso dopo reload');
    const parsedAfterReload = JSON.parse(savedAfterReload);
    assert(parsedAfterReload.workDecisioni?.[UNIT_ID]?.outcome === 'accepted_proposal', 'Decisione non ripristinata dopo reload');

    await page.screenshot({ path: 'report/screenshots/CML-470/revisione-ef-decision-persisted.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: 'report/screenshots/CML-470/revisione-ef-mobile-persisted.png', fullPage: true });

    assert(consoleErrors.length === 0, `Errori console: ${consoleErrors.join(' | ')}`);

    await page.evaluate(key => localStorage.removeItem(key), STORAGE_KEY);

    console.log(JSON.stringify({
      unitId: UNIT_ID,
      cardVisible: true,
      deltasVisible: true,
      accogliVisible: true,
      rifiutaVisible: true,
      decisionSaved: true,
      outcome: 'accepted_proposal',
      decisionRestoredAfterReload: true,
      consoleErrors: 0,
      storageCleaned: true,
    }, null, 2));
  } finally {
    await browser.close();
  }
}

audit().catch(error => {
  console.error('CML-470 audit failed:', error);
  process.exit(1);
});
