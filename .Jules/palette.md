## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Interactive Contact Links & ARIA Validation
**Learning:** Converting static contact information into interactive links (`mailto:`, `wa.me`) significantly improves mobile UX. Using `px-1 -ml-1` on these links allows for a comfortable hit target and focus ring without disrupting the visual alignment of the text. Additionally, synchronizing `aria-invalid` with Formspree's error state provides immediate, accessible feedback for screen reader users.
**Action:** Use interactive protocols for all contact methods and ensure form inputs reflect their validation state via standard ARIA attributes.
