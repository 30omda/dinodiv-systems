## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Interactive and Keyboard-Navigable Contact Identifiers
**Learning:** Static contact details such as email addresses and phone numbers represent dead-ends in UI/UX if they are not interactive. Converting them to semantic, keyboard-navigable links (`mailto:`, `wa.me`) with custom focus indicators and hover transitions significantly improves user flow and accessibility. Standardizing contact information to a single primary brand email across both the landing page sections and core documents like Privacy Policy and Terms of Conditions maintains brand integrity and provides a coherent, frictionless experience.
**Action:** Always wrap static contact info (emails, WhatsApp, phone numbers) in semantic anchor tags, style them with accessible hover/focus indicators (`focus-visible:ring-2`), and ensure all pages reference the same unified brand contact email.
