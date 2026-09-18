# Alex Route Master Inventory v0.1

Status: PHASE D BACKEND INVENTORY  
Version: Year 4 / 2026-08-03  
Primary route source: SRC06

This file is intentionally broader than the learner view. Pareto pruning happens later.

## A. Conversion candidates

| ID | Opportunity | Full input | Result / value | Next state | Verification candidate |
|---|---|---|---|---|---|
| R01 | Light | 5LP > 2LP > L Flash Axe | stable light confirm | Hit +4 / reset pressure | verified |
| R02 | Low light | 2LK > 2LP > L Flash Axe | low confirm | Hit +4 / reset pressure | verified |
| R03 | Light | 5LP > 5LP > H Aerial Knee Smash | stable knockdown | KD +29 | verified |
| R04 | Light + Drive | 5LP > 5LP > OD Aerial Knee Smash | spend Drive for stronger immediate Oki | KD +27 | verified |
| R05 | 5MP | 5MP > H Aerial Knee Smash | simple medium confirm | KD +29 | verified |
| R06 | 2MP | 2MP > M Flash Axe > Prowler | earned stance entry | KD +39 into Prowler decision | conditioned |
| R07 | 5MP DRC | 5MP > CDR > 2HP > H Flash Chop > 4MK | pressure/carry branch | +2 pressure bridge | conditioned |
| R08 | 5MP DRC | 5MP > CDR > 2HP > H Flash Chop > Power Drop | damage / side-switch branch | KD +13 family | conditioned |
| R09 | 2MP DRC | 2MP > CDR > 4MK > 2HP > Prowler LP > Prowler HP > 5LK > H Aerial Knee Smash | long stable conversion | KD +29 | conditioned |
| R10 | charged 5HP | fully charged 5HP > H Flash Chop > 4MK | charge conversion | +2 pressure bridge | conditioned |
| R11 | charged 5HP | fully charged 5HP > H Flash Chop > OD Power Drop > Omega Wing Buster | high-resource cashout | super cashout | conditioned |
| R12 | 2HP | 2HP > Prowler LP > Prowler HP > 5LK > H Aerial Knee Smash | stance conversion | KD +29 | conditioned |
| R13 | Drive Rush | DR 6MP > 5MP > M Flash Axe > Prowler | overhead-ish contact into stance | Prowler decision | conditioned |
| R14 | 5HP Punish Counter | 5HP PC > 2MP > M Flash Axe > Prowler | PC stance entry | Prowler decision | conditioned |
| R15 | DI Punish Counter | DI PC > 2HP > M Flash Axe > Prowler 6P > M Aerial Knee Smash | stable DI punish | knockdown | conditioned |
| R16 | DI Punish Counter | DI PC > 2HP > M Flash Axe > Prowler MP > j.MP > Flying Cross Chop | corner/carry state route | point-blank +8 family | conditioned |
| R17 | 2HK hit | 2HK hit > Prowler | Year4 direct stance entry | KD +29 state into stance setup | conditioned |
| R18 | 2HK Punish Counter | 2HK PC > Prowler > forward dash > 6MP active-frame | Year4 PC pressure | active-frame pressure | conditioned |
| R19 | M Flash Axe | M Flash Axe hit > Prowler > Heavy Lariat | plus stance strike | Block +3 / charged +5 | conditioned |
| R20 | M Flash Axe | M Flash Axe hit > Prowler > Air Stampede | overhead stance branch | Block +2 / KD +28 | conditioned |
| R21 | M Flash Axe | M Flash Axe hit > Prowler > Sweep Combination | low stance branch | high-risk low | conditioned |
| R22 | M Flash Axe | M Flash Axe hit > Prowler > Hyper Takedown | stance throw | KD +32 | conditioned |
| R23 | respect | 4MK Block +2 -> H Power Bomb | command-grab read | 2500 / KD +15 | conditioned |
| R24 | point-blank punish/read | H Power Bomb | direct command grab | 2500 / KD +15 | conditioned |
| R25 | turn-around state | H Flash Chop hit > Power Drop | damage / side switch | KD +13 | conditioned |
| R26 | turn-around + Drive | H Flash Chop hit > OD Power Drop | resource cashout | KD +38 family | conditioned |
| R27 | turn-around + Drive + forward | H Flash Chop hit > forward-input OD Power Drop | Oki-budget route | KD +42 | conditioned |
| R28 | corner Cross Chop | M Flash Axe > Prowler MP > j.MP > Flying Cross Chop | Year4 corner setplay route | point-blank +8 | conditioned |

## B. Oki / next-loop package candidates

| ID | Source state | Action | Result | Important condition |
|---|---|---|---|---|
| O01 | H Knee +29 midscreen | immediate Drive Rush | about +3 family | exact H Knee state |
| O02 | H Knee +29 corner | forward dash | about +7 family | corner |
| O03 | OD Knee +27 | forward dash | +5 family | exact OD Knee |
| O04 | forward throw +28 | forward dash | +6 family | throw spacing |
| O05 | forward throw +28 | Drive Rush 5HK active meaty | Block +2 family | active timing |
| O06 | 4MK Block +2 | 5LP | frame-tight strike check | opponent response |
| O07 | 4MK Block +2 | H Power Bomb | high-reward read | not guaranteed; opponent respect |
| O08 | M Flash Axe +39 | Prowler 6P | active-frame pressure | exact stance entry |
| O09 | M Flash Axe +39 | Prowler branch tree | Lariat / overhead / low / throw | stance commitment |
| O10 | Prowler throw +32 | immediate Prowler 6P | meaty; Hit +6 / Block +2 family | exact throw state |
| O11 | Air Stampede Block +2 | 2LP / 2MP / Power Bomb read | next pressure | exact blocked overhead |
| O12 | Heavy Lariat Block +3 | 5MP / Power Bomb read | next pressure | exact Lariat |
| O13 | charged Heavy Lariat Block +5 | 5MP / Power Bomb read | stronger next pressure | full charge |
| O14 | corner Cross Chop +8 | active 4MK / L Power Bomb / jump response | point-blank mix | exact corner route |
| O15 | forward-input OD Power Drop +42 | forward jump family | safe-jump/Oki budget | exact forward-input OD state |
| O16 | Power Bomb +15 | reset / spacing read | no guaranteed close repeat | command grab aftermath |
| O17 | 2HK PC +44 | dash -> 6MP active-frame | pressure | exact PC |
| O18 | Dangerous Armbar +21 | reset / projectile-read reward | no fake guaranteed loop | crouching / projectile conditions |

## C. Backend-only candidate reasons

Keep backend-only until Pareto or S4:
- max-resource Omega Wing Buster routes;
- charged-normal niche routes;
- Sweep Combination without a clear opponent-behavior reason;
- active-frame numbers without the exact predecessor state;
- generic raw Prowler from neutral;
- Power Bomb as an automatic answer after every plus frame;
- matchup-specific Dangerous Armbar reads.

## Phase D judgment

Inventory breadth is sufficient for Verification and Pareto.
