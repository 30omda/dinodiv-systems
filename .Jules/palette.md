## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Keyboard Bypass Navigation with Accessible Skip Links
**Learning:** For keyboard-only and screen reader navigation, implementing a skip link with `sr-only focus:not-sr-only` targeting `#main-content` on `<main tabIndex={-1}>` satisfies WCAG 2.4.1 without impacting default visuals for mouse users. Ensuring `tabIndex={-1}` and removing focus outline on the landmark element allows programmatic focus jump cleanly.
**Action:** Always provide a skip-to-content bypass link at the top of navigations targeting a `<main>` landmark with `tabIndex={-1}` for accessible keyboard traversal.
