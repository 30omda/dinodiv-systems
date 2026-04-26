## 2025-05-14 - [Link Interactivity and Diff Management]
**Learning:** In repositories with significant vertical whitespace (like this one's Contact.tsx), refactoring large blocks of HTML can quickly exceed micro-UX line limits (50 lines). Prioritizing high-impact interactivity (like making text links clickable) over structural refactors (like Shadcn UI wrappers) ensures both UX improvement and compliance.
**Action:** Always check 'git diff -U0 | wc -l' early when refactoring components with large amounts of whitespace to gauge scope.
