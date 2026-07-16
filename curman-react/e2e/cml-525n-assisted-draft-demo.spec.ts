import { expect, test, type Page } from '@playwright/test'

async function clearDemoStorage(page: Page) {
  await page.evaluate(async () => {
    indexedDB.deleteDatabase('curmanlight-assisted-drafts-demo')
  })
}

async function openLaboratory(page: Page) {
  if (await page.getByRole('button', { name: 'Laboratorio assistito' }).count() === 0) {
    await page.getByRole('button', { name: 'Apri o chiudi il menu' }).click()
  }
  await page.getByRole('button', { name: 'Laboratorio assistito' }).click()
  await expect(page.getByRole('heading', { name: 'Dimostrazione locale controllata' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Laboratorio di revisione assistita' })).toBeVisible()
}

test.describe('CML-525N assisted draft demo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await clearDemoStorage(page)
    await page.reload()
  })

  test('desktop: edit, save, reload and discard recovery explicitly', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', message => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })

    await openLaboratory(page)
    await expect(page.getByText('1. Rivedi')).toBeVisible()
    await expect(page.getByText('3. Decidi')).toBeVisible()

    const proposedText = page.getByLabel('Testo proposto dopo la revisione umana').first()
    await proposedText.fill('Confrontare fonti rinnovabili e non rinnovabili valutandone impatti e limiti.')
    await page.getByLabel('Stato di revisione').first().selectOption('teacher_edited')
    await page.getByRole('button', { name: 'Salva bozza locale' }).click()
    await expect(page.getByText('Versione locale 1')).toBeVisible()

    await page.reload()
    await openLaboratory(page)
    await expect(page.getByLabel('Testo proposto dopo la revisione umana').first()).toHaveValue(
      'Confrontare fonti rinnovabili e non rinnovabili valutandone impatti e limiti.',
    )

    await page.getByRole('button', { name: 'Crea copia di recupero' }).click()
    await expect(page.getByRole('heading', { name: 'È disponibile una copia di recupero' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Salva bozza locale' })).toBeDisabled()
    await page.getByRole('button', { name: 'Scarta copia di recupero' }).click()
    await expect(page.getByRole('heading', { name: 'È disponibile una copia di recupero' })).toHaveCount(0)
    await expect(page.getByRole('button', { name: 'Salva bozza locale' })).toBeEnabled()

    expect(consoleErrors).toEqual([])
  })

  test('mobile: guidance, evidence and recovery controls remain reachable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await openLaboratory(page)
    await expect(page.getByText('Le modifiche restano nel browser')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Evidenze collegate' }).first()).toBeVisible()
    await page.getByRole('button', { name: 'Crea copia di recupero' }).click()
    await expect(page.getByRole('button', { name: 'Ripristina copia di recupero' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Scarta copia di recupero' })).toBeVisible()
  })
})
