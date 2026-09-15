## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Interactive Contact Details
**Learning:** Converting static contact identifiers (emails, phone numbers) into interactive links (`mailto:`, `wa.me:`) significantly reduces user friction. When styling these links, using negative margins (e.g., `-ml-1`) with corresponding padding (e.g., `px-1`) allows for a larger hit target and focus ring without shifting the visual alignment of the text.
**Action:** Always convert static contact info into interactive links and use padding/negative-margin offsets to ensure accessible hit targets and focus rings.
