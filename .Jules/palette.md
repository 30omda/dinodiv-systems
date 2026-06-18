## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Minimizing Noise in Micro-UX Patches
**Learning:** Micro-UX PRs must strictly adhere to scope and line-count constraints. Including infrastructural artifacts like lockfiles or performing large-scale whitespace reformatting creates significant review overhead and obscures the intended UX improvement.
**Action:** Always verify that no lockfiles are accidentally included and preserve original file formatting when making localized code changes.
