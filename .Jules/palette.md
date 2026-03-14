## 2025-05-15 - [Accessible Forms with sr-only Labels]
**Learning:** When migrating from raw HTML inputs to accessible components, using `<Label>` with the `sr-only` class is the best way to maintain a design that relies on placeholders while still being fully screen-reader compatible.
**Action:** Always pair inputs with a corresponding `<Label>` and `id`, using `sr-only` if a visual label is not desired.

## 2025-05-15 - [Linking ValidationError to Inputs]
**Learning:** `aria-describedby` must point to an element with a unique ID. Wrapping third-party error components like `ValidationError` in a `div` with that ID and `role="alert"` ensures accessibility compliance.
**Action:** Use wrapper `div`s with `role="alert"` and unique IDs to connect validation errors to their respective inputs.
