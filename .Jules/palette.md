## 2025-05-15 - [Form Accessibility with Third-Party Error Components]
**Learning:** When using third-party error components like Formspree's `ValidationError`, `aria-describedby` should point to a wrapper element around the component because the component itself might not forward the `id` prop to its internal markup.
**Action:** Always wrap third-party validation components in a `div` with the target `id` to ensure screen reader association works reliably.
