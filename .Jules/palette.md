## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Focus Ring Alignment via Negative Margins
**Learning:** When adding focus rings to minimalist text links, use a combination of horizontal padding and matching negative margins (e.g., `px-1 -ml-1`) to expand the hit target and focus area without causing a visual layout shift in the normal state.
**Action:** Apply `px-1 -ml-1` or `px-1 -mx-1` to text links when adding `focus-visible` rings to ensure the indicator doesn't overlap the text while maintaining vertical and horizontal alignment.
