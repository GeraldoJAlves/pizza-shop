import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Rocket Pizza')
  await page.getByLabel('Descrição').fill('Another Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  const toast = await page.getByText('Perfil atualizado com sucesso.')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  const menu = await page.getByRole('button', { name: 'Rocket Pizza' })

  await expect(menu).toBeVisible()
})
