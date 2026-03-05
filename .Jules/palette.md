## 2025-05-14 - [Accessible Form Fields with Hidden Labels]
**Learning:** For forms that use placeholders instead of visible labels, accessibility can be maintained by adding `<Label>` components with the `sr-only` class. Additionally, when using third-party error components like `ValidationError`, wrapping them in a `div` with an `id` ensures that `aria-describedby` links correctly regardless of how the component handles props.
**Action:** Always use `sr-only` labels for "minimalist" form designs and wrap validation error components in a container with a stable ID for ARIA association.
