# Protocolo del experimento (resumen)

## Preparación (homogeneización)
- Leer 1 página: diferencia entre espera estática y espera explícita.
- Ejecutar prueba de humo: `npm test` (debe correr los tests).
- Confirmar que el servidor está levantado en http://localhost:3000

## Ejecución
- Diseño intra-sujeto con contrabalanceo AB/BA.
- Asignación: S01–S10 orden A→B; S11–S20 orden B→A.
- Editar el bloque TODO del tratamiento asignado (sin modificar la app toy).
- Ejecutar 50 repeticiones y generar CSV.
- Cambiar al otro tratamiento según el orden asignado y repetir.

## Validación de datos
- Si hay errores de instalación/servidor caído, no se registran como flakiness.
- Solo cuentan fallos del test por sincronización (timeout, elemento no visible a tiempo).
