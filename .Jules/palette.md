## 2025-05-15 - Enhancing Contact Form Accessibility with Shadcn and ARIA

**Learning:** Migrating raw HTML form elements to Shadcn components allows for better integration of accessibility features like `sr-only` labels and ARIA attributes for validation. Using `aria-invalid` and `aria-describedby` linked to `role="alert"` ensures that screen readers provide immediate and clear feedback on validation errors, which is often missing in simple landing pages.

**Action:** Always use Shadcn `Input`, `Textarea`, and `Label` (with `sr-only` if needed) instead of raw HTML. Link validation errors to inputs using `aria-describedby` and wrap them in a `role="alert"` container.
