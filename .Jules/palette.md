## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-06-11 - Interactive Contact Details & Hit-Area Optimization
**Learning:** Converting static contact information (Email, WhatsApp) into interactive links significantly improves UX, especially on mobile devices. Using Tailwind classes like 'px-1 -ml-1 rounded-md' on inline links allows for larger touch/click targets and consistent focus rings without breaking the visual vertical alignment of the text block.
**Action:** Always wrap contact details in appropriate URI schemes (mailto:, tel:, https://wa.me/) and provide optimized hit areas with clear focus indicators for accessibility.
