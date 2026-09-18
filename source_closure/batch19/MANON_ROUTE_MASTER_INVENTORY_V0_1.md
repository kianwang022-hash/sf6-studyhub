# Manon Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / purpose | Verification |
|---|---|---|---|---|
| R01 | light | 2LP > 2LP > H Rond-point | stable light ender | verified |
| R02 | st.MP basic | 5MP > DR > 2MP > 4HP > M Renversé | Medal-scaled route | verified |
| R03 | st.MK basic | 5MK > DR > 2MP > 4HP > M Renversé | spacing/contact route | verified |
| R04 | jump medium | j.MK > 2LP > 2LP > H Rond-point | stable jump-in | verified |
| R05 | jump heavy | j.HP or j.HK > 4HP > M Renversé | Medal-scaled jump route | verified |
| R06 | raw DR | DR > 2MP > 4HP > M Renversé | DR conversion | verified |
| R07 | DI PC | DI PC > forward dash > 4HP > OD Rond-point > M Renversé | punish / Medal route | conditioned: DI_PC / Drive |
| R08 | corner DI | DI wall splat > 4HP > M Renversé | stable corner route | conditioned: corner |
| R09 | corner DI meter | DI wall splat > 4HP > OD Rond-point > 4HP > H Renversé | corner damage / Medal | conditioned: corner / Drive |
| R10 | anti-air basic | 2HP | simple anti-air | verified |
| R11 | anti-air route | anti-air hit > OD Rond-point > Renversé | Medal route | conditioned: anti_air_hit / Drive |
| R12 | air-to-air | j.MP > OD Rond-point > Renversé | air conversion / Medal | conditioned: airborne_hit / Drive |
| R13 | SA3 | confirmed OD Rond-point > Renversé > SA3 | Medal-scaled SA cashout | provisional: source starter omitted |
| R14 | reversal punish | block invincible reversal > 4HP > M Renversé | stable punish / Medal | conditioned: punish |
| R15 | H Rond-point Oki route | confirmed starter > H Rond-point | forward-dash Oki structure | verified ender; starter-specific |
| R16 | point-blank command grab | H Manège Doré hit | gain Medal / high future reward | conditioned: point_blank / opponent_respect |
| R17 | Renversé route | 4HP > M Renversé | combo / Medal growth | verified |
| R18 | high-Medal SA3 | confirmed starter > SA3 | damage scales by Medal Level | conditioned: medal_level / SA |

Backend conversion candidate count: **18**.

## Oki / Medal feedback packages

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | H Rond-point ender | forward dash | strike / throw / shimmy / block-vs-reversal | verified action structure |
| P02 | normal throw | forward dash | spacing is not guaranteed close throw; strike / throw / shimmy | conditioned: throw_spacing |
| P03 | corner | strike meaty | hit -> Renversé route | verified action structure |
| P04 | corner | throw | Medal opportunity / future reward increase | conditioned: opponent_respect |
| P05 | corner | shimmy | punish throw-tech / escape | verified strategic package |
| P06 | basic Oki read | opponent blocks | throw / command grab becomes more valuable | verified strategic map |
| P07 | basic Oki read | opponent mashes | strike meaty | verified strategic map |
| P08 | basic Oki read | opponent jumps | strike / anti-air | verified strategic map |
| P09 | basic Oki read | opponent throw-techs | shimmy | verified strategic map |
| P10 | basic Oki read | opponent reversals | block -> punish | verified strategic map |
| P11 | Medal Lv1-2 | prioritize one clean Medal interaction when available | future Manège / Renversé reward rises | verified strategy |
| P12 | Medal Lv3 | throw threat grows; opponent jump/mash rises | strike value increases | verified strategy |
| P13 | Medal Lv4-5 | command grab damage becomes extreme | stronger anti-grab behavior -> stronger strike | verified strategy |
| P14 | DR 2MP block | pressure entry | throw / strike / shimmy | verified action structure |
| P15 | Révérence block | +1 | strike / throw / spacing read | verified frame truth |

Shared package candidate count: **15**.

## Medal truth

- Medal Level modifies Manège Doré damage.
- Renversé damage scales with Medal Level.
- SA3 / CA damage scale with Medal Level.
- Medal is future-value escalation: successful Medal interactions raise the reward of future grab/route choices.
- learner strategy should react to opponent behavior at higher Medal, not simply increase command-grab frequency.

## Phase E queue

1. no fixed H Rond-point KD frame without source support.
2. command-grab rows require respect / punish / point-blank truth.
3. every scaled damage row requires explicit Medal Level.
4. throw-after dash keeps spacing truth.
5. incomplete ellipsis source routes remain backend-only.
