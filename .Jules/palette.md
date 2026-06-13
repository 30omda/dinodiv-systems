## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-15 - Interactive Contact Info with Accessible Focus States
**Learning:** Converting static contact strings (email, phone) to interactive links (`mailto:`, `wa.me`) significantly reduces user friction. Combining these links with `px-1 -ml-1 rounded` and `focus-visible:ring-2` provides a large hit-target and clear visual feedback for keyboard users without breaking the layout's vertical alignment.
**Action:** Always look for opportunities to make contact information actionable and ensure they have explicit focus indicators.
