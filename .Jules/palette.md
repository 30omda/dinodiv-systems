## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Interactive Contact Info & Form Validation ARIA
**Learning:** Making contact details (email, phone/WhatsApp) interactive with `mailto:` and `wa.me` links significantly improves user convenience. For forms using `formspree`, adding `aria-invalid` tied to the form state ensures that screen reader users are immediately notified of errors, fulfilling a critical accessibility requirement that is often overlooked in minimalist UIs.
**Action:** Always wrap static contact text in interactive protocols and ensure form validation states are reflected via ARIA attributes.
