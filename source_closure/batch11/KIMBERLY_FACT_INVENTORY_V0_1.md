# Kimberly Fact Inventory v0.1

Status: **PHASE C CANDIDATE**
Checked: **2026-09-19**

## Stable constraints

- Health: **10000**.
- Resource: Shuriken Bomb stock; Year 4 maximum is **3**.
- SA3 applies a persistent 111% damage modifier and increased walk speed.
- current Training Order keeps Bomb after corner fundamentals.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 5 | 5-6 | 8 | +5 | -2 | C | 270 |
| 5LK | Standing Light Kick | 5 | 5-7 | 11 | +1 | -3 | C | 270 |
| 5MP | Standing Medium Punch | 6 | 6-8 | 18 | +3 | -2 | C | 540 |
| 5MK | Standing Medium Kick | 8 | 8-10 | 18 | +1 | -4 | C | 540 |
| 5HP | Standing Heavy Punch | 9 | 9-11 | 20 | +3 | -4 | C | 630 |
| 5HK | Standing Heavy Kick | 12 | 12-15 | 17 | +7 | +2 | — | 630 |
| 2LP | Crouching Light Punch | 4 | 4-6 | 7 | +4 | -1 | C | 270 |
| 2LK | Crouching Light Kick | 5 | 5-7 | 7 | +4 | -2 | — | 180 |
| 2MP | Crouching Medium Punch | 6 | 6-8 | 13 | +7 | -1 | C | 500 |
| 2MK | Crouching Medium Kick | 7 | 7-9 | 16 | +5 | +1 | — | 540 |
| 2HP | Crouching Heavy Punch | 8 | 8-13 | 17 | +3 | -2 | C | 720 |
| 2HK | Crouching Heavy Kick | 8 | 8-10 | 24 | KD | -10 | — | 810 |
| j.LP | Jumping Light Punch | 4 | 4-13 | Landing 3 | — | — | — | 270 |
| j.LK | Jumping Light Kick | 5 | 5-14 | Landing 3 | — | — | — | 270 |
| j.MP | Jumping Medium Punch | 6 | 6-9 | Landing 3 | — | — | C | 450 |
| j.MK | Jumping Medium Kick | 7 | 7-12 | Landing 3 | — | — | — | 540 |
| j.HP | Jumping Heavy Punch | 8 | 8-12 | Landing 3 | — | — | — | 630 |
| j.HK | Jumping Heavy Kick | 9 | 9-14 | Landing 3 | — | — | — | 630 |

## Key current tools

| Tool | Current fact | Practical meaning |
|---|---|---|
| 2LP | 4F / Hit +4 / Block -1 / C | basic light |
| 2MP | 6F / Hit +7 / Block -1 / C | strong close confirm |
| 2MK | 7F / Hit +5 / Block +1 / non-cancel | low respect tool, not DRC entry |
| 5MK | 8F / cancellable | current DRC starter |
| 5HK | 12F / Hit +7 / Block +2 | respect / pressure point |
| L Vagabond Edge | 10F / Hit +3 / Block -4 | S0 light ender |
| M/H Vagabond Edge | 17/24F / Block -12 | route tools |
| Sprint | follow-up state | carry / overhead / low / stop / Arc Step |
| Torso Cleaver | Sprint follow-up / block +1 normal | overhead-like pressure result |
| Shadow Slide | 10F follow-up / Block -12 | low/carry ender |
| Neck Hunter | 19F / Block -3 | overhead follow-up |
| OD Neck Hunter | 15F / Block -1 | safer OD follow-up |
| Bushin Senpukyaku H | 8F / very unsafe | +20 light-Oki family |
| OD Bushin Senpukyaku | 6F | reversal/route; SA2 cancel on 4th hit |
| Genius at Play | 43F | gains 1 Bomb stock |
| OD Genius at Play | 43F | gains 3 Bomb stocks |
| Shuriken Bomb | stock-consuming delayed projectile | corner/setplay resource |
| SA3 Ninjastar Cypher | 8F | 111% damage modifier + increased walk speed |

## High-leverage current end states

- L Vagabond Edge: +3
- H Bushin Senpukyaku: +20
- Shadow Slide: +47
- OD Sprint > Neck Hunter: +44
- safe-jump route: +42
- Sprint > Torso Cleaver: +41
- Sweep: +38
- Sprint > Arc Step > Bushin Izuna Otoshi: +31
- Sprint > Arc Step > Bushin Hojin Kick: +30
- forward throw: spacing-conditioned
- 5HK block: +2
- 2MK block: +1

## Year 4 current notes

- Shuriken Bomb maximum stock: **2 -> 3**.
- current guide flags a Year 4 5MK route/startup adjustment; canonical frame truth remains the current frame table above.
- Year 4 expands Bomb combo / setplay / lethal possibilities.

## Constraints

- 2MK is non-cancelable; do not inherit Cammy/Juri 2MK DRC semantics.
- Sprint branches depend on spacing / follow-up state.
- Shadow Slide / Bomb setplay is strongest at or near corner; keep position conditions.
- Bomb stock is finite and should not enter S0.
- +42 safe jump is a specific OD Sprint / Hojin / Hisen route.
- SA3 buff belongs late and changes the rest of the round.

## Next

Proceed to Route Master Inventory and audit whether S0 should keep both L Vagabond +3 and Shadow Slide carry.
