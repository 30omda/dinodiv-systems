## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Interactive Branding and Accessible Navigation Hit Areas
**Learning:** Implementing the footer logo as a smooth-scroll home link with an explicit `aria-label` provides a consistent "return to top" anchor that users intuitively expect. Using the `px-2 -mx-2` pattern for text links increases the interactive hit area without disrupting the visual rhythm, making navigation more robust for both mouse and touch users while providing a generous focus ring.
**Action:** Always wrap footer logos in accessible links and use negative margin offsets to expand hit areas for minimalist text links.
