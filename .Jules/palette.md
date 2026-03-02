## 2026-03-02 - [Formspree Accessibility Pattern]
**Learning:** When using `@formspree/react`, `state.errors` can be null. Safe access via `!!state.errors?.getFieldErrors("field")?.length` is required to prevent runtime crashes when implementing `aria-invalid`.
**Action:** Always use safe navigation and truthy checks for Formspree error states to ensure accessibility without compromising stability.
