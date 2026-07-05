## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Non-Disruptive Focus Rings for Inline Links
**Learning:** For interactive links that need to remain visually aligned with a block edge (like Navbar links), applying horizontal padding and a corresponding negative margin (e.g., `px-1 -ml-1`) allows for a visible `focus-visible:ring-2` that doesn't cause layout shift or misaligned text while providing a larger, accessible hit target.
**Action:** Use the `px-1 -ml-1` (desktop) or `px-2 -mx-2` (mobile) pattern with `rounded-md` for focus rings on links to balance strict visual alignment with accessibility requirements.
