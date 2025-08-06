import { test, expect } from '@playwright/test';

test('sign-up successfuly', async ({ page }) => {
  await page.goto('/sign-up',{
    waitUntil: 'networkidle'});

  await page.getByLabel('Email').fill('bvaleiro@gmail.com');
  await page.getByLabel('Nome do Gerente').fill('Bruno');
  await page.getByLabel('Nome do Estabelecimento').fill('Pizza Shop');
  await page.getByLabel('Seu celular').fill('123456789');
  await page.getByRole('button', { name: 'Criar conta' }).click()

  const toast = page.getByText(
    'Restaurante criado com sucesso!'
  )

  expect(toast).toBeVisible() 
});

test('sign-up with wrong credentials', async ({ page }) => {
    await page.goto('/sign-up',{
      waitUntil: 'networkidle'});

    
  await page.getByLabel('Email').fill('bvaleiro@gmail.com');
  await page.getByLabel('Nome do Gerente').fill('Bruno');
  await page.getByLabel('Nome do Estabelecimento').fill('Pizza Shop Errado');
  await page.getByLabel('Seu celular').fill('123456789');
  await page.getByRole('button', { name: 'Criar conta' }).click()

  const toast = page.getByText(
    'Erro ao cadastrar restaurante'
  )

  expect(toast).toBeVisible() 
  }); 
  test('navigate to sign-in restaurant ', async ({ page }) => {
    await page.goto('/sign-up',{
      waitUntil: 'networkidle'});

    await page.getByRole('link', { name: 'Sign In' }).click()

    await expect(page).toHaveURL('/sign-in')
  });


