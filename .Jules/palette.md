## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Interactive Text Link Hit-Targets
**Learning:** For interactive text links that need to remain visually aligned with a block edge (like a list of contact details), using `px-1 -ml-1 rounded` improves the hit-target and focus-indicator quality without breaking the vertical rhythm or alignment of the text content.
**Action:** Apply `px-1 -ml-1 rounded` to interactive text links that are the first element in a line to balance accessibility and visual alignment.
