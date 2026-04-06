## 2024-05-15 - [Accessible Contact Form Refactor]
**Learning:** Replacing raw HTML form elements with Shadcn UI components (`Input`, `Textarea`, `Label`) provides out-of-the-box accessibility (IDs, focus states) and consistent design tokens. Converting static contact info into interactive `mailto:` and `wa.me/` links with `focus-visible` rings significantly improves usability for both mouse and keyboard-only users.
**Action:** Prioritize Shadcn UI components over raw HTML inputs and ensure all contact identifiers (emails, phone numbers) are wrapped in interactive, accessible links with clear focus indicators.

## 2024-05-15 - [Shadcn Linting Fixes]
**Learning:** Empty interfaces in auto-generated Shadcn UI components (like `TextareaProps`) trigger `@typescript-eslint/no-empty-object-type` lint errors.
**Action:** Replace empty interfaces with type aliases (e.g., `type Props = BaseProps;`) to satisfy modern linting rules without losing the semantic naming convention of the component props.
