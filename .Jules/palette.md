## 2025-05-15 - Accessible Form Errors with Third-Party Components
**Learning:** When using third-party validation components (like `@formspree/react`'s `ValidationError`) with `aria-describedby`, wrapping the component in a named `div` ensures the accessibility link works correctly even if the component doesn't forward the `id` prop to its internal elements.
**Action:** Always wrap third-party error components in an identifiable container when linking them to inputs via `aria-describedby`.
