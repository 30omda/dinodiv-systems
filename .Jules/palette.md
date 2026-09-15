## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-07-17 - Interactive Contact Identifiers & Consistent Brand Emails
**Learning:** Converting static contact details (like plain text emails and phone numbers) into semantic interactive links decreases friction and improves the UX. Utilizing appropriate padding/negative margin offsets allows for standard accessible focus rings without causing layout shifting, and ensuring brand email consistency across all pages is key to professional presentation.
**Action:** Always wrap contact identifiers in semantic interactive tags with correct hover and focus-visible states and double check brand-specific consistency.
