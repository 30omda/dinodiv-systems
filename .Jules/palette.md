# Palette's Journal - Critical Learnings Only

This journal contains critical UX and accessibility learnings from working on this repository.

## 2025-05-15 - Accessibility initialization
**Learning:** Initializing the journal to track accessibility and UX improvements.
**Action:** Always document significant patterns discovered or rejected.

## 2025-05-15 - Form Accessibility Pattern
**Learning:** For forms where only placeholders are desired visually, using `<Label>` components with the `sr-only` class provides necessary context for screen readers. Additionally, linking validation errors to inputs using `aria-describedby` and `aria-invalid` ensures a robust accessible experience.
**Action:** Apply this pattern to all form fields to ensure WCAG compliance while maintaining minimalist designs.
