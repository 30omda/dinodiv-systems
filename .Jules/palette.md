## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-15 - Mobile Menu Toggle Accessibility and Visual Polish
**Learning:** A standard accessible mobile navigation toggle requires `type="button"`, `aria-label="Toggle menu"`, and `aria-expanded` synchronized with the state. Additionally, providing explicit padding (e.g., `p-2`) ensures that custom focus-visible rings are not clipped by the button's boundaries, improving visual feedback for keyboard users.
**Action:** Always include ARIA attributes and sufficient padding for icon-only mobile toggle buttons to ensure accessibility and visual consistency.
