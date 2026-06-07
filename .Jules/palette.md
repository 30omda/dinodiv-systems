## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-07 - Visual Alignment of Interactive Text Links
**Learning:** For interactive text links that need to remain visually aligned with a block edge (like contact info lists), use 'px-1 -ml-1 rounded' on the first link. This increases the hit target and provides a clean focus ring without breaking the vertical rhythm of the content.
**Action:** Apply 'px-1 -ml-1 rounded' to the first interactive element in text blocks to balance accessibility with minimalist design alignment.
