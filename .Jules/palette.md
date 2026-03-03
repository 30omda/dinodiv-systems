## 2025-05-15 - [Accessible Placeholder-only Forms]
**Learning:** When a design uses placeholders instead of visible labels, accessibility can be maintained by using `<Label>` with the `sr-only` class. Additionally, for error components like `ValidationError` that might not forward props, wrapping them in a `div` with an `id` ensures `aria-describedby` links correctly.
**Action:** Always use `sr-only` labels for placeholder-only designs and wrap third-party error components in a container with the target `id` for ARIA associations.
