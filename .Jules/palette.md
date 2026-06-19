## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-06-19 - Hit-Target and Focus Optimization for Inline Links
**Learning:** For interactive text links that need to remain visually aligned with a block edge (like email or phone numbers in a list), using `px-1 -ml-1 rounded-md` improves hit-target size and focus-ring quality without breaking the visual vertical rhythm.
**Action:** Apply negative margin and padding to inline links in lists to enhance accessibility while preserving alignment.
