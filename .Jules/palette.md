## 2025-05-15 - Enhancing Form Accessibility with Shadcn and ARIA
**Learning:** Migrating raw HTML inputs to Shadcn components while preserving custom styles requires specific classes like `h-auto`. Implementing screen-reader-only labels and ARIA attributes (`aria-invalid`, `aria-describedby`) significantly improves accessibility without affecting the visual design.
**Action:** Always use `<Label className="sr-only">` for accessible forms with placeholders and ensure `ValidationError` components are linked via `aria-describedby` wrapped in a `role="alert"` container.
