import { expect, test } from '@playwright/test'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(process.cwd(), '..')
const personas = JSON.parse(await readFile(path.join(root, 'agent-evaluation/personas/personas.json'), 'utf8')).personas
const scenarios = JSON.parse(await readFile(path.join(root, 'agent-evaluation/scenarios/scenarios.json'), 'utf8')).scenarios

for (const persona of personas) {
  for (const scenario of scenarios) {
    test(`${persona.id} :: ${scenario.id}`, async ({ page }, testInfo) => {
      const consoleErrors: string[] = []
      page.on('console', message => {
        if (message.type() === 'error') consoleErrors.push(message.text())
      })

      const mobile = persona.id === 'utente-mobile-frettoloso'
      await page.setViewportSize(mobile ? { width: 390, height: 844 } : { width: 1440, height: 1000 })
      await page.goto('/')
      await page.waitForLoadState('networkidle')

      const bodyText = (await page.locator('body').innerText()).trim()
      const interactiveCount = await page.locator('button, a, input, select, textarea').count()
      const evidence = {
        runId: `${persona.id}__${scenario.id}`,
        personaId: persona.id,
        scenarioId: scenario.id,
        goal: scenario.goal,
        viewport: mobile ? 'mobile' : 'desktop',
        completed: bodyText.length > 0 && interactiveCount > 0,
        blockingPoint: null,
        actions: 1,
        backtracks: 0,
        helpRequests: 0,
        ambiguities: [],
        severity: consoleErrors.length ? 'high' : 'none',
        evidence: [
          { type: 'state', value: `bodyChars=${bodyText.length}` },
          { type: 'state', value: `interactiveCount=${interactiveCount}` },
          ...consoleErrors.map(value => ({ type: 'console', value })),
        ],
        syntheticFindingIsNotUserEvidence: true,
        humanReviewRequired: true,
      }

      await testInfo.attach('synthetic-evidence.json', {
        body: Buffer.from(JSON.stringify(evidence, null, 2)),
        contentType: 'application/json',
      })

      await page.screenshot({
        path: testInfo.outputPath(`${persona.id}__${scenario.id}.png`),
        fullPage: true,
      })

      expect(bodyText.length).toBeGreaterThan(0)
      expect(interactiveCount).toBeGreaterThan(0)
      expect(consoleErrors).toEqual([])
    })
  }
}
