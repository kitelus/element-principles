---
sidebar_position: 8
---

# Checklists

## Automation-friendly UI checklist

- [ ] Critical elements expose stable `id` or `data-testid`.
- [ ] Inputs provide explicit labels/accessibility names.
- [ ] Interactive controls expose deterministic states.
- [ ] Dynamic content has reliable ready markers.
- [ ] Success/error feedback is machine-assertable.

## Automation code review checklist

- [ ] Locator follows strategy ladder (semantic/test-id first).
- [ ] Locator mapping is centralized and business-named.
- [ ] Synchronization uses meaningful wait states, not hard sleep.
- [ ] Assertions cover both UI state and business outcome.
- [ ] Test is readable, debuggable, and refactorable.

## Ready-to-merge gate

Merge only if all are true:

1. No new brittle locator anti-pattern.
2. No synchronization risk (hard waits/race condition).
3. No duplicated locator mapping.
4. Naming clearly represents business intent.

## Severity guide

- **Blocker:** CI flakiness, new absolute XPath, hard sleep in critical path.
- **Major:** unclear naming, long layout-coupled selectors.
- **Minor:** style inconsistency without stability impact.
