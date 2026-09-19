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
| base | Luke | `GOLD_PAGE_READY` |
| base | Jamie | `GOLD_PAGE_READY` |
| base | Chun-Li | `CONTENT_READY` |
| base | Guile | `GOLD_PAGE_READY` |
| base | Kimberly | `GOLD_PAGE_READY` |
| base | Juri | `GOLD_PAGE_READY` |
| base | Ken | `GOLD_PAGE_READY` |
| base | Blanka | `GOLD_PAGE_READY` |
| base | Dhalsim | `CONTENT_READY` |
| base | E. Honda | `GOLD_PAGE_READY` |
| base | Dee Jay | `GOLD_PAGE_READY` |
| base | Manon | `CONTENT_READY` |
| base | Marisa | `CONTENT_READY` |
| base | JP | `CONTENT_READY` |
| base | Zangief | `GOLD_PAGE_READY` |
| base | Lily | `CONTENT_READY` |
| base | Cammy | `GOLD_PAGE_READY` |
| year1 | Rashid | `GOLD_PAGE_READY` |
| year1 | A.K.I. | `CONTENT_READY` |
| year1 | Ed | `CONTENT_READY` |
| year1 | Akuma | `GOLD_PAGE_READY` |
| year2 | M. Bison | `GOLD_PAGE_READY` |
| year2 | Terry | `GOLD_PAGE_READY` |
| year2 | Mai | `GOLD_PAGE_READY` |
| year2 | Elena | `GOLD_PAGE_READY` |
| year3 | Sagat | `GOLD_PAGE_READY` |
| year3 | C. Viper | `CONTENT_READY` |
| year3 | Alex | `CONTENT_READY` |
| year3 | Ingrid | `CONTENT_READY` |
| year4 | Yasmine | `GOLD_PAGE_READY` |

## Current Gold lane

Twenty characters now render through the canonical Astro runtime:

Marisa, Lily, Manon, Alex, Chun-Li, A.K.I., Ed, JP, Ingrid, C. Viper, and Dhalsim are separately **CONTENT_READY** at the semantic layer and are intentionally not yet promoted into the Astro Gold runtime.

- Ryu — Gold design/function reference.
- Ken — ordinary shoto contact -> choose end-state -> Quick Dash Tatsu carry / +25 dash +6 / corner setplay; H Dragonlash +1 remains tied to 28F startup.
- Akuma — stable shoto +30 / +37 first; 9000-health risk budget stays visible and Demon Raid / charged fireball remain later option-density layers.
- Luke — stable L Flash +36 first; Perfect Flash is an execution-investment layer and +64 remains a later high-value state.
- Terry — special-role relay stays explicit: Burning Knuckle buys carry/Oki, Rising Tackle buys damage, Round Wave buys earned plus pressure, Quick Burn is a later extension.
- Sagat — Tiger Shot shapes movement; long normals/Uppercut cash it out. 2MK remains non-cancelable and +42 safe jump stays airborne-hit-only.
- Juri — ordinary confirms naturally build Fuhajin Stock; S0 generates without spending, while Boosted specials and Feng Shui remain later choices.
- Elena — stable knockdown first; Lynx Song becomes an earned mix hub later and SA2 Healing remains a late damage-vs-recovery choice.
- Yasmine — Bayani is a cycle state: S0 acquires it, S1 first spends it through Boosted Alon, and the persistent SA2 state stays late.
- Rashid — ordinary Mixer/Eagle Spike rounds first; Air Current and mobility are earned re-entry layers, with normal +31 kept distinct from boosted +42.
- Kimberly — corner carry first; Sprint grows after the base loop and Shuriken Bomb remains deferred until corner fundamentals are stable.
- Guile — charge availability is managed behind ordinary defense/normals; Boom shapes ground and Somersault checks jump, while conditional +42 never replaces the ordinary state.
- Dee Jay — charge remains available but rhythm deception is the identity: fake/real Air Slasher and non-charge options precede Jus Cool and SA2 layers.
- E. Honda — charge creates Headbutt/Smash threat and strike respect; Oicho begins only after respect, while Sumo Spirit remains a later pressure upgrade.
- Blanka — Electric Thunder/charge knockdown first; Bomb is earned corner object setplay, not an entry-level resource task.
- M. Bison — track both own charge and opponent Psycho Mine; S0 plants Mine, later stages cash it in and explicitly distinguish unsafe normal Crusher from Mine-enhanced pressure.
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
- `receipts/ken_GOLD_PAGE_READY.md`
- `receipts/akuma_GOLD_PAGE_READY.md`
- `receipts/luke_GOLD_PAGE_READY.md`
- `receipts/terry_GOLD_PAGE_READY.md`
- `receipts/sagat_GOLD_PAGE_READY.md`
- `receipts/juri_GOLD_PAGE_READY.md`
- `receipts/elena_GOLD_PAGE_READY.md`
- `receipts/yasmine_GOLD_PAGE_READY.md`
- `receipts/rashid_GOLD_PAGE_READY.md`
- `receipts/kimberly_GOLD_PAGE_READY.md`
- `receipts/guile_GOLD_PAGE_READY.md`
- `receipts/deejay_GOLD_PAGE_READY.md`
- `receipts/ehonda_GOLD_PAGE_READY.md`
- `receipts/blanka_GOLD_PAGE_READY.md`
- `receipts/mbison_GOLD_PAGE_READY.md`

Jamie, Mai, Zangief, Cammy, Ken, Akuma, Luke, Terry, Sagat, Juri, Elena, Yasmine, Rashid, Kimberly, Guile, Dee Jay, E. Honda, Blanka, and M. Bison are formally promoted from `CONTENT_READY` to **`GOLD_PAGE_READY`**.

## Public deployment state

Astro static output is valid and GitHub Pages deployment workflow exists at `.github/workflows/pages.yml`.

The first Pages deployment correctly built and uploaded the Pages artifact, then GitHub returned `404` at the deployment step because **Pages has not yet been enabled for this repository**. This is a repository setting, not a build or page failure.

After repository Pages is enabled with **Source = GitHub Actions**, the existing workflow can publish the same accepted `dist/` output. Public hosting is not part of `GOLD_PAGE_READY` semantic/render acceptance.

## Next roster rule

**Current Source Closure is complete for all 31 roster characters: 31/31.** No character remains `SOURCE_CLOSURE_PENDING`.

The next roster-wide lane is Gold page promotion: project each accepted semantic package through the shared Astro Role/Practical runtime, run character-specific semantic projection checks plus real browser/visual QA, and promote only passing characters from `CONTENT_READY` to `GOLD_PAGE_READY`. Existing Gold pages provide the production/runtime quality bar, not a gameplay template. Character order and transfer assumptions remain owned by `CHARACTER_SKILL_TRANSFER_MAP.md`.
