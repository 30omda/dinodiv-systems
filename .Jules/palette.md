## 2025-05-15 - Form Accessibility with Formspree and Shadcn
**Learning:** When using `@formspree/react`'s `ValidationError` with Shadcn components, `aria-invalid` should be set using `!!state.errors?.getErrors("field")?.length` to avoid runtime crashes. To ensure screen readers announce errors, wrap `ValidationError` in a `div` with `role="alert"` and a unique `id` linked via `aria-describedby` on the input.
**Action:** Always wrap `ValidationError` in a `role="alert"` container and use the safe check for `aria-invalid` when integrating Formspree with Shadcn inputs.
