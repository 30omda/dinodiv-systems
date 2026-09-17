## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Interactive Contact Identifiers & Focus Offsets
**Learning:** Converting plain-text contact details (emails, phone/WhatsApp numbers) into interactive `mailto:` and `https://wa.me/` links reduces user friction when reaching out. Pairing `focus-visible:ring-2` with padding and negative margin offsets (`px-1 -ml-1`) expands focus rings without causing visual layout shifts.
**Action:** Always make contact identifiers interactive and style focus rings with matching negative margin offsets to preserve layout alignment.
