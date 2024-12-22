# Formato Commits

## Configuración del proyecto

Este proyecto utiliza **Commitlint** para validar mensajes de commit. Si intentas realizar un commit que no cumple con el formato, será rechazado automáticamente.

## Estructura de un mensaje de commit

```bash
"[tipo]([alcance]): [descripción breve>]"
```

### Partes del mensaje

- **`[tipo]`**: Describe la categoría del cambio.
- **`(alcance)`**: Indica el área del código afectada.
- **`[descripción breve]`**: Explica brevemente qué hace el commit.

## Tipos de commit

1. **`build`**: Cambios en la construcción o herramientas externas.
2. **`chore`**: Tareas de mantenimiento sin impacto funcional.
3. **`ci`**: Cambios en la configuración de integración continua.
4. **`docs`**: Actualización de documentación.
5. **`feat`**: Nueva característica.
6. **`fix`**: Corrección de errores.
7. **`perf`**: Mejora del rendimiento.
8. **`refactor`**: Reestructuración del código sin cambios funcionales.
9. **`revert`**: Reversión de un commit anterior.
10. **`style`**: Cambios de estilo (formato, sangrías, etc.).
11. **`test`**: Cambios en pruebas (tests).

## Ejemplos

- **Nueva funcionalidad:**

  ```
  git commit -am "feat(cart): add ability to update item quantities"
  ```

  - **tipo**: `feat`
  - **alcance**: `cart`
  - **descripción**: "add ability to update item quantities".

- **Corrección de errores:**

  ```
  git commit -am "fix(auth): resolve token expiration issue"
  ```

  - **tipo**: `fix`
  - **alcance**: `auth`
  - **descripción**: "resolve token expiration issue".

- **Cambio en la documentación:**

  ```
  git commit -am "git commit -am "docs(readme): update installation instructions"
  ```

- **Breaking change (cambio que rompe compatibilidad):**

  ```
  git commit -am "feat(api): update endpoint structure

  BREAKING CHANGE: The `/users` endpoint has been replaced with `/accounts`."
  ```

- **Mensaje con cuerpo adicional:**

  ```
  git commit -am "fix(validation): ensure email regex matches RFC standards

  This commit fixes an issue where some valid emails were rejected
  by the validator, causing user registration failures."
  ```

## Buenas prácticas

1. **Escribe en tiempo presente:** Describe lo que hace el commit, no lo que hiciste.

   - ✅ `feat(auth): add login validation`
   - ❌ `feat(auth): added login validation`

2. **Mantén la descripción breve:** Máximo ~72 caracteres para la línea principal.

3. **Usa el cuerpo para más detalles (si es necesario):**

   - Incluye contexto, problemas resueltos o referencias a tickets.

4. **Usa notas de pie para breaking changes o referencias:**
   - `BREAKING CHANGE: This change removes deprecated methods.`
