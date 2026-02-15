# Protocolo del experimento (resumen)

## Preparación (homogeneización)
- Teoría (5–10 min): explicación breve de espera estática vs espera explícita y regla del experimento (A solo waitForTimeout, B sin waitForTimeout).
- Práctica (10 min): el sujeto ejecuta la app toy, corre npm test y realiza 1 corrida de prueba por tratamiento con --runs 3 para confirmar que el CSV se genera.
- Evidencia: se conserva results/results_SXX_A.csv y results/results_SXX_B.csv (con al menos 3 filas cada uno) como prueba de homogeneización

## Ejecución
- Diseño intra-sujeto con contrabalanceo AB/BA.
- Asignación: S01–S10 orden A→B; S11–S20 orden B→A.
- Editar el bloque TODO del tratamiento asignado (sin modificar la app toy).
- Ejecutar 50 repeticiones y generar CSV.
- Cambiar al otro tratamiento según el orden asignado y repetir.

## Validación de datos
- Si hay errores de instalación/servidor caído, no se registran como flakiness.
- Solo cuentan fallos del test por sincronización (timeout, elemento no visible a tiempo).
