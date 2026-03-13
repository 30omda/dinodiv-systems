## 2025-05-15 - Improving Contact Form Accessibility and Consistency

**Learning:** Migrating raw HTML inputs to Shadcn components while maintaining custom vertical padding (like `py-3`) requires adding `h-auto` to prevent height conflicts. Additionally, wrapping `ValidationError` in a `div` with `role="alert"` and a unique `id` ensures that screen readers correctly announce errors when linked via `aria-describedby`.

**Action:** When updating forms, always prefer Shadcn components for design consistency, add hidden labels for screen reader context, and use `aria-describedby` with `role="alert"` for robust error feedback.
