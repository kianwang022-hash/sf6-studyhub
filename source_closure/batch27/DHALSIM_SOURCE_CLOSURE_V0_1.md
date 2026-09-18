# Dhalsim Source Closure v0.1

Status: PHASE A PASS  
Character: DHALSIM  
Checked through: 2026-09-19  
Current balance boundary: 2026-08-03 Year 4 adjustment

## 1. Current-version boundary

Current Year4 evidence closes the character around a range-to-offense transition rather than a pure "stay away forever" model.

The maintained current guide explicitly warns that winning only by repeatedly fending the opponent off is difficult: opponents keep jumping and using Drive Impact even after repeated answers, so Dhalsim eventually has to create offense.

Current Year4 route data also makes the transition concrete:

- M Yoga Blast creates +42 and can be followed immediately by forward P Yoga Teleport for point-blank +3.
- M Yoga Flame gives +33.
- H Yoga Flame gives +45.
- OD Yoga Flame gives +51.
- forward throw gives +31.
- corner H Yoga Blast -> L Yoga Blast gives +37 and enters explicit setplay.
- Year4 adds OD Yoga Fire -> Yoga Arch -> Yoga Comet and OD Yoga Arch -> Yoga Fire -> Yoga Comet route families.

These are not just combo upgrades. They show how remote space control becomes a knockdown budget that can be reinvested into close pressure.

## 2. Current evidence stack

Tier 0:
- SRC01 official frame-data owner.
- SRC02 official 2026-08-03 balance boundary.

Tier 1:
- SRC03 current official-reference frame data through 2026-08-27.
- SRC04 current move-list owner.
- SRC05 current Year4 combo/Oki/setplay guide, updated 2026-08-31.
- SRC06 UFD current August-2026 frame/hitbox cross-check, including spacing-sensitive advantage.

Tier 2:
- NOT REQUIRED for Phase A. The current practical guide directly states the need to transition from defense/control into offense and provides reproducible Teleport/Float/setplay routes.

## 3. Closure achieved

Current evidence is sufficient to compile:

- complete 18-normal baseline table;
- long-limb spacing/contact-timing truth;
- close cancelable normals (4MP / 4MK / 1HP);
- Yoga Fire / Yoga Arch projectile geometry;
- Yoga Flame / Yoga Blast stable knockdown families;
- anti-air lanes;
- one current M Yoga Blast -> forward P Yoga Teleport point-blank +3 conversion;
- Aerial Yoga Float starter route;
- forward throw +31 pressure;
- corner H Yoga Blast -> L Yoga Blast +37 setplay;
- OD Yoga Flame +51 / sweep / SA routes;
- Year4 OD Fire / Arch / Comet projectile chains;
- corner active-frame Yoga Flame setplay;
- SA cashout.

## 4. Required condition boundaries

Never publish these as universal:

- long-range normal frame advantage is contact-timing/spacing sensitive. The canonical table records baseline official values, but late active contact can materially change practical advantage.
- long limbs are not automatically safe simply because they reach far.
- 2LK / 2MK / 2HK practical outcomes vary especially strongly with late contact.
- M Yoga Blast +42 -> forward P Teleport point-blank +3 belongs to the declared immediate Teleport route; raw Teleport has no such plus-state.
- Yoga Arch can create effective post-recovery advantage because the projectile lands later; do not treat its raw frame row as the whole interaction.
- Aerial Float / Drill / Comet values depend on height and spacing.
- +37 corner setplay belongs to H Yoga Blast -> L Yoga Blast exact route.
- forward throw +31 DR meaty values require the declared throw state.
- H Yoga Flame active-meaty plus values require corner / exact timing.
- Year4 OD Fire/Arch -> Comet chains require the declared OD/projectile state.

## 5. Open gaps

No blocker for CONTENT_READY.

Matchup-specific limb selection, exact Teleport side-switch/cross-up frequency, character-specific Float height and niche projectile geometry remain S4 / Training Mode material.

## Phase A judgment

PASS.

Proceed to Character Model v0, Fact Inventory and Route Master Inventory.
