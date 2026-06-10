## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-15 - Synchronizing "Back to Top" Accessibility and Functional Shortcuts
**Learning:** Functional shortcuts like "Back to Top" logo links must be consistently implemented across all instances (Navbar and Footer) and include explicit `aria-label` and `focus-visible` styles to ensure parity between visual and assistive technology experiences.
**Action:** Always verify that repetitive navigational shortcuts share the same accessibility attributes and visual focus feedback throughout the application.
