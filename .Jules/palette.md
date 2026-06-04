## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-04 - Contact Information Interactivity & Accessibility
**Learning:** Making static contact details (email, phone/WhatsApp) interactive improves usability, especially on mobile. Using `px-1 -ml-1 rounded` for text links ensures they stay visually aligned with static text while providing a large hit target and clear focus ring for keyboard users.
**Action:** Ensure all contact methods are functional links with appropriate focus states and secure external link attributes (`rel="noopener noreferrer"`).
