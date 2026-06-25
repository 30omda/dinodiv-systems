## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-06-25 - Precision Hit-Targets for Aligned Text Links
**Learning:** For interactive text links that must remain visually aligned with a block edge (e.g., in a list of contact details), using `px-1 -ml-1` combined with `rounded-md` provides a larger, more accessible hit-target and a clear focus ring without disrupting the vertical alignment or "ragged edge" of the text.
**Action:** Apply `px-1 -ml-1 rounded-md` to secondary interactive links to improve UX and accessibility while maintaining visual rhythm.
