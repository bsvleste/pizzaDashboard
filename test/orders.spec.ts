import { test, expect } from '@playwright/test';

test('List orders', async ({ page }) => {
  await page.goto('/orders',{
    waitUntil: 'networkidle'
  });
  expect(page.getByRole('cell', { name: 'Customer 1', exact: true })).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 10', exact: true })).toBeVisible()
  /* expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
  */
 await page.waitForTimeout(1000) 
});
test('pagination orders', async ({ page }) => {
  await page.goto('/orders',{
    waitUntil: 'networkidle'
  });
  await page.getByRole('button', { name: 'Próxima página' }).click()
  expect(page.getByRole('cell', { name: 'Customer 11', exact: true })).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 20', exact: true })).toBeVisible()
  
  await page.getByRole('button', { name: 'Última página' }).click()
  expect(page.getByRole('cell', { name: 'Customer 51', exact: true })).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 60', exact: true })).toBeVisible()
  
  await page.getByRole('button', { name: 'Página anterior' }).click()
  expect(page.getByRole('cell', { name: 'Customer 41', exact: true })).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 50', exact: true })).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()
  expect(page.getByRole('cell', { name: 'Customer 1', exact: true })).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 10', exact: true })).toBeVisible()
  await page.waitForTimeout(1000) 
});
test("Filter order by id", async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });
  await page.getByPlaceholder('Id do cliente').fill('order-1')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  expect(page.getByRole('cell', { name: 'order-1', exact: true })).toBeVisible()
  await page.waitForTimeout(1000) 
  
})
test("Filter order by customer name", async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });
  await page.getByPlaceholder('Nome do cliente').fill('Customer 1')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  expect(page.getByRole('cell', { name: 'Customer 1', exact: true })).toBeVisible()
  await page.waitForTimeout(1000) 
  
})
test("Filter order by status order pending", async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });
  await page.getByRole('combobox').click()
  await page.getByLabel('Pendente').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  const tablesRows = await page.getByRole("cell",{name:"Pendente"}).all()
  await expect(tablesRows.length).toBe(10)
  
  
})