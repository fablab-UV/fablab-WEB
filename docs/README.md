# Guía para Mensajes de Commit Correctos

Este documento describe cómo escribir mensajes de commit claros y consistentes siguiendo el estándar **Conventional Commits**. Este formato asegura que el historial del proyecto sea legible y permite automatizar tareas como la generación de changelogs o el versionado semántico.

---

## **Formato del mensaje de commit**
Un mensaje de commit válido debe seguir esta estructura:

```
<tipo>([alcance]): <descripción breve>

[opcional cuerpo del mensaje]

[opcional notas de pie]
```

### **1. Partes del mensaje**
- **`<tipo>`**: Describe la categoría del cambio.
- **`(alcance)`**: (Opcional) Indica el área del código afectada.
- **`<descripción breve>`**: Explica brevemente qué hace el commit.
- **`[cuerpo]`**: (Opcional) Detalla el motivo del cambio o el contexto.
- **`[notas de pie]`**: (Opcional) Incluye referencias importantes o notas para cambios que rompen compatibilidad.

---

## **Tipos de commit**
Los tipos más comunes son:

- **feat**: Añade una nueva funcionalidad.
- **fix**: Corrige un error.
- **docs**: Cambios en la documentación.
- **style**: Cambios de formato (sin afectar el código funcional).
- **refactor**: Reestructuración del código sin cambios en su funcionalidad.
- **test**: Añadir o modificar pruebas.
- **chore**: Tareas de mantenimiento (e.g., actualizaciones de dependencias).

---

## **Ejemplos de mensajes de commit**

### **Mensajes válidos**
- **Nueva funcionalidad:**
  ```
  feat(cart): add ability to update item quantities
  ```
  - **tipo**: `feat`
  - **alcance**: `cart`
  - **descripción**: "add ability to update item quantities".

- **Corrección de errores:**
  ```
  fix(auth): resolve token expiration issue
  ```
  - **tipo**: `fix`
  - **alcance**: `auth`
  - **descripción**: "resolve token expiration issue".

- **Cambio en la documentación:**
  ```
  docs(readme): update installation instructions
  ```

- **Breaking change (cambio que rompe compatibilidad):**
  ```
  feat(api): update endpoint structure

  BREAKING CHANGE: The `/users` endpoint has been replaced with `/accounts`.
  ```

- **Mensaje con cuerpo adicional:**
  ```
  fix(validation): ensure email regex matches RFC standards

  This commit fixes an issue where some valid emails were rejected
  by the validator, causing user registration failures.
  ```

### **Mensajes no válidos**
- **Sin tipo ni descripción:**
  ```
  Fixed the bug
  ```
  **Problema:** Falta el tipo (`fix`), y no sigue el formato requerido.

- **Mensaje genérico:**
  ```
  feat: changes
  ```
  **Problema:** La descripción no explica qué se hizo.

- **Demasiado largo:**
  ```
  feat(cart): added a new feature that allows users to add items to the cart and remove them, while updating the totals in real time
  ```
  **Problema:** La descripción es demasiado larga; debe ser breve (~72 caracteres).

---

## **Buenas prácticas**
1. **Escribe en tiempo presente:** Describe lo que hace el commit, no lo que hiciste.
   - ✅ `feat(auth): add login validation`
   - ❌ `feat(auth): added login validation`

2. **Mantén la descripción breve:** Máximo ~72 caracteres para la línea principal.

3. **Usa el cuerpo para más detalles (si es necesario):**
   - Incluye contexto, problemas resueltos o referencias a tickets.

4. **Usa notas de pie para breaking changes o referencias:**
   - `BREAKING CHANGE: This change removes deprecated methods.`

---

## **Configuración del proyecto**
Este proyecto utiliza **Commitlint** para validar mensajes de commit. Si intentas realizar un commit que no cumple con el formato, será rechazado automáticamente.

---

## **Cómo escribir un commit**
1. Haz los cambios necesarios en el código.
2. Agrega los archivos al *stage*:
   ```bash
   git add .
   ```
3. Escribe un mensaje de commit válido:
   ```bash
   git commit -m "tipo(alcance): descripción breve"
   ```
4. Si el mensaje no cumple con las reglas, ajusta según las indicaciones de error.
