# Protocolo del experimento (resumen)

## Preparación (homogeneización)
- Leer 1 página: diferencia entre espera estática y espera explícita.
- Ejecutar prueba de humo: `npm test` (debe correr los tests).
- Confirmar que el servidor está levantado en http://localhost:3000

## Ejecución
- Editar el bloque TODO del tratamiento asignado.
- Ejecutar 50 repeticiones y generar CSV.
- Cambiar al otro tratamiento según el orden asignado (contrabalanceo) y repetir.

## Validación de datos
- Si hay errores de instalación/servidor caído, no se registran como flakiness.
- Solo cuentan fallos del test por sincronización (timeout, elemento no visible a tiempo).
