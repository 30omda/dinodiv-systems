## 2025-05-15 - [Accessible Validation Feedback Pattern]
**Learning:** When using third-party validation components (like Formspree's `ValidationError`) alongside Shadcn/Radix UI, linking `aria-describedby` to a wrapper `div` with `role="alert"` ensures that error messages are both programmatically associated with the input and immediately announced by screen readers.
**Action:** Always wrap external error components in a named `div` (e.g., `id="[field]-error"`) with `role="alert"` and use `aria-invalid={!!error}` on the corresponding input.
