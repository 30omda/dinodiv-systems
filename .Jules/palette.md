## 2025-05-15 - [Contact Form Accessibility & Shadcn Migration]
**Learning:** When migrating raw HTML forms to Shadcn, preserving custom layout styling (like vertical padding) requires using the `h-auto` class on `Input` components. Furthermore, when using `@formspree/react`, the correct method for retrieving field errors for ARIA validation is `getErrors(field)`, not `getFieldErrors(field)`.
**Action:** Always verify third-party library API methods during implementation and use `h-auto` for custom-padded Shadcn inputs to avoid height conflicts.

## 2025-05-15 - [Accessible Error Announcements]
**Learning:** Wrapping third-party error components like Formspree's `ValidationError` in a `div` with `role="alert"` and a unique `id` ensures that screen readers immediately announce the error and that the error is correctly associated with the input via `aria-describedby`.
**Action:** Use `role="alert"` and `aria-describedby` for all form validation error messages to ensure they are accessible.
