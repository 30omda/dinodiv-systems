## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-15 - Global Navigation Accessibility and Focus States
**Learning:** Interactive elements in the Navbar and Footer (like logos and menu links) often lack keyboard focus indicators and semantic ARIA attributes. Using `focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none` provides high-visibility feedback for keyboard users while remaining invisible to mouse users. Additionally, wrapping logos in `<a>` tags with `aria-label` and smooth-scroll logic provides a consistent "Back to top" or "Home" shortcut.
**Action:** Always ensure global navigation elements have explicit `focus-visible` rings and appropriate ARIA roles/labels to support keyboard and screen reader accessibility.
