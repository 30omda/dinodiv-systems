## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Interactive Contact Identifiers with Safe Focus Padding
**Learning:** Converting plain-text contact identifiers (like emails and phone numbers) into clickable protocol links (e.g., `mailto:`, `https://wa.me/`) drastically lowers user friction. Combining these with negative margins and padding offsets (`px-1 -ml-1`) ensures highly accessible, custom focus rings that don't cause layout shifts when navigating via keyboard.
**Action:** Always wrap static contact info in interactive link tags when possible, using padding offsets to protect layout stability during focus states.
