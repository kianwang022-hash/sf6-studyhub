# Sagat — Reference

> Canonical lookup layer。这里允许比 LEARN 更密；第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Current combo / Oki guide：**2026-08-31**
- Frame reference checked through：**2026-08-27 official-reference data**
- Checked through：**2026-09-18**
- Health：**10000**
- Controls：Classic

## 2｜Command Index

### Normal attacks

5LP / 5LK / 5MP / 5MK / 5HP / 5HK  
2LP / 2LK / 2MP / 2MK / 2HP / 2HK  
j.LP / j.LK / j.MP / j.MK / j.HP / j.HK

### Key unique / target-combo attacks

- 6HK｜Step High Kick
- 5MK > 6HK target combo
- 5HP > 6HK target combo
- 4HP family
- 6MP overhead family

### Special moves

- 236LP｜Low Tiger Shot
- 236MP / HP｜High Tiger Shot
- 623P｜Tiger Uppercut
- 236K｜Tiger Knee Crush
- 214K｜Tiger Nexus
  - Mighty Tiger
  - Greedy Tiger
  - Nova Tiger

### Super Arts

- 236236P｜SA1 Tiger Cannon
- 214214K｜SA2 Savage Tiger + variations
- 236236K｜SA3 / CA Tiger Vanquisher

## 3｜完整基础 Normal 帧表

| Input | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---:|---|---:|---:|---:|---|---:|
| 5LP | 5 | 5-7 | 11 | +4 | -3 | C | 300 |
| 5LK | 7 | 7-8 | 15 | 0 | -4 | C | 400 |
| 5MP | 6 | 6-9 | 15 | +6 | +2 | — | 600 |
| 5MK | 11 | 11-14 | 19 | +3 | -3 | — | 700 |
| 5HP | 15 | 15-18 | 22 | 0 | -5 | — | 800 |
| 5HK | 10 | 10-15 | 21 | +1 | -5 | C | 900 |
| 2LP | 4 | 4-5 | 10 | +5 | -1 | C | 300 |
| 2LK | 5 | 5-7 | 12 | +1 | -3 | — | 200 |
| 2MP | 7 | 7-9 | 16 | +4 | -1 | C | 600 |
| 2MK | 9 | 9-11 | 18 | +5 | -2 | — | 600 |
| 2HP | 11 | 11-14 | 21 | +1 | -5 | C | 800 |
| 2HK | 11 | 11-13 | 26 | KD | -12 | — | 900 |
| j.LP | 4 | 4-10 | Landing 3 | — | — | — | 300 |
| j.LK | 5 | 5-14 | Landing 3 | — | — | — | 300 |
| j.MP | 8 | 8-12 | Landing 3 | — | — | — | 700 |
| j.MK | 8 | 8-15 | Landing 3 | — | — | — | 700 |
| j.HP | 10 | 10-15 | Landing 3 | — | — | — | 800 |
| j.HK | 10 | 10-15 | Landing 3 | — | — | — | 800 |

## 4｜关键决策数值

| Tool / state | Current value | Why it matters |
|---|---|---|
| 5MP | 6F / Hit +6 / Block +2 | 火球逼出地面停顿后的核心 respect。 |
| 6HK | 16F / Hit +7 / Block +4 | 长距离高价值接触 / PC。 |
| M High Tiger Shot | 16F / Hit +3 / Block +3 | 较慢正帧 fireball 节奏。 |
| H High Tiger Shot | 12F / Hit -1 / Block -1 | 更快 fireball 节奏。 |
| OD High Tiger Shot | Block +6 | 资源换更强 pressure。 |
| L Tiger Uppercut | +32 | 可直接 Drive Rush。 |
| M / H Tiger Uppercut | +27 | dash 23F 后约 +4。 |
| L Tiger Knee | +36…46 | spacing / hit-state conditioned。 |
| M Tiger Knee | +39…49 | 同上。 |
| H Tiger Knee | +41…47 | airborne 特定状态可形成 +42 safe jump。 |
| OD Tiger Knee | +44…65 | 高阶资源 Oki。 |
| Greedy Tiger | +48 | Nexus 高价值 Oki 分支。 |
| Nova Tiger | +62 | 更大 setplay budget。 |
| Forward throw | +21 | spacing / dash choice。 |

## 5｜Route Library

### R01｜Light 稳定
2LK > 2LK > 5LP > M Tiger Uppercut  
End state：+27  
Verify：verified

### R02｜Light Nexus
2LP > 5LP > L Tiger Nexus > Mighty Tiger  
Result：Mighty Tiger hit 后 +3 continuation  
Verify：verified

### R03｜5MP basic
5MP > 2LP > M Tiger Uppercut  
End state：+27  
Verify：verified

### R04｜Point-blank 5MP
5MP > 5MP > 5LP > M Tiger Uppercut  
Verify：conditioned  
Condition：point-blank

### R05｜2MP basic
2MP > M Tiger Nexus > Mighty Tiger  
Verify：verified

### R06｜2MP CDR stable
2MP > CDR > 5MP > 4HP > H Tiger Knee Crush > L Tiger Uppercut  
Value：carry + Uppercut Oki  
Verify：verified

