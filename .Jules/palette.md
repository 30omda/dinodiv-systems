## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-05-24 - Interactive Contact Details and ARIA Form Validation
**Learning:** Converting static contact information into interactive links (mailto, wa.me) provides immediate value and improves the perceived "polish" of a site. Simultaneously, applying 'aria-invalid' to form inputs ensures that accessibility isn't sacrificed for minimalist design, allowing screen reader users to perceive validation errors that might otherwise be purely visual.
**Action:** Always look for static contact information that can be made interactive and ensure all form inputs have dynamic accessibility attributes to reflect their validation state.
