## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Frictionless Multi-Channel Communication
**Learning:** Converting static contact details (such as emails and phone/WhatsApp numbers) into interactive semantic links with proper custom focus rings and hover transitions significantly improves user convenience. By wrapping them in wrapper elements with negative margins and padding offsets, focus indicator halos are preserved cleanly without layout shift.
**Action:** Always wrap plain-text contact identifiers in actionable anchors styled with the site's focus rings and appropriate target/rel attributes for external secure routing.
