## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Interactive Link Hit Areas and Alignment
**Learning:** For interactive text links (like Email or WhatsApp) that need to remain visually aligned with a block edge (e.g., in a sidebar), using the `px-1 -ml-1 rounded` pattern improves the hit target (Fitts's Law) and provides a clean focus ring without disrupting the vertical alignment of the text.
**Action:** Apply `px-1 -ml-1 rounded` to interactive text links that are part of a vertical list or block.
