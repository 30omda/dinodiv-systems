# Palette Journal - DinoDiv

## 2026-03-12 - Initial Journal Setup
**Learning:** Initializing the UX journal for DinoDiv.
**Action:** Starting exploration for micro-UX improvements.

## 2026-03-12 - Accessible Forms & Shadcn Migration
**Learning:** Migrating raw HTML inputs to Shadcn components while maintaining custom vertical padding requires the `h-auto` class. For accessible forms where only placeholders are desired, use `Label` components with the `sr-only` class.
**Action:** Always include hidden `Label` components for screen readers and use `aria-describedby` to link validation errors to inputs. Use `h-auto` on Shadcn `Input` if custom padding is applied.
