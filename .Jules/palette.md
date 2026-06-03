## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-03 - Enhanced Focus States for Block-Aligned Interactive Links
**Learning:** When adding interactive links to text blocks that must remain visually aligned with a header or block edge, using the padding/negative margin pattern (`px-1 -ml-1`) ensures that the focus ring surrounds the clickable area without disrupting the vertical rhythm or visual alignment of the content. This maintains design consistency while significantly improving keyboard accessibility.
**Action:** Apply `px-1 -ml-1 rounded` to interactive text links that start at the beginning of a line to ensure accessible focus states without shifting the text position.
