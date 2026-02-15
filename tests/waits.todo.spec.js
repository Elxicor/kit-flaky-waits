import { test, expect } from '@playwright/test';

test.describe('Tratamientos de espera (A/B)', () => {
  test('A - Espera estática (TODO del sujeto)', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Cargar datos' }).click();

    // TODO(A): Implementa una espera estática.
    // Restricción: aquí NO se permite esperar por selector/condición; solo timeout fijo.
    // Ejemplo permitido: await page.waitForTimeout(500);

    await expect(page.locator('#data')).toBeVisible();
    await expect(page.locator('#data')).toHaveText('Datos cargados');
  });

  test('B - Espera explícita por condición/evento (TODO del sujeto)', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Cargar datos' }).click();

    // TODO(B): Implementa una espera explícita por condición/evento.
    // Restricción: aquí NO se permite waitForTimeout.
    // Ejemplos permitidos:
    // - await expect(page.locator('#data')).toBeVisible();
    // - await page.waitForSelector('#data', { state: 'visible' });

    await expect(page.locator('#data')).toBeVisible();
    await expect(page.locator('#data')).toHaveText('Datos cargados');
  });
});
