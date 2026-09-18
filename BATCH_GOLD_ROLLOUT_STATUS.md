# SF6 Gold Page Rollout Status

Status date: 2026-09-19  
Canonical repo: `kianwang022-hash/sf6-studyhub`  
Authority: `CHARACTER_PAGE_GOLD_CONTRACT.md` + `BATCH_SOURCE_CLOSURE_RUNBOOK.md` + `CHARACTER_UNDERSTANDING_CONTRACT.md` + `CHARACTER_MODEL_DEPTH_CONTRACT.md` + `LEARNER_TERMINOLOGY_CONTRACT.md`

Judgment states:

- `GOLD_REFERENCE` — accepted design/function reference.
- `SOURCE_CLOSURE_PENDING` — current Gold source/content pass not yet started.
- `CONTENT_READY` — semantic assets accepted, render/browser Gold QA still pending.
- `GOLD_PAGE_READY` — Role + Practical + semantic QA + real browser/render QA accepted.
- `BLOCKED` — unresolved source/semantic issue prevents promotion.

| Group | Character | Current Gold state |
|---|---|---|
| base | Ryu | `GOLD_REFERENCE` |
| base | Luke | `CONTENT_READY` |
| base | Jamie | `GOLD_PAGE_READY` |
| base | Chun-Li | `CONTENT_READY` |
| base | Guile | `CONTENT_READY` |
| base | Kimberly | `CONTENT_READY` |
| base | Juri | `CONTENT_READY` |
| base | Ken | `CONTENT_READY` |
| base | Blanka | `CONTENT_READY` |
| base | Dhalsim | `SOURCE_CLOSURE_PENDING` |
| base | E. Honda | `CONTENT_READY` |
| base | Dee Jay | `CONTENT_READY` |
| base | Manon | `CONTENT_READY` |
| base | Marisa | `CONTENT_READY` |
| base | JP | `SOURCE_CLOSURE_PENDING` |
| base | Zangief | `GOLD_PAGE_READY` |
| base | Lily | `CONTENT_READY` |
| base | Cammy | `GOLD_PAGE_READY` |
| year1 | Rashid | `CONTENT_READY` |
| year1 | A.K.I. | `CONTENT_READY` |
| year1 | Ed | `SOURCE_CLOSURE_PENDING` |
| year1 | Akuma | `CONTENT_READY` |
| year2 | M. Bison | `CONTENT_READY` |
| year2 | Terry | `CONTENT_READY` |
| year2 | Mai | `GOLD_PAGE_READY` |
| year2 | Elena | `CONTENT_READY` |
| year3 | Sagat | `CONTENT_READY` |
| year3 | C. Viper | `SOURCE_CLOSURE_PENDING` |
| year3 | Alex | `CONTENT_READY` |
| year3 | Ingrid | `SOURCE_CLOSURE_PENDING` |
| year4 | Yasmine | `CONTENT_READY` |

## Current Gold lane

Five characters now render through the canonical Astro runtime:

Ken, Akuma, Luke, Terry, Sagat, Juri, Elena, Yasmine, Rashid, Kimberly, Guile, Dee Jay, E. Honda, Blanka, M. Bison, Marisa, Lily, Manon, Alex, Chun-Li, and A.K.I. are separately **CONTENT_READY** at the semantic layer and are intentionally not yet promoted into the Astro Gold runtime.

- Ryu — Gold design/function reference.
- Jamie — Drink-investment character model; S0 already contains `继续压 vs 22P 喝酒投资未来`.
- Mai — ordinary projectile/ground skeleton first; resource/state upgrades are explained before Stock / Boosted shorthand.
- Zangief — S0 contains the strike -> respect -> `360P` feedback loop; SPD aftermath remains re-approach/read rather than fake guaranteed close Oki.
- Cammy — S0 remains grounded `light/low -> 236K -> dash -> strike/throw`; Cannon Strike stays height/spacing conditioned and Hooligan remains a later adaptation tool.

## Batch01 semantic evidence

Shared evidence retained in `source_closure/batch01/`:

- `BATCH01_MODEL_ROUTE_AUDIT_V0_2.md`
- `BATCH01_VALUE_CLOSURE_V0_1.md`
- `BATCH01_BACKEND_CLOSURE_V0_2.md`
- `BATCH01_PARETO_PROMOTION_V0_3.md`
- `BATCH01_CURRENT_RECEIPT.md`

Current learner assets:

- `characters/base/jamie/role_profile.yaml` + `practical.yaml`
- `characters/year2/mai/role_profile.yaml` + `practical.yaml`
- `characters/base/zangief/role_profile.yaml` + `practical.yaml`
- `characters/base/cammy/role_profile.yaml` + `practical.yaml`
- `characters/base/ryu/meta.yaml` + `practical.yaml`

## Gold browser / visual QA

Canonical real-browser gate: GitHub Actions Astro Gate run **`35171931415` — PASS**.

The gate builds six static pages (home + five characters) and verifies in Chromium:

- Role + Practical render for every current character;
- complete Normal table count: Ryu 18 / Jamie 18 / Mai 18 / Zangief 23 / Cammy 18;
- S0–S4 + ALL controls exist;
- future S4 rows are folded from the default S0 view and become visible in ALL;
- character-specific S0 identity inputs survive projection;
- no learner route leaks `...`, `…`, generic `starter >`, or generic `move >` placeholders;
- Jamie future-Drink semantics survive Role projection;
- Zangief respect-loop semantics survive Role projection;
- Cammy Cannon Strike height/spacing language survives Practical projection;
- mobile viewport 390×844 has no document overflow for all five characters;
- dark-theme visual receipts are generated for all five;
- representative light-theme Role + Practical screenshots are generated and visually inspected.

Visual artifact: **`sf6-visual-qa`** from run `35171931415`.

## Signed receipts

- `receipts/jamie_GOLD_PAGE_READY.md`
- `receipts/mai_GOLD_PAGE_READY.md`
- `receipts/zangief_GOLD_PAGE_READY.md`
- `receipts/cammy_GOLD_PAGE_READY.md`

These four characters are now formally promoted from `CONTENT_READY` to **`GOLD_PAGE_READY`**.

## Public deployment state

Astro static output is valid and GitHub Pages deployment workflow exists at `.github/workflows/pages.yml`.

The first Pages deployment correctly built and uploaded the Pages artifact, then GitHub returned `404` at the deployment step because **Pages has not yet been enabled for this repository**. This is a repository setting, not a build or page failure.

After repository Pages is enabled with **Source = GitHub Actions**, the existing workflow can publish the same accepted `dist/` output. Public hosting is not part of `GOLD_PAGE_READY` semantic/render acceptance.

## Next roster rule

Five characters remain `SOURCE_CLOSURE_PENDING`: Dhalsim, JP, Ed, C. Viper, and Ingrid. They do not inherit existing pages by templating their gameplay; they inherit only the production/runtime quality bar. Character order and transfer assumptions are owned by `CHARACTER_SKILL_TRANSFER_MAP.md`.
