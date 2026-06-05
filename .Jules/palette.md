## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Visual Alignment for Interactive Text Links
**Learning:** For interactive text links that need to remain visually aligned with a block edge (like a vertical list of contact info), using a pattern like `px-1 -ml-1 rounded` improves the hit-target size and focus indicator quality without breaking the visual vertical alignment of the text content.
**Action:** Apply `px-1 -ml-1 rounded` to the first interactive link in a text block to maintain visual rhythm while enhancing usability and accessibility.