### R07｜2MP CDR Oki focus
2MP > CDR > 5MP > 5HK hit 1 > H Tiger Nexus > Nova Tiger > 6HK  
Value：carry + Oki focus  
Verify：conditioned

### R08｜5MP CH
5MP CH > 4HP > H Tiger Knee Crush > L Tiger Uppercut  
Verify：conditioned

### R09｜5MK target combo
5MK > 6HK  
End state：+38  
Verify：verified

### R10｜6HK basic
6HK > 2MP > H Tiger Knee Crush  
Verify：verified

### R11｜Corner 6HK
6HK > 2MP > OD Tiger Knee Crush > L Tiger Uppercut  
Verify：conditioned

### R12｜Jump-in
j.HP > 4HP > H Tiger Knee Crush > L Tiger Uppercut  
Verify：verified

### R13｜Jump-in easy
j.HP > 2HP > H Tiger Uppercut  
End state：+27  
Verify：verified

### R14｜6HK PC stable punish
6HK PC > 4HP > H Tiger Knee Crush > L Tiger Uppercut  
Verify：verified

### R15｜6HK PC Year4
6HK PC > 4HP > M High Tiger Shot > 6HK > M Tiger Uppercut  
Verify：conditioned

### R16｜5LK PC
5LK PC > CDR > 5MP > 4HP > H Tiger Knee Crush > L Tiger Uppercut  
Verify：conditioned

### R17｜Corner basic
4HP > M High Tiger Shot > 6HK > M Tiger Uppercut  
Verify：conditioned

### R18｜Corner DR overhead
DR 6MP > 2MP > OD Tiger Knee Crush > L Tiger Uppercut  
Verify：conditioned

### R19｜Corner jump-in
j.HP > 2HP > OD Tiger Knee Crush > L Tiger Uppercut  
Verify：conditioned

### R20｜SA1
OD High Tiger Shot > SA1  
End state：+22…34  
Verify：verified

### R21｜SA2 forward variation
5MP > 2LP > SA2 forward variation > DR 4HP > fully charged H Tiger Uppercut  
Verify：conditioned

### R22｜DI grounded SA3
DI PC > 4HP grounded hit > M High Tiger Shot > DR 2MP > CDR > 4HP > H Tiger Knee Crush > M Tiger Uppercut > SA3  
Verify：conditioned

## 6｜Backend-only source gaps

### DI airborne easy route
Current source contains an omitted token before 4HP airborne hit.  
**Do not reconstruct it from memory.**

### 2MP PC route
Current source abbreviates one HP input.  
Until the exact input is closed, keep it backend-only.

## 7｜Oki / Setplay Library

### O01｜H Tiger Uppercut +27
H Tiger Uppercut -> +27 -> forward dash 23F -> +4

Options：5MP / 2MK / throw / block / shimmy  
Verify：verified

### O02｜L Tiger Uppercut +32
L Tiger Uppercut -> +32 -> Drive Rush

Options：DR 6MP / DR 5MP / DR throw / spacing read  
Verify：verified

### O03｜Corner L Uppercut active frame
L Tiger Uppercut +32 -> 2MP whiff > 5MP active-frame

Approx：Hit +7 / Block +3  
Verify：conditioned

### O04｜Target combo +38
5MK > 6HK -> +38 -> H Tiger Knee active-frame meaty

Approx block：+4  
Plan：5MP / throw / walk-back shimmy  
Verify：conditioned

### O05｜L Tiger Knee
Typical family：+36…46

Source example：
L Tiger Knee +36 -> forward dash -> +13 -> 2HP active-frame

Verify：conditioned by spacing / hit state.

### O06｜M Tiger Knee
Typical family：+39…49

Source example：
M Tiger Knee +39 -> forward dash -> +16 -> 5HP active-frame

Verify：conditioned.

### O07｜H Tiger Knee +41
Source corner examples：
- 5LP whiff -> 6MP active-frame
- 5LP whiff -> 5LP whiff -> 2MK active-frame

Verify：conditioned.

### O08｜H Tiger Knee airborne +42
H Tiger Knee airborne hit -> +42 -> forward jump HP

Result：safe jump  
Verify：conditioned.

### O09｜5MP block +2
Options：2LP / 5MP / 2MK / throw / walk-back shimmy  
Verify：verified

### O10｜CDR 5MP block +6
2MP > CDR > 5MP block -> +6

Options：5MP / delayed throw / 2MK / 5HK  
Verify：verified

## 8｜Tiger Nexus truth

- L / M Tiger Nexus：block -5
- H / OD Tiger Nexus：block -3
- Mighty Tiger：normal block -5；OD route current block -3
- Greedy Tiger：block +4
- Nova Tiger：block +2

Do not flatten the family into “Nexus is safe/plus.”

## 9｜Current-version notes

- 2MP：7F / Hit +4 / Block -1 / current Year4 starter scaling.
- 5LK：current Hit 0.
- 5MK > 6HK target-combo second hit：current 16F, end state +38.
- OD Tiger Nexus > Mighty Tiger：current Block -3.
- Tiger Knee values remain spacing / height conditioned.

## 10｜Source Boundary

- current frame table reflects official values, checked 2026-08-27
- Year4 route guide current through 2026-08-31
- battle boundary 2026-08-03
- all source IDs and URLs live in sources.yaml
