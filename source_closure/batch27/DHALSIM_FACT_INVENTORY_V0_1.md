# Dhalsim Fact Inventory v0.1

Status: PHASE C PASS  
Version: Year 4 / 2026-08-03  
Sources: SRC01 / SRC03 / SRC04 / SRC05 / SRC06

## 1. Complete baseline Normal table

The values below are the official-reference baseline. Long active limbs can contact late, so practical hit/block advantage may improve with spacing/contact timing. That variation is part of Dhalsim's character truth and is not erased by this table.

| Input | Startup | Active | Recovery | Hit | Block | Cancel | Damage | Decision note |
|---|---:|---|---:|---:|---:|---|---:|---|
| 5LP | 4 | 4-6 | 8 | +4 | -1 | C | 300 | chain-cancelable; August hitbox expanded upward |
| 5LK | 9 | 9-12 | 11 | +2 | -6 | C | 300 | long kick |
| 5MP | 14 | 14-16 | 19 | 0 | -5 | - | 700 | long mid poke |
| 5MK | 12 | 12-14 | 18 | -2 | -6 | - | 600 | long ground control |
| 5HP | 16 | 16-19 | 27 | -6 | -11 | - | 1000 | PC launch; spacing/whiff commitment |
| 5HK | 17 | 17-19 | 20 | +3 | -6 | C | 800 | airborne hit launch; PC +24 |
| 2LP | 5 | 5-7 | 9 | +4 | -1 | C | 300 | chain-cancelable |
| 2LK | 4 | 4-10 | 16 | -5 | -10 | - | 200 | very long active window; practical advantage varies with late contact |
| 2MP | 12 | 12-14 | 16 | 0 | -4 | C | 600 | mid-range cancelable poke |
| 2MK | 10 | 10-22 | 14 | -3 | -10 | - | 500 | very long active; UFD practical block can improve up to positive on late contact |
| 2HP | 19 | 19-22 | 20 | +3 | -8 | - | 800 | whiff +4F recovery |
| 2HK | 12 | 12-27 | 20 | KD | -16 | - | 900 | extreme active window; practical knockdown/block state spacing-dependent |
| j.LP | 4 | 4-7 | Landing 3 | - | - | - | 300 | air normal |
| j.LK | 6 | 6-9 | Landing 3 | - | - | - | 300 | cross-up |
| j.MP | 9 | 9-14 | Landing 3 | - | - | C | 700 | air hit launch / Yoga Mummy cancel |
| j.MK | 11 | 11-16 | Landing 3 | - | - | - | 500 | air normal |
| j.HP | 13 | 13-16 | Landing 3 | - | - | - | 800 | airborne slam |
| j.HK | 10 | 10-19 | Landing 3 | - | - | - | 800 | air normal |

## 2. Decision-changing unique normals

- 4MP Yoga Uppercut: 8F / Hit +2 / Block -3 / cancelable / 700 / forces stand. Close anti-air / confirm owner.
- 1HP Nirvana Punch: 10F / Hit +3 / Block -3 / cancelable / 800. Close route owner.
- 4MK Divine Kick: 7F / Hit +3 / Block 0 / cancelable / 600. S0 close confirm owner.
- Yoga Lance: 14F / Block -16 / cancelable. High-commitment long tool.
- Long Sliding Kick shares 2HK-like long active / spacing-sensitive behavior.

## 3. Projectiles / geometry

### Yoga Fire
- startup 15F.
- ordinary raw baseline around Hit -2 / Block -2..-6 depending dataset/contact representation.
- charged version takes a long hold and can knock down around +49.
- OD Yoga Fire: startup 12F, knockdown +49, Block -3.

### Yoga Arch
- startup 18F.
- raw row around Hit +1 / Block -1.
- away from point blank, Dhalsim often recovers before the arcing projectile arrives; effective post-recovery hit/block budget can be much larger (about +29 hit / +27 block for normal Arch) because the projectile is still traveling.

This delayed-geometry truth is central and cannot be reduced to raw startup/block numbers.

## 4. Knockdown specials

- L Yoga Flame: 16F / KD +33 / Block -4.
- M Yoga Flame: 20F / KD +33 / Block -4.
- H Yoga Flame: 26F / KD +45 / Block -4.
- OD Yoga Flame: 18F / KD +51 / Block -11.
- L Yoga Blast: 12F / KD +39 / Block -6.
- M Yoga Blast: 15F / KD +42 / Block -3.
- H Yoga Blast: 17F / KD +42 / Block -3.
- OD Yoga Blast: 12F / KD +42 / Block 0.

## 5. Mobility / state tools

- Yoga Float starts a levitation state; ground and aerial startup differ and height/momentum affect follow-ups.
- ground forward P/K Yoga Teleport has full invulnerability during frames 5-15; air forward Teleport full invulnerability 10-15.
- Teleport itself does not create generic frame advantage. The plus state belongs to the knockdown/setup that covers its recovery.

## 6. Current high-value route states

- M Yoga Flame: +33.
- H Yoga Flame: +45.
- OD Yoga Flame: +51.
- L Yoga Blast: +39.
- M/H/OD Yoga Blast: +42.
- OD Yoga Fire: +49.
- forward throw: +31.
- M Yoga Blast +42 -> immediate forward P Teleport -> point-blank +3.
- corner H Yoga Blast -> L Yoga Blast -> +37.
- corner forward throw +31 -> 2LK whiff -> about +5 for active close pressure.
- H Yoga Flame can create highly plus active-meaty states in declared corner timing.
- Year4 OD Yoga Fire -> Yoga Arch -> Yoga Comet and OD Yoga Arch -> Yoga Fire -> Yoga Comet are current projectile-chain routes.

## 7. Anti-anchoring facts

- long-limb practical advantage is spacing/contact-timing sensitive.
- reaching far does not make a move safe from Drive Impact, whiff punish or commitment.
- raw forward Teleport is not point-blank +3; +3 belongs to M Yoga Blast +42 -> immediate forward Teleport.
- M/H Blast +42 does not make every Teleport route +3.
- Float / Drill / Comet values require height/spacing.
- +37 belongs to the corner H Blast -> L Blast route.
- H Flame +45 and OD Flame +51 are different end states.
- Yoga Arch's meaningful advantage comes from delayed projectile geometry, not merely the raw row.

## Phase C judgment

PASS. Current facts are sufficient for route compilation.
