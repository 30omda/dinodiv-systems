## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-15 - Enhancing Interactive Elements with Focus Rings and Smooth Transitions
**Learning:** For a more accessible and polished UI, interactive elements should have distinct `focus-visible` states that match the brand's primary color. Additionally, using `AnimatePresence` with `framer-motion` for mobile menus ensures that exit animations are played, preventing the "instant snap" disappearance that can be disorienting for users.
**Action:** Apply `focus-visible:ring-2 focus-visible:ring-primary` to all interactive links/buttons and wrap conditional animated components in `<AnimatePresence>` to handle exit transitions smoothly.
