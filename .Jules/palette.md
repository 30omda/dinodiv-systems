## 2025-05-15 - [Refining Shadcn Input Heights]
**Learning:** Replacing raw HTML inputs with Shadcn UI components while keeping custom vertical padding (e.g., `py-3`) can cause layout shifts or incorrect heights due to default fixed height classes in the base Shadcn component.
**Action:** Add the `h-auto` class to Shadcn components when custom vertical padding is required to ensure they scale correctly and match the original design intent.

## 2025-05-15 - [ARIA Association with Third-Party Error Components]
**Learning:** When using `aria-describedby` with components like Formspree's `ValidationError`, direct association may fail if the component doesn't forward the ID to its internal DOM.
**Action:** Wrap the error component in a `div` with a unique `id` and `role="alert"` to ensure proper linking and screen reader announcement.
