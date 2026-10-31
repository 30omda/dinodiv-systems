## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Testimonials Rating Accessibility & Multilingual Bidirectional Alignment
**Learning:** Presenting icon-based star ratings without role or label attributes exposes screen reader users to redundant decorative SVG trees. Wrapping the group in a container with `role="img"` and `aria-label="[X] out of 5 stars"` while setting `aria-hidden="true"` on the icons provides concise, accessible context. Furthermore, in multilingual apps where right-to-left quotes (such as Arabic) are rendered in a default LTR document, applying `dir="auto"` automatically renders the text and punctuation in the correct bidirectional layout.
**Action:** Always wrap rating icon groups in accessible containers with descriptive ARIA labels, hide decorative SVG stars, and specify `dir="auto"` on user-generated or multilingual quotes and names.
