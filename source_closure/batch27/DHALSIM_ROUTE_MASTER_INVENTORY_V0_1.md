# Dhalsim Route Master Inventory v0.1

Status: PHASE D BACKEND INVENTORY  
Version: Year 4 / 2026-08-03  
Primary route source: SRC05

This inventory is broader than the learner surface. Spacing / projectile travel / teleport timing is part of the route key.

## A. Conversion candidates

| ID | Opportunity | Full input | Result / value | Next state | Verification candidate |
|---|---|---|---|---|---|
| R01 | close light | 5LP > 2LP > OD Yoga Fire | stable close confirm | +49 or more family | conditioned |
| R02 | close light + SA | 5LP > 2LP > OD Yoga Fire > SA3 | simple cashout | super | conditioned |
| R03 | close light + Drive | 2LP > CDR > 5LP > 4MP Yoga Uppercut > M Yoga Blast > P Yoga Teleport (Forward) | remote-to-close identity conversion | M Blast +42 -> Teleport point-blank +3 | conditioned |
| R04 | close medium | 4MK Divine Kick > M Yoga Flame | basic stable close route | +33 | verified |
| R05 | 2MP + Drive | 2MP > CDR > 4MK Divine Kick > H Yoga Flame | damage / bigger Oki | +45 | conditioned |
| R06 | Aerial Float | Aerial Yoga Float > j.HP > 1HP Nirvana Punch > M Yoga Flame | float starter | +33 | conditioned |
| R07 | OD Flame | OD Yoga Flame > 2HK | resource route / sweep ender | spacing-dependent aftermath | conditioned |
| R08 | OD Flame + SA | OD Yoga Flame > SA1 | super conversion | super knockdown | conditioned |
| R09 | corner OD Flame + SA | OD Yoga Flame > 5HK > H Yoga Inferno | corner cashout | SA1 | conditioned |
| R10 | 5HK PC | 5HK Punish Counter > 1HP > OD Yoga Flame > 2HK | punish route | sweep aftermath | conditioned |
| R11 | corner 5HK PC | 5HK Punish Counter > 1HP > OD Yoga Flame > 5HK > H Yoga Inferno | corner punish cashout | SA1 | conditioned |
| R12 | corner close | 4MK > H Yoga Blast > L Yoga Blast | corner setplay route | +37 | conditioned |
| R13 | long anti-air | 5HK airborne hit | launch knockdown | anti-air reset / follow-up | conditioned |
| R14 | close anti-air | 4MP Yoga Uppercut anti-air | anti-air contact | cancel / reset | conditioned |
| R15 | Year4 projectile chain | OD Yoga Fire > Yoga Arch > Yoga Comet | current Year4 air/projectile chain | geometry pressure | conditioned |
| R16 | Year4 projectile chain | OD Yoga Arch > Yoga Fire > Yoga Comet | alternate current chain | geometry pressure | conditioned |
| R17 | M Blast | confirmed M Yoga Blast hit | stable anti-air/route ender | +42 | verified |
| R18 | H Blast | confirmed H Yoga Blast hit | route / anti-air ender | +42 | verified |
| R19 | L Blast | confirmed L Yoga Blast hit | faster ender | +39 | verified |
| R20 | M Flame | confirmed M Yoga Flame hit | basic close ender | +33 | verified |
| R21 | H Flame | confirmed H Yoga Flame hit | slower high-budget ender | +45 | verified |
| R22 | OD Flame | confirmed OD Yoga Flame hit | high-resource juggle state | +51 | conditioned |
| R23 | forward throw | forward throw hit | ordinary throw knockdown | +31 | verified |
| R24 | charged Yoga Fire | charged Yoga Fire hit | delayed projectile knockdown | +49 family | conditioned |
| R25 | OD Yoga Fire | OD Yoga Fire hit | projectile knockdown | +49 | conditioned |
| R26 | close poke punish | 1HP > M Yoga Flame | stable close punish family | +33 | conditioned |

## B. Oki / state-transition candidates

| ID | Source state | Action | Result | Important condition |
|---|---|---|---|---|
| O01 | M Yoga Blast +42 | immediate P Yoga Teleport (Forward) | point-blank +3 | exact M Blast + immediate forward P Teleport |
| O02 | O01 | 5LP / 4MK / throw / block | close strike/throw hub | teleport_conversion_state |
| O03 | M Yoga Flame +33 | maintain spacing or close meaty | ordinary Oki | exact M Flame state |
| O04 | H Yoga Flame +45 | stronger meaty / jump / pressure | high Oki budget | exact H Flame state |
| O05 | OD Yoga Flame +51 | route / Oki / sweep | high resource budget | exact OD Flame state |
| O06 | forward throw +31 | Drive Rush 2MK | active-frame pressure; block about +5 family | throw state / DR timing |
| O07 | corner forward throw +31 | 2LK whiff | about +5 before close action | corner exact throw state |
| O08 | corner H Blast > L Blast +37 | point-blank pressure | about +4 family | corner exact route |
| O09 | corner +37 | 2MK whiff | about +7 shimmy budget | corner exact route / spacing |
| O10 | corner +37 | 5LP whiff > L Yoga Fire | delayed projectile pressure; block about +3 family | corner exact route / active projectile |
| O11 | corner H Yoga Flame route | active meaty H Yoga Flame | large plus family (about +11 in declared setup) | corner / exact active timing |
| O12 | Yoga Arch after recovery | let delayed projectile descend | effective +29 hit / +27 block family | non-point-blank projectile travel |
| O13 | OD Yoga Fire +49 | walk / DR / projectile follow-up | high knockdown budget | exact OD Fire state |
| O14 | L Yoga Blast +39 | forward / close pressure | route-dependent Oki | exact L Blast state |
| O15 | 2HK late contact | spacing-dependent knockdown | +22..+37 family in UFD practical timing | active contact / spacing |
| O16 | long 2MK late contact | continue ground control | practical block can improve toward positive | late active contact / spacing |

## C. Backend-only candidate reasons

Keep backend-only until later stages:
- raw forward Teleport as default neutral entry;
- full Float / Teleport cross-up tree in S0;
- Yoga Arch effective plus frames without projectile-travel condition;
- long-limb plus/less-negative claims without contact timing;
- corner +37 setplay outside H Blast -> L Blast exact route;
- active-meaty H Flame plus values without corner/timing owner;
- Year4 OD Fire/Arch/Comet chain before basic projectile geometry is stable;
- matchup-specific Drill / Float heights.

## Phase D judgment

Inventory breadth is sufficient for Verification and Pareto.
