## 2025-05-15 - Accessible Feedback for Async Validation
**Learning:** When using third-party form libraries like Formspree, screen readers may not automatically announce errors that appear dynamically. Wrapping these error components in a container with `id`, `role="alert"`, and a stable unique `id` for `aria-describedby` ensures immediate announcement.
**Action:** Always wrap `ValidationError` components in a `div` with `role="alert"` and link them to inputs using `aria-describedby` to ensure screen reader users receive immediate feedback on failed submissions.
