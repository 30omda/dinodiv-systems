## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Accessible Branding and Enhanced Hit Targets
**Learning:** Transforming branding elements (like logos) into functional navigation requires explicit ARIA labels and focus states to remain accessible. For small text links, using padding combined with negative margin offsets (e.g., `px-1 -ml-1`) effectively expands the interactive hit area and focus ring visibility without altering the visual flow or layout.
**Action:** Always wrap functional branding in accessible containers and use the padding/negative-margin technique for minimalist text links to improve usability and keyboard visibility.
