## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Field-Specific Accessibility in Formspree
**Learning:** For accessibility in forms managed by @formspree/react (version 3.0.0), use the method `getFieldErrors("fieldName")` on the `state.errors` object to check for validation errors. Applying `aria-invalid={state.errors?.getFieldErrors("fieldName")?.length > 0 ? "true" : undefined}` to inputs provides critical context for screen readers when submission fails due to field-level validation issues.
**Action:** Always use `getFieldErrors` for granular accessibility feedback in Formspree-powered forms.
