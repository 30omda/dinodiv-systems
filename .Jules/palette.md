## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Navigation Accessibility and Focus Management
**Learning:** Default browser focus rings are often invisible in dark themes or minimalist designs. Using `focus-visible:ring-2` with `px-1 -mx-1` (or `-ml-1`) allows for clear keyboard indicators on text links without causing layout shifts. Additionally, mobile navigation requires explicit `aria-expanded` and `aria-controls` synchronization to be usable by screen reader users.
**Action:** Always implement custom focus-visible rings for interactive elements and ensure all icon-based navigation (including logos and toggles) has descriptive ARIA labels.
