## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-05-20 - Enhancing Contact Interactivity and Form Validation Accessibility
**Learning:** Even in minimalist forms, providing dynamic accessibility attributes like `aria-invalid` (tied to library error states) significantly improves the experience for screen reader users. Additionally, converting static contact text into actionable links (e.g., `mailto:`, `wa.me/`) with precise focus styling (`px-1 -ml-1`) improves usability without compromising visual alignment.
**Action:** Always check for opportunities to make contact information actionable and ensure form inputs communicate their error state to assistive technologies.
