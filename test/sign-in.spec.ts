import { test, expect } from '@playwright/test';

test('sign-in success', async ({ page }) => {
  await page.goto('/sign-in',{
    waitUntil: 'networkidle'});

  await page.getByLabel('Email').fill('bvaleiro@gmail.com');
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail.',
  )

  expect(toast).toBeVisible()
});
test('sign-in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in',{
    waitUntil: 'networkidle'});

  await page.getByLabel('Email').fill('brunoccsp@gmail.com');
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText(
    'Credenciais invalidas',
  )

  expect(toast).toBeVisible()
});
test('navigate to sign-up restaurant ', async ({ page }) => {
  await page.goto('/sign-in',{
    waitUntil: 'networkidle'});

  await page.getByRole('link', { name: 'Sign Up' }).click()

  await expect(page).toHaveURL('/sign-up')
});


