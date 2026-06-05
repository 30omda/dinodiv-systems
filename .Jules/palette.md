## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-05 - Actionable Contact Information and Visual Alignment
**Learning:** Converting static contact information (email, WhatsApp) into interactive links significantly improves the UX of a landing page. Using the `px-1 -ml-1 rounded` pattern for interactive text links maintains visual alignment with surrounding block content while providing a high-quality focus indicator that doesn't overlap with neighbors (like separators).
**Action:** Always ensure contact details are wrapped in appropriate `mailto:` or `wa.me/` links. Use negative margins and padding for focus rings to preserve layout rhythm.
