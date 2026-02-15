import { test, expect } from '@playwright/test';

test.describe('Tratamientos de espera (A/B)', () => {
  test('A - Espera estática (TODO del sujeto) @A', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Cargar datos' }).click();

    // TODO(A): Implementa una espera estática.
    // Restricción: aquí NO se permite esperar por selector/condición; solo timeout fijo.
    // Ejemplo permitido: await page.waitForTimeout(500);

    const isVisible = await page.locator('#data').isVisible();
    expect(isVisible).toBeTruthy();

    const text = await page.locator('#data').textContent();
    expect(text).toBe('Datos cargados');
  });

  test('B - Espera explícita por condición/evento (TODO del sujeto) @B', async ({ page }) => {
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
