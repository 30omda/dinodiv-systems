## 2025-05-15 - Accessible Forms with sr-only Labels
**Learning:** For accessible forms where only placeholders are desired, use `<Label>` components with the `sr-only` class to provide context to screen readers without changing the visual design.
**Action:** Always implement `<Label>` with `htmlFor` even when labels are visually hidden, and use `aria-describedby` for error association.

## 2025-05-15 - ARIA error association with third-party components
**Learning:** When using `aria-describedby` with third-party error components like `ValidationError`, wrap the component in a `div` with the target `id` to ensure the link works regardless of the component's internal prop forwarding.
**Action:** Use a wrapper `div` for error messages to reliably associate them with inputs via `aria-describedby`.
