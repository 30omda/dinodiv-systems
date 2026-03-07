## 2025-05-23 - Safe ARIA-Invalid with Formspree
**Learning:** When checking for Formspree validation errors, use the pattern `!!state.errors?.getFieldErrors("field")?.length` to safely set the `aria-invalid` attribute and avoid runtime crashes when `state.errors` is null.
**Action:** Apply this pattern whenever integrating Formspree with Radix/Shadcn UI components to ensure robust accessibility.
