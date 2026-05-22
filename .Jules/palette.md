## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-05-22 - Interactive Contact Links and Form Accessibility
**Learning:** Making contact information like email and WhatsApp interactive via `mailto:` and `https://wa.me/` protocols significantly reduces user friction. Combining this with `aria-invalid` attributes on form fields provides a more comprehensive and accessible user experience for both mouse and screen reader users. Consistent focus styling (e.g., using `rounded px-1 -ml-1`) ensures these new interactive elements remain keyboard-accessible without disrupting visual alignment.
**Action:** When presenting contact details or forms, always look for opportunities to add native interactivity and standard accessibility attributes to enhance the overall UX.
