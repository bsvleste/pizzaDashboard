import { test, expect } from '@playwright/test';

test('Dashboard display orders days amount', async ({ page }) => {
  await page.goto('/',{
    waitUntil: 'networkidle'
  });
  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
  await page.waitForTimeout(1000) 
});
test('Dashboard display canceled orders', async ({ page }) => {
  await page.goto('/',{
    waitUntil: 'networkidle'
  });
  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('-5 % em relação ao mês passado')).toBeVisible()
  await page.waitForTimeout(1000) 
});
test('Dashboard display total orders', async ({ page }) => {
  await page.goto('/',{
    waitUntil: 'networkidle'
  });
  expect(page.getByText('R$ 350,02',{exact: true})).toBeVisible()
  expect(page.getByText('+ 10%em relação ao mês passado')).toBeVisible()
  await page.waitForTimeout(1000) 
});
test('Dashboard display orders month amount', async ({ page }) => {
  await page.goto('/',{
    waitUntil: 'networkidle'
  });
  expect(page.getByText('105',{exact: true})).toBeVisible()
  expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()
  await page.waitForTimeout(1000) 
});