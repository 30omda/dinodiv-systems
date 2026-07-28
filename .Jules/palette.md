## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Interactivity of Contact Identifiers
**Learning:** Static contact information (such as emails or WhatsApp numbers) increases friction and degrades UX on mobile/touch interfaces. Transforming them into semantic, interactive link wrappers (`mailto:`, `wa.me`) styled with inline-block offsets (`px-1 -ml-1`), `hover:underline`, and `focus-visible:ring-primary` ensures both a seamless interaction pattern and reliable, visually-unobtrusive accessibility.
**Action:** Always wrap static contact detail text with interactive link elements using the repository's standard negative margins and focus styles.
