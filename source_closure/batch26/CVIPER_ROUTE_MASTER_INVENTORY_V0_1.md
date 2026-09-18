# C. Viper Route Master Inventory v0.1

Status: PHASE D BACKEND INVENTORY  
Version: Year 4 / 2026-08-03  
Primary route source: SRC05

The backend is intentionally broader than the learner surface. HJC cost / route state is part of each applicable candidate.

## A. Conversion candidates

| ID | Opportunity | Full input | Result / value | Next state | Verification candidate |
|---|---|---|---|---|---|
| R01 | Light | 2LP > 2LP > 5LK > M Thunder Dash | simple meterless confirm | Hit +1..4 | verified |
| R02 | Light + Drive | 2LP > 2LP > 5LK > H Thunder Dash > Tracer Combination | stable character knockdown | about +25..26 | conditioned |
| R03 | 5MP | 5MP > 2MP > L Thunder Dash > Tracer Combination | current pressure confirm | L Tracer +37 family | conditioned |
| R04 | 5MP damage | 5MP > 2MP > L Burning Kick > Knuckled Pursuit | hit branch | +23 | conditioned |
| R05 | Year4 5MK | 5MK > 5LK > M Thunder Dash | simple meterless route | Hit +1..4 | verified |
| R06 | HJC low | 2MK > HJC > M Thunder Dash > Tracer Combination | character-specific low conversion | M Tracer +18 | conditioned |
| R07 | HJC mid | 5MK > HJC > M Thunder Dash > Tracer Combination | non-direct-cancel normal reroute | M Tracer +18 | conditioned |
| R08 | 2HP launcher | 2HP > M Seismic Hammer > HJ j.MP > H Burning Kick | air conversion | about +44 family by state | conditioned |
| R09 | 2HP carry | 2HP > M Seismic Hammer > HJ H Burning Kick > H Thunder Dash > Tracer Combination | carry / knockdown | +25 family | conditioned |
| R10 | 2HP Dash route | 2HP > H Thunder Dash > 2MP > special | direct launcher route | route-dependent | conditioned |
| R11 | OD Seismic | 2HP > OD Seismic Hammer > 2HK | Year4 route | +42 | conditioned |
| R12 | OD Seismic HJC | 5MP > 2MP > OD Seismic Hammer > delayed HJC M Seismic Hammer > HJ j.MP > 5HK | resource air route | setplay state | conditioned |
| R13 | L Thunder Dash PC | L Thunder Dash Punish Counter > 2MP > special | Year4 PC spacing route | conversion | conditioned |
| R14 | L Dash PC spacing | L Thunder Dash Punish Counter > 5MK | spacing-specific PC | follow-up route | conditioned |
| R15 | 2HP CH | 2HP Counter Hit > 5MK > HJC L Burning Kick > Knuckled Pursuit | CH route | +23 | conditioned |
| R16 | 2HP PC | 2HP Punish Counter > 2HP > M Seismic Hammer > HJ H Burning Kick > H Thunder Dash > Tracer Combination | punish carry | +25 family | conditioned |
| R17 | reversal punish | 5HK Punish Counter > 2HP > M Seismic Hammer > HJ H Burning Kick > H Thunder Dash > Tracer Combination | high punish | +25 family | conditioned |
| R18 | DR overhead | DR 6MP > 2MP > OD Seismic Hammer > HJC route | overhead conversion | resource route | conditioned |
| R19 | DR low | DR 2MK > 2HP > Seismic Hammer route | low conversion | launcher/setplay | conditioned |
| R20 | DR 6HK | DR 6HK > 5MP > 2MP > route | plus pressure conversion | route-dependent | conditioned |
| R21 | Seismic hit | Seismic Hammer > HJC H Thunder Dash > DR 2HP > L Thunder Dash | setplay route | +42 | conditioned |
| R22 | Seismic air | Seismic Hammer > HJ j.MP > H Burning Kick | air route | +44 family | conditioned |
| R23 | Seismic safe jump | Seismic Hammer > delayed HJ j.MP > immediate L Burning Kick | exact route | +45 | conditioned |
| R24 | Seismic jump-in | Seismic Hammer > HJ j.MP > immediate M Burning Kick | exact route | +42 | conditioned |
| R25 | DI basic | DI > 2HP > Seismic Hammer > HJC route | DI route | state-dependent | conditioned |
| R26 | DI SA3 | DI PC > 2HP > Seismic Hammer > OD Burning Kick > SA3 | easy cashout | lethal | conditioned |
| R27 | corner | Seismic Hammer > HJ H Burning Kick > 5HK > H Thunder Dash > Tracer Combination | corner stable | +25 family | conditioned |
| R28 | forward throw | forward throw hit | +28 | throw / shimmy / Burning Kick option | verified |
| R29 | 2HK PC | 2HK Punish Counter > 5LP whiff > forward dash | +10 | active 5MP | conditioned |
| R30 | SA1 install | confirmed route > SA1 Limit Decoupler | install | HJC/followups no Drive cost during install | conditioned |

