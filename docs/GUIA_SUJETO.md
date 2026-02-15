# Guía del sujeto – Kit Flaky Waits

## 0) Requisitos
- Git instalado
- Node 18+ y npm
- Conexión a internet (solo para instalar dependencias)

## 1) Descarga del kit
1. Abra una terminal.
2. Ejecute: git clone <URL_DEL_REPO>
3. Entre al proyecto: cd kit-flaky-waits

## 2) Instalación
1. Instale dependencias: npm install
2. Instale Chromium para Playwright: npm run install:browsers

## 3) Arrancar la app toy
1. En la misma terminal ejecute: npm run start
2. Verifique en el navegador: http://localhost:3000 (debe ver el botón "Cargar datos")
3. NO cierre esta terminal mientras corre el experimento.

## 4) Tratamientos (tareas)
- Tratamiento A: edite el archivo tests/waits.todo.spec.js y complete el TODO(A) usando SOLO espera estática (waitForTimeout).
- Tratamiento B: edite el mismo archivo y complete el TODO(B) usando SOLO espera explícita (waitForSelector o expect(...).toBeVisible()).

Reglas:
- En A está prohibido usar wait por selector/expect para sincronizar (solo timeout fijo).
- En B está prohibido usar waitForTimeout.

## 5) Ejecución y registro automático
1. Defina su ID de sujeto (por ejemplo S03).
2. Ejecute Tratamiento asignado:
   - A: node tools/run-repeated.mjs --treatment A --runs 50 --subject S03
   - B: node tools/run-repeated.mjs --treatment B --runs 50 --subject S03
3. El CSV se guarda en /results/

## 6) Entrega
Entregue los archivos:
- results/results_SXX_A.csv
- results/results_SXX_B.csv
y el archivo tests/waits.todo.spec.js final.
