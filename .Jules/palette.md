## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Enhanced Interactive Contact Points and ARIA Validation
**Learning:** For landing pages with static contact information, transforming plain text (email, WhatsApp) into interactive links with proper focus-visible states and click target expansion (via padding/negative margins) significantly improves usability. Additionally, integrating `aria-invalid` based on the form provider's state (e.g., Formspree) ensures that validation errors are correctly communicated to assistive technologies.
**Action:** Always verify if contact information can be made interactive and ensure all form inputs reactively update ARIA validation attributes.
