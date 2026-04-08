## 2025-05-15 - [Form Accessibility with Formspree]
**Learning:** When using Formspree's `ValidationError` component, it does not automatically associate with the input via `aria-describedby`. Wrapping the error in a `div` with a unique `id` and `role="alert"` allows for accessible error reporting that screen readers will announce immediately upon submission failure.
**Action:** Always link `aria-describedby` on the `Input` to a specific error container `id` and ensure that container uses `role="alert"` for Formspree validation states.
