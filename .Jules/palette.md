## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Unified Accessible Link Styling
**Learning:** Consistently applying `focus-visible:ring-2 focus-visible:ring-primary rounded-md transition-all` across all interactive elements, including footer logos and "Back to Home" links, creates a predictable and polished keyboard navigation experience. Using `px-1 -ml-1` padding/margin offsets allows focus rings to have sufficient visual clearance without causing layout shifts.
**Action:** Implement standardized focus-visible rings and transition styles for every interactive link, especially in secondary navigation areas like the footer.
