## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Interactive Contact Protocols and Form Validation Accessibility
**Learning:** Converting static contact text into protocol-specific links (`mailto:`, `https://wa.me/`) reduces user friction significantly. For WhatsApp, ensuring the phone number in the URL excludes the '+' prefix is vital for protocol compliance. Additionally, linking form validation state to `aria-invalid` using library-specific helpers (e.g., Formspree's `getFieldErrors`) provides essential feedback to assistive technologies.
**Action:** Proactively identify static contact information and convert it to interactive links, and always bind form validation states to standard ARIA attributes.
