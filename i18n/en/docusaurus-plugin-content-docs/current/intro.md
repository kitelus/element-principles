---
sidebar_position: 1
---

# ELEMENT Principles

ELEMENT is a practical framework for designing resilient UI automation locators.

This ebook is intentionally short, clear, and directly actionable.

## How to use this ebook

1. Read [7 Principles](./principles.md) for the shared standard.
2. Use [Techniques](./techniques.md) to choose the right method per case.
3. Apply [Component Patterns](./patterns.md) in daily test implementation.
4. Copy templates from [Framework Playbook](./framework-playbook.md).
5. Gate pull requests with [Checklists](./checklists.md).

## Locator decision rule (30 seconds)

1. Prefer `role` / `label` / `name` / `data-testid`.
2. If needed, use short stable CSS selectors.
3. Use XPath only for edge cases.
4. Avoid absolute XPath, volatile classes, and fragile indexes.

## Practical workflow (for each test case)

1. Define the user behavior to verify.
2. Choose locator by priority ladder.
3. Store locator in page object/helper (not inline in tests).
4. Synchronize on meaningful states (visible/clickable/loaded), not hard sleeps.
5. Assert both UI state and business outcome.

## Expected outcomes

- Lower flaky failures.
- Faster onboarding for new QA engineers.
- Better resilience to UI refactors.

Next: [7 Principles](./principles.md).
