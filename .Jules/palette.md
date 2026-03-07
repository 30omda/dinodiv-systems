## 2025-05-22 - Accessibility Enhancement for Contact Form

**Learning:** When using `@formspree/react`'s `ValidationError` component, wrapping it in a `div` with a stable `id` and linking it via `aria-describedby` on the input ensures screen readers correctly announce validation errors, even when the component doesn't directly support prop forwarding for ARIA attributes. Additionally, using `sr-only` labels for visual-only placeholder-driven designs maintains accessibility without compromising the intended aesthetic.

**Action:** Always wrap `ValidationError` in an identifiable `div` for `aria-describedby` links and use `Label` with `sr-only` for inputs that rely on placeholders visually.
