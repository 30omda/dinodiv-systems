## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-05-19 - Interactive Contact Links & ARIA Validation
**Learning:** Converting plain text contact details (email, WhatsApp) into interactive links with proper protocols (mailto, wa.me) significantly reduces user friction. Combining these links with negative margins and padding (e.g., 'px-1 -ml-1') ensures a large hit area and clear focus states without compromising visual alignment. Furthermore, adding 'aria-invalid' to form fields that use third-party hooks (like Formspree) provides essential feedback to screen readers when validation fails.
**Action:** Always make contact information interactive using standard protocols and implement 'aria-invalid' on form inputs to bridge the gap between headless form logic and accessible UI.
