# Sagat Character Model ↔ Route Audit v0.1

Status: **PHASE H PRE-AUDIT PASS**

## Claim 1 — Tiger Shot shapes movement; the payoff is physical contact

Evidence:

- current Game Plan explicitly starts from High Tiger Shot, then moves into 5MP / 2MP / 5MK based on the opponent's response.
- current strategy note says the character should not be reduced to merely trading projectiles; research how to actually land strikes.
- the route inventory is dominated by normal contact -> Uppercut / Knee / Nexus end states rather than projectile-chip loops.

Judgment: **SUPPORTED**.

## Claim 2 — anti-air discipline is structurally required for projectile control

Evidence:

- Tiger Uppercut is the stable light/medium confirm ender and anti-air tool.
- L/M/H/OD Uppercut have clear current frame/invulnerability roles.
- if jumps are not punished, the High Tiger Shot movement constraint loses credibility.

Judgment: **SUPPORTED**.

## Claim 3 — Sagat's reward grows after the contact through Oki budget

Evidence:

- L Uppercut +32 -> DR.
- H Uppercut +27 -> dash +4.
- target combos +38/+39.
- Tiger Knee families +36…65.
- airborne H Tiger Knee +42 -> safe jump.
- 5MP block +2 and 6HK block +4 produce direct strike/throw respect states.

Judgment: **SUPPORTED**.

## S0 identity gate

Proposed S0:

- High Tiger Shot / basic spacing;
- Tiger Uppercut anti-air;
- light -> M Uppercut;
- 5MP -> M Uppercut;
- H Uppercut +27 -> dash +4;
- 5MP block +2 basic strike/throw.

Question: does this preserve Sagat identity without early safe-jump / Nexus branch trees?

Judgment: **YES**. The identity is already present in the movement-shaping projectile -> long normal / anti-air -> Oki loop.

## Transfer check

Transfers in:
- projectile / anti-air framework;
- strike / throw / shimmy;
- punish / DI / corner / SA;
- knockdown -> Oki.

New:
- projectile cadence as movement constraint.
- long-normal occupancy after projectile response.
- 2MK is not the standard cancellable DRC low from earlier characters.
- Tiger Knee spacing / hit-state Oki ranges.
- airborne +42 safe-jump recognition.

Unlearn:
- zoning = maximum projectile frequency.
- every standard character uses 2MK DRC as the same central low conversion.
- H Tiger Knee always gives +42.
- long-range control means staying full screen indefinitely.

## Audit outcome

Character Model v0 survives current route/Oki evidence.

Proceed to learner assets. The final learner model should explicitly override the crude “pure zoner” reading of the transfer map.
