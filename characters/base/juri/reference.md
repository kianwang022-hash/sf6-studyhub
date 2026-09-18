# Juri — Reference

> Canonical lookup layer。这里允许比 LEARN 更密；第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：2026-08-03 Year 4
- Current combo / Oki guide：2026-08-31
- Checked through：2026-09-18
- Health：10000
- Controls：Classic

## 2｜Command Index

### Normal attacks

5LP / 5LK / 5MP / 5MK / 5HP / 5HK
2LP / 2LK / 2MP / 2MK / 2HP / 2HK
j.LP / j.LK / j.MP / j.MK / j.HP / j.HK

### Resource / specials

- 214LK / MK / HK｜Fuhajin
- 236LK｜Saihasho
- 236MK｜Go Ohsatsu
- 236HK｜Ankensatsu
- 623P｜Tensenrin
- air special family / Shiku-sen
- OD variants
- Boosted variants under stock state

### Super Arts

- SA1
- SA2｜Feng Shui Engine
- SA3 / CA

## 3｜完整基础 Normal 帧表

| Input | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---:|---|---:|---:|---:|---|---:|
| 5LP | 4 | 4-7 | 7 | +5 | -2 | C | 300 |
| 5LK | 5 | 5-7 | 9 | +2 | -3 | C | 300 |
| 5MP | 6 | 6-9 | 12 | +7 | +2 | C | 600 |
| 5MK | 5 | 5-6, 8-10 | 17 | +3 | -4 | C | 700 |
| 5HP | 10 | 10-12 | 24 | -1 | -5 | C | 800 |
| 5HK | 17 | 17-20 | 19 | +2 | -3 | — | 900 |
| 2LP | 4 | 4-6 | 8 | +4 | -1 | C | 300 |
| 2LK | 5 | 5-7 | 8 | +3 | -1 | — | 200 |
| 2MP | 6 | 6-9 | 14 | +5 | -2 | C | 600 |
| 2MK | 8 | 8-10 | 19 | +1 | -6 | C | 500 |
| 2HP | 8 | 8-11 | 23 | +3 | -11 | C | 900 |
| 2HK | 10 | 10-12 | 23 | KD | -11 | — | 900 |
| j.LP | 5 | 5-10 | Landing 3 | — | — | — | 300 |
| j.LK | 4 | 4-9 | Landing 3 | — | — | — | 300 |
| j.MP | 7 | 7-11 | Landing 3 | — | — | C | 500 |
| j.MK | 6 | 6-11 | Landing 3 | — | — | — | 500 |
| j.HP | 12 | 12-17 | Landing 3 | — | — | — | 900 |
| j.HK | 10 | 10-15 | Landing 3 | — | — | — | 800 |

## 4｜Resource Truth

### Fuhajin stock

L / M / H Fuhajin generate stock.

基础 learner loop：

M Fuhajin -> stock +1 -> forward dash -> 5MP / 2MP / throw / shimmy

关键点：

**stock generation 不要求你先放弃这一 Turn。**

### Stock spending

Boosted Saihasho / Ankensatsu / Go Ohsatsu 必须带 stock state。

Learner rule：

- 没有 stock：不要把 Boosted route 当可用。
- 有 stock：也不代表必须立刻花。
- 花 stock 后如果 route 能接回 L/M Fuhajin，可以重新进入 stock economy。

## 5｜关键数值

| Tool / state | Current value | Why it matters |
|---|---|---|
| 5MP | 6F / Hit +7 / Block +2 | 近身 respect / confirm 核心。 |
| 2MP | 6F / Hit +5 / Block -2 | 稳定连接。 |
| 2MK | 8F / Hit +1 / Block -6 / C | DRC 低段。 |
| M Fuhajin | 13F / Block -6 / stock +1 | 基础 ender + 资源生成。 |
| Boosted Saihasho | Hit +1 / Block -3 | stock 改变同名 special 的结果。 |
| Boosted Ankensatsu | Hit +8 / Block -8 | 更高命中收益。 |
| H Tensenrin | 5F / Block -37 | ender / anti-air；Oki 受位置影响。 |
| OD Tensenrin | 6F full invul startup | reversal。 |
| Corner H Tensenrin | 5MP Oki about +5 family | Year4 角落高价值循环。 |

## 6｜Route Library

### R01｜Jump-in
j.HP > 5MP > 2MP > M Fuhajin
- stock +1
- Verify：verified

### R02｜Medium basic
5MP > 2MP > M Fuhajin
- stock +1
- Verify：verified

### R03｜Light low
2LK > 2LP > 2LP > M Fuhajin
- stock +1
- Verify：verified

### R04｜2MK DRC
2MK > DRC > 5MP > 2MP > M Fuhajin
- 3 Drive
- stock +1
- Verify：verified

