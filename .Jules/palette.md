## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-08 - Interactive Link Hit Areas and Focus Alignment
**Learning:** When converting plain text to interactive links within a layout, using `inline-block` on `<a>` tags combined with `px-1 -ml-1` (padding and negative margin) ensures a generous hit area and a well-aligned focus ring without shifting the text's visual baseline. This maintains design integrity while significantly improving accessibility and usability.
**Action:** Use the `px-1 -ml-1 rounded` pattern for interactive text links to provide accessible focus indicators that don't disrupt the UI's vertical rhythm.
