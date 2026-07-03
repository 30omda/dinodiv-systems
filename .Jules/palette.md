## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Consistent Focus Visibility in Dark/Neon Themes
**Learning:** Default browser focus rings often clash visually and have poor contrast in high-contrast dark themes. Implementing a custom focus-visible ring (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md`) ensures accessibility is preserved without compromising the brand's aesthetic.
**Action:** Apply the standard `focus-visible:ring-primary` pattern to all interactive elements in dark-mode interfaces to maintain a cohesive and accessible user experience.