## B. Oki / next-loop candidates

| ID | Source state | Action | Result | Important condition |
|---|---|---|---|---|
| O01 | H Dash > Tracer +25..26 | forward dash 21F | +4..5 | exact H Tracer state |
| O02 | O01 | 5MP / throw / 2MK / walk-back | core pressure hub | exact spacing |
| O03 | corner H Tracer | 2LK whiff | +10 -> active 5MP | corner exact state |
| O04 | H Tracer | M Thunder Dash | +5 | meaty 2LP / shimmy family | exact state |
| O05 | L Tracer +37 | corner 5HK whiff | +4 | shimmy | corner |
| O06 | L Tracer +37 | Seismic Hammer Feint | +10 | active 5MP | exact timing |
| O07 | M Tracer corner | 2LP whiff | +4 | throw / 5MP / walk-back | corner |
| O08 | Knuckled Pursuit +23 | corner 6MP active | about Hit +4 / Block -1 | corner exact timing |
| O09 | Knuckled Pursuit +23 | 2LP whiff | +9 | active 5MP -> Hit +8 / Block +3 | exact timing |
| O10 | Burning Kick block | Double Burn | Block +2 | hit/block branch truth |
| O11 | Seismic -> M Burning Kick > Tracer | dash | +9 | active 5MP -> Hit +8 / Block +3 | exact route |
| O12 | Seismic -> H Burning Kick | end | +44 | whiff 5LP + dash -> +9 | height / route |
| O13 | exact +45 | forward jump | jump-in / safe-jump family | exact route |
| O14 | exact +42 | j.HK / j.HP | jump-in family | exact route |
| O15 | forward throw +28 | immediate throw / walk-back | throw loop vs shimmy | throw spacing |
| O16 | forward throw +28 | M Burning Kick block | +2 | throw -> Burning Kick setup |
| O17 | 5MP Block +1 | 2LP / throw / 5HK / 2MK | ordinary pressure | current frame truth |
| O18 | DR 6HK block | throw | about +2 family | Drive Rush contact |
| O19 | 2HK PC | 5LP whiff + dash | +10 -> active 5MP | PC exact state |
| O20 | OD Thunder Dash +42 | jump-in | large Oki budget | OD exact state |

## C. Backend-only candidates

- full HJC route matrix before one HJC route is stable;
- Focus Force dash-cancel trees before base movement/confirm is stable;
- raw H Thunder Dash pressure;
- Burning Kick follow-up without hit/block branch;
- HJC routes without Drive ownership;
- exact +42/+44/+45 jump-in without route owner;
- SA1 install optimization before S4;
- matchup-specific Seismic / feint cadence.

## Phase D judgment

Inventory breadth is sufficient for Verification and Pareto.
