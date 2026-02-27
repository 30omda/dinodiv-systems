## 2025-05-15 - [Improving Form Accessibility with Associated Labels]
**Learning:** Raw HTML inputs with only placeholders are insufficient for screen readers and poor UX for sighted users who lose context once typing starts.
**Action:** Always use semantic `<Label>` components with `htmlFor` associated with input `id`s when building or refactoring forms. Use shadcn/ui components (`Input`, `Textarea`, `Label`) to ensure consistent styling and accessible defaults.
