import { expect, test } from '@playwright/test'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(process.cwd(), '..')
const personas = JSON.parse(await readFile(path.join(root, 'agent-evaluation/personas/personas.json'), 'utf8')).personas
const scenarios = JSON.parse(await readFile(path.join(root, 'agent-evaluation/scenarios/scenarios.json'), 'utf8')).scenarios

test.describe('CML-517E regression swarm', () => {
  for (const persona of personas) {
    for (const scenario of scenarios) {
      test(`${persona.id} :: ${scenario.id}`, async ({ page }, testInfo) => {
        const consoleErrors: string[] = []
        const pageErrors: string[] = []

        page.on('console', message => {
          if (message.type() === 'error') consoleErrors.push(message.text())
        })
        page.on('pageerror', error => pageErrors.push(error.message))

        const mobile = persona.id === 'utente-mobile-frettoloso'
        await page.setViewportSize(mobile ? { width: 390, height: 844 } : { width: 1440, height: 1000 })
        const response = await page.goto('/')
        await page.waitForLoadState('networkidle')

        const body = page.locator('body')
        const bodyText = (await body.innerText()).trim()
        const interactiveCount = await page.locator('button, a, input, select, textarea').count()
        const mainCount = await page.locator('main, [role="main"]').count()

        const evidence = {
          runId: `${persona.id}__${scenario.id}`,
          personaId: persona.id,
          scenarioId: scenario.id,
          viewport: mobile ? 'mobile' : 'desktop',
          httpStatus: response?.status() ?? null,
          bodyChars: bodyText.length,
          interactiveCount,
          mainCount,
          consoleErrors,
          pageErrors,
          regressionScope: 'technical-invariants-only',
          syntheticFindingIsNotUserEvidence: true,
          humanReviewRequired: true,
        }

        await testInfo.attach('regression-evidence.json', {
          body: Buffer.from(JSON.stringify(evidence, null, 2)),
          contentType: 'application/json',
        })

        expect(response?.ok()).toBeTruthy()
        await expect(body).toBeVisible()
        expect(bodyText.length).toBeGreaterThan(100)
        expect(interactiveCount).toBeGreaterThan(0)
        expect(mainCount).toBeGreaterThan(0)
        expect(consoleErrors).toEqual([])
        expect(pageErrors).toEqual([])
      })
    }
  }
})
