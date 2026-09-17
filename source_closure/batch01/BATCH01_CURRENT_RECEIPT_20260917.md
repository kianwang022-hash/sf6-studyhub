# Batch01 Current Receipt — 2026-09-17

Status: `CONTENT_READY / GOLD_QA_PENDING`

Characters: Jamie / Mai / Zangief / Cammy

## Current judgment

All four Batch01 characters have completed the semantic/content pass required for projection:

- current source boundary recorded;
- complete baseline Normal table present;
- expanded Route Master Inventory present;
- Character Model and learner-first terminology present;
- value closure separates exact / approximate / conditioned / unresolved claims;
- backend closure separates complete strings from incomplete families;
- Pareto promotion v0.3 freezes which newly closed routes actually deserve learner-facing surface area;
- `role_profile.yaml` + `practical.yaml` are wired into the shared runtime.

Therefore all four are now **`CONTENT_READY`**.

This does **not** mean `GOLD_PAGE_READY`: rendered/browser QA is still pending because the GitHub Actions runner continues to fail before executing workflow steps.

## Shared authority

- `BATCH01_MODEL_ROUTE_AUDIT_V0_2.md`
- `BATCH01_VALUE_CLOSURE_V0_1.md`
- `BATCH01_BACKEND_CLOSURE_V0_2.md`
- `BATCH01_PARETO_PROMOTION_V0_3.md`
- `BATCH_GOLD_ROLLOUT_STATUS.md`

## Jamie

- Normal table: **18 rows**.
- Backend candidate pool before Pareto: **44 route assets**.
- S0 identity floor: `continue pressure vs 22P Drink investment`.
- Bakkai correction: **`236K` family**, never old `214K Bakkai` learner wording.
- S4 Pareto survivors now include:
  - SA2 temporary-Lv4 / Hermit representative;
  - SA3 -> familiar `+39` loop representative;
  - `63214KK` OD Tenshin high-resource payoff.
- Generic-starter OD Swagger / SA1 families remain backend-only.
- Draft Gold receipt: `jamie_GOLD_RECEIPT_DRAFT.md`.

## Mai

- Normal table: **18 rows**.
- Backend candidate pool before Pareto: **35 route assets**.
- Role teaches `强化资源 / 强化状态` before Stock / Boosted jargon.
- `OD 214P` current block state remains **-3**, not plus.
- S1/S3/S4 Pareto survivors now include:
  - first `5LK > LK > LK > j.214P` Safe Jump representative;
  - `5MP > OD 236K > j.MP > j.214P` air-conversion representative;
  - `5LK > LK > LK > OD j.214P > SA2` high-resource cashout representative.
- Incomplete OD Kachousen -> SA3 ellipsis family remains blocked.
- Draft Gold receipt: `mai_GOLD_RECEIPT_DRAFT.md`.

## Zangief

- Normal/variant table: **23 rows**.
- Backend candidate pool: **25 route assets + 10+ strike/SPD/Oki interfaces**.
- S0 identity floor: `strike -> respect -> 360P command grab -> opponent changes response`.
- SPD aftermath remains re-approach/read semantics, not fake guaranteed point-blank Oki.
- Lariat KD remains state-bucketed; no universal `+27` or `+38` claim is promoted beyond the explicitly conditioned bucket.
- S4 Pareto survivors now include:
  - `2LK > 5LP > PPP > SA3` simple kill/cashout representative;
  - double-DRC -> SA2 high-resource representative.
- Power Stomps, Borscht and non-+38 Lariat bucket mapping remain backend / Training Mode items.
- Draft Gold receipt: `zangief_GOLD_RECEIPT_DRAFT.md`.

## Cammy

- Normal table: **18 rows**.
- Backend candidate pool before Pareto: **26 route assets**.
- S0 identity floor remains grounded: light/low -> `236K` -> dash -> strike/throw.
- Cannon Strike is explicitly height/spacing conditioned; no universal plus-frame rule is taught.
- S4 current-source survivors:
  - `2LP > 2LP > 5LK > SA1`;
  - `2MK > DRC > 2HP > 5HP > 623HK(1st hit) > SA3`.
- SA2 / delayed-DR DI extension / advanced throw-tech Cannon Strike remain backend or Training Mode items.
- Draft Gold receipt: `cammy_GOLD_RECEIPT_DRAFT.md`.

## Learner-string QA hardening

`batch01_practical_gate.js` now rejects learner-facing route cells containing:

- `...` or `…` ellipsis placeholders;
- generic `starter >` placeholders;
- `then continue` placeholders;
- generic `move >` placeholders.

The same gate also verifies the newly promoted Jamie / Mai / Zangief S4/Safe-Jump survivors and keeps Cammy's incomplete SA2 family backend-only.

## What is intentionally not claimed

- No Batch01 character is `GOLD_PAGE_READY` yet.
- Exact whole-combo damage is not fabricated when the source does not publish it.
- Source-published approximations retain approximate wording.
- Conditioned spacing / height / active-frame / state claims stay visibly conditioned.
- Backend-only completeness is **not** required for Gold if the current learner surface is already complete and truthful; unresolved families simply stay hidden/backend.

## Remaining Gold gate

1. execute real desktop/mobile build + browser gates;
2. visually inspect the rendered Role hierarchy, 250–600-character detailed explanation, mini glossary, complete Normal table, Practical density and S0–S4 folding;
3. verify no learner-facing placeholder route or jargon regression appears in the rendered page;
4. sign the four draft Gold receipts;
5. promote `CONTENT_READY -> GOLD_PAGE_READY` only after QA.

## Current infrastructure limitation

Recent GitHub Actions runs continue to terminate before any workflow step executes (`steps: null` / no runner execution). This is tracked as an infrastructure/runtime QA blocker, **not** a semantic-content failure.
