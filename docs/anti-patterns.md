---
sidebar_position: 7
---

# Anti-Patterns to Avoid

## Fragile selectors

- Absolute XPath (`/html/body/...`)
- Positional selectors (`nth-child`, index without business meaning)
- Style-coupled selectors (generated utility classes)

**Quick fix:** replace with semantic locators or `data-testid`.

## Synchronization mistakes

- Hard sleep as primary strategy
- Clicking before actionable state
- Asserting before UI stabilizes

**Quick fix:** wait for `visible/clickable/enabled` states.

## Maintainability mistakes

- Duplicated selectors across test files
- Inconsistent naming by team member
- Raw selectors embedded directly in test flow

**Quick fix:** centralize locator mapping in page objects/helpers.

## Refactor triggers

Refactor immediately when one of these happens:

- One UI rename breaks many tests.
- Same element has multiple selector definitions.
- New team members cannot infer business intent from names.

## Pre-merge red flags

- Hard sleep in main flow.
- New absolute XPath in PR.
- Passes locally but flaky on CI.
