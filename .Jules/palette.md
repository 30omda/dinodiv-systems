## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-04 - Consistent Interactive Text Links
**Learning:** For interactive text links that need to remain visually aligned with a block edge (like contact details), using the `px-1 -ml-1 rounded` pattern provides a larger hit target and clear focus indicator without breaking the vertical rhythm or alignment of the UI. Applying `transition-colors`, `hover:text-primary`, and `focus-visible:ring-1` ensures a responsive and accessible interaction.
**Action:** Use `px-1 -ml-1 rounded` for the first link in a block and `px-1 rounded` for subsequent ones to maintain visual balance and accessibility.
