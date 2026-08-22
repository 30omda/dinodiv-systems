## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Accessible Star Rating Groups and Bidirectional Text
**Learning:** Rating icon groups (such as star ratings) often clutter screen reader output when read individually. Wrapping the rating group container with `role="img"` and `aria-label="${stars} out of 5 stars"` while marking individual SVG icons with `aria-hidden="true"` creates concise screen reader output. Furthermore, adding `dir="auto"` on quote blocks ensures bidirectional text (e.g. Arabic) renders with correct alignment and directionality.
**Action:** Always group repetitive rating icons into an accessible image container with hidden child icons, and use `dir="auto"` for dynamic or multi-language user text content.
