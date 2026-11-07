## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2026-08-11 - Converting Static Contact Information to Accessible Interactive Links
**Learning:** Presenting communication channels (email addresses and telephone/WhatsApp numbers) as static text introduces friction by forcing users to manually copy and switch apps. Making them direct interactive links (`mailto:` and `https://wa.me/`) with explicit accessible labels, visible keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-primary rounded-md`), and offset margins (`px-1 -mx-1`) preserves layout rhythm while significantly improving task efficiency and accessibility across both desktop and mobile devices.
**Action:** Whenever contact endpoints like emails or phone numbers appear in contact sections or footers, convert them into direct action links with dedicated accessibility labels and focus styles.
