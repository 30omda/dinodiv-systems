## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Converting Static Contact Information Into Interactive Links
**Learning:** Static identifiers (emails, phone numbers) can be converted into interactive links (`mailto:`, `wa.me/`) to improve user experience. However, when placing these links inline within paragraph tags, using standard paragraph wrapping and native inline flow with padding offsets is cleaner than using flex wrapping, as it avoids unwanted visual spacing before punctuation.
**Action:** Maintain native inline flow with correct padding offsets and no flex wrappers for paragraph-embedded links, ensuring a natural typographic flow.
