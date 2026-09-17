# SF6 Repository Migration Receipt

Status: `CANONICAL_REPO_SWITCHED / CURRENT_GOLD_LANE_MIGRATING`
Date: 2026-09-17

Source repository: `kianwang022-hash/StudyHub`
Source branch: `sf6-practical-role-contract-20260916-final`
Source PR: `#49`
Source head used for migration baseline: `8fe45811be8ce38d025c01b138db332c3c5baf25`

Destination: `kianwang022-hash/sf6-studyhub`

## Rule

From this point forward, **new SF6 work is written only in `sf6-studyhub`**. The old `StudyHub/projects/sf6` tree is historical migration evidence and may be read during migration, but it is no longer a writable SF6 source of truth.

## Fast migration scope

To avoid blocking Gold QA on mechanical copy work, migration is staged:

1. authority/contracts + roster/status;
2. current Gold lane: Ryu + Jamie + Mai + Zangief + Cammy;
3. Batch01 source-closure evidence + gates/runtime needed to reproduce current pages;
4. remaining legacy roster assets copied only when they enter source closure, or bulk-copied later if useful.

This does **not** downgrade the remaining roster. It prevents old legacy content from blocking the canonical repo switch.

## Accepted semantic state at cutover

- Ryu: `GOLD_REFERENCE`.
- Jamie: `CONTENT_READY / GOLD_QA_PENDING`.
- Mai: `CONTENT_READY / GOLD_QA_PENDING`.
- Zangief: `CONTENT_READY / GOLD_QA_PENDING`.
- Cammy: `CONTENT_READY / GOLD_QA_PENDING`.

## Frontend transition

Current HTML/JS runtime is migration evidence and a visual/function reference. Long-term engineering target is Astro components producing static HTML, plus a standalone HTML export. Content contracts and character data remain canonical across that frontend transition.
