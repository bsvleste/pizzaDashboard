import { test, expect } from '@playwright/test';

test('update store profile', async ({ page }) => {
  await page.goto('/',{
    waitUntil: 'networkidle'});
  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByText('Perfil da loja').click()
  await page.getByLabel('Name').fill('Bsvcode Test');
  await page.getByRole('button', { name: 'Salvar' }).click()
  await page.waitForLoadState('networkidle')
  
  const toast = page.getByText(
    'Restauranta atualizado com sucesso'
  )
  expect(toast).toBeVisible() 
  await page.getByRole('button', { name: 'Close' }).click()
  
  expect(page.getByRole('button', { name: 'Bsvcode Test' })).toBeVisible()
  await page.waitForTimeout(1000)
});