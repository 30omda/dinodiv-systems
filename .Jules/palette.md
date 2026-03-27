## 2025-05-15 - [Accessible Formspree Validations]
**Learning:** When using `aria-describedby` with third-party error components like `ValidationError` (from `@formspree/react`), the target element must exist and have a stable ID. Wrapping the component in a `div` with a unique `id` and `role="alert"` ensures screen readers announce the error and the association remains valid even before the error is populated.
**Action:** Use the pattern `aria-describedby="field-error"` on the input and wrap `<ValidationError prefix="Field" field="field" ... />` in a `<div id="field-error" role="alert" />`.