### R05｜Shimmy MP
walk back > 5MP > 2MP > M Fuhajin
- stock +1
- Verify：verified

### R06｜Shimmy HP
walk back > 5HP > 2MP > M Fuhajin
- Verify：conditioned
- Condition：spacing

### R07｜Blocked reversal
6HP PC > 2HP > H Fuhajin > H Tensenrin
- stock +1
- Verify：verified

### R08｜Drive Reversal punish easy
2MP PC > M Fuhajin
- stock +1
- Verify：verified

### R09｜Drive Reversal punish high
2MP PC > H Fuhajin > H Tensenrin
- Verify：verified source route

### R10｜Corner DI
DI wall splat > 6HP > 2HP > H Fuhajin > H Tensenrin
- Verify：conditioned
- Condition：corner wall splat

### R11｜Midscreen DI high
DI PC > 6HP > 2HP > H Fuhajin > H Tensenrin
- Verify：verified source route

### R12｜Midscreen DI easy
DI PC > 5MP > 2MP > M Fuhajin
- stock +1
- Verify：verified

### R13｜Back-to-corner DI
DI PC > j.HP > 5MP > 2MP > M Fuhajin
- stock +1
- Verify：conditioned
- Condition：back-to-corner

### R14｜1 stock spend
5MP > 2MP > Go Ohsatsu
- stock spend：1
- Verify：conditioned
- Condition：stock >= 1

### R15｜OD Fuhajin simple
5MP > 2MP > OD Fuhajin > 6MP > H Tensenrin
- Verify：verified source route

### R16｜OD Fuhajin stock branch
5MP > 2MP > OD Fuhajin > 6MP > Go Ohsatsu > Ankensatsu
- Verify：conditioned
- Condition：stock state

### R17｜3 stock -> regenerate
5MP > 2MP > Go Ohsatsu hit 1 > Saihasho > Ankensatsu > 6MP > M Fuhajin
- spend multiple stock
- stock +1 at end
- Verify：conditioned

### R18｜3 stock damage/Oki
5MP > 2MP > Go Ohsatsu hit 1 > Saihasho > Ankensatsu > 6MP > H Tensenrin
- Verify：conditioned

### R19｜5HK PC
5HK PC > 6HP > 2HP > H Fuhajin > H Tensenrin
- Verify：conditioned

### R20｜SA3 DRC
DRC > 2HP > 5MP > 2MP > Go Ohsatsu > SA3
- Verify：conditioned
- Condition：stock / Drive / SA

### R21｜SA3 punish
6HP PC > 2HP > H Fuhajin > SA3
- Verify：conditioned

## 7｜Oki / Resource Loop Library

### O01｜M Fuhajin
M Fuhajin -> stock +1 -> forward dash

Plan：
- 5MP
- 2MP
- throw
- walk-back shimmy

Verify：verified action structure

### O02｜Spend -> regain
Go Ohsatsu stock spend -> L Fuhajin

Result：
- spend stock
- regain stock
- forward -> strike / throw

Verify：conditioned

### O03｜H Tensenrin midscreen
Result varies by hit height / spacing.

Plan：
- 2MP / 5MP meaty when spacing supports
- or dash strike / throw

Verify：conditioned

### O04｜Corner H Tensenrin
H Tensenrin -> 5MP

Current Year4 family：
about +5 in the matching corner/hit state.

Plan：
- throw
- 2MP
- shimmy
- overhead

Verify：conditioned

### O05｜Corner forward throw
forward throw -> dash -> strike / throw / shimmy

Verify：conditioned

### O06｜Corner M Fuhajin
M Fuhajin -> 5LK x2

Plan：
- throw
- 5MP
- overhead

Verify：conditioned

## 8｜Boosted Special Truth

- Boosted Saihasho requires stock.
- Boosted Ankensatsu requires stock.
- Boosted Go Ohsatsu requires stock.

Do not project any of these as stockless universal moves.

## 9｜Feng Shui Engine

SA2 changes Juri's cancel / pressure system.

It is treated as a separate S4 system:

- activation state
- character-specific cancel chains
- pressure sequencing
- opponent defensive response
- resource / timer awareness

It is not a single route and should not be flattened into one combo row.

## 10｜Backend-only source gaps

- SA1 route contains an ambiguous low-variation token in current source.
- universal fixed midscreen H Tensenrin Oki number.
- stockless Boosted special variants.
- large Feng Shui Engine string library until S4-specific compilation.

## 11｜Source Boundary

- Year4 battle boundary：2026-08-03
- Current combo / Oki guide：2026-08-31
- Checked through：2026-09-18
- source IDs live in sources.yaml
