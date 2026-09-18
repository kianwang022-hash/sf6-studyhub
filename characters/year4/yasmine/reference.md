# Yasmine — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Implemented: **2026-08-03 Year 4**
- Current combo / Oki guide: **2026-08-31**
- Current-version note: no major individual rebalance confirmed by **2026-09-01**
- Frame reference: official-reference data through **2026-08-27**
- Checked through: **2026-09-19**
- Health: **10000**

## 2｜Bayani system truth

### Acquisition

Current guide records Bayani acquisition through:
- normal Alon hit;
- Talim hit;
- SA1 hit;
- OD Boosted Alon hit can re-acquire in current system.

### Spend

Outside SA2:
- Boosted Alon uses Bayani;
- hit/block normally consumes Bayani.

### Normal vs Boosted Alon

- normal Alon block about -12;
- Boosted L: about -1;
- Boosted M: about -2;
- Boosted H: about -3;
- Boosted OD: about -1.

### SA2

Nakatagong Lakas:
- about 25 seconds persistent Bayani;
- Linya ng Liwanag becomes available;
- Boosted Alon pressure no longer follows the normal short acquire/consume cadence.

## 3｜Key end states

| End state | Current value | Use |
|---|---:|---|
| M Daloy -> Alon | +30 | dash +11 basic Oki |
| H Daloy -> Alon | +44 | two dashes +6 |
| L Daloy -> Boosted Alon | +42 | safe jump / active overhead |
| H Talim | +37 | dash +18 |
| M Talim | +2 | point-blank throw |
| H Lipad | +20~21 | corner meaty family |
| Forward throw | +29 | dash +10 |
| Sweep | +40 | two dashes +2 |
| OD Lipad | +25 | dash +6 |
| SA1 | about +24 | later cashout |
| SA2 Boosted OD Alon | +47 | persistent-state setplay |
| SA3 | +42 | safe-jump / DR pressure family |

## 4｜Route Library

### R01｜Light normal-state
2LP > 5LP/LP > M Daloy ng Tubig > Alon  
Gain Bayani / +30  
Verify：verified

### R02｜Light Bayani
Bayani active -> 2LP > 5LP/LP > L Daloy ng Tubig > Boosted Alon  
Spend Bayani / +42  
Verify：conditioned: Bayani

### R03｜2MP normal
2MP > H Daloy ng Tubig > Alon  
Gain Bayani / +44  
Verify：verified

### R04｜2MP Talim
2MP > M Talim ng Hangin  
Gain route / +2 point-blank  
Verify：verified

### R05｜OD Talim damage
2MP > OD Talim ng Hangin > 5HP > H Lipad ng Agila  
End state：+20~21  
Verify：verified

### R06｜2MK DRC normal
2MK > DRC 2MP > 2HP > H Daloy ng Tubig > Alon  
Gain Bayani / +44  
Verify：verified

### R07｜2MK DRC Talim
2MK > DRC 2MP > 2HP > H Talim ng Hangin  
End state：+37  
Verify：verified

### R08｜Bayani high damage
2MP > H Daloy ng Tubig > Boosted Alon > DR 2MP > H Talim ng Hangin > 5HP > H Lipad ng Agila  
Spend Bayani  
Verify：conditioned

### R09｜DR overhead
DR 6MP > 2MP > OD Talim ng Hangin > 5HP > H Lipad ng Agila  
Verify：verified

### R10｜Jump-in
j.HP > 2HP > H Daloy ng Tubig > Alon  
Gain Bayani / +44  
Verify：verified

### R11｜Blocked reversal
5HP PC > 2MP > OD Talim ng Hangin > 5HP > H Lipad ng Agila  
Verify：conditioned: PC

### R12｜5F punish
5LK PC > M Daloy ng Tubig > Alon  
Gain Bayani / +30  
Verify：verified

### R13｜DI PC easy
DI PC > H Talim ng Hangin > 5HP > H Lipad ng Agila  
Verify：verified

### R14｜DI stable
DI > 2HP > M Talim ng Hangin > 5HP > H Lipad ng Agila  
Verify：verified

### R15｜Mukha Ulan
Mukha ng Langit > Ulan > 2LP > L Daloy ng Tubig > Alon  
Cross-up / reacquire Bayani  
Verify：conditioned: height

### R16｜Mukha Kulog
Mukha ng Langit > Kulog > 2LP > 5LP/LP > M Daloy ng Tubig > Alon  
Front-side / reacquire Bayani  
Verify：conditioned: height

### R17｜SA2 install
confirmed route > SA2 Nakatagong Lakas  
Persistent Bayani  
Verify：conditioned

## 5｜Oki / State Library

### O01｜+30
M Daloy -> Alon +30 -> forward dash 19F -> +11

Options:
- throw
- 2MP
- shimmy

### O02｜+44
H Daloy -> Alon +44 -> two dashes -> +6

Options:
- throw
- 2MP
- 2LK
- shimmy

### O03｜+42 Boosted
Bayani + L Daloy -> Boosted Alon +42

Options:
- forward jump attack safe jump
- dash -> active 6MP overhead
- throw / low follow-up

### O04｜H Talim +37
dash 19F -> +18

Options:
- throw
- shimmy
- DR 2MP

### O05｜M Talim +2
point-blank:
- throw
- 2LP
- walk-back shimmy

### O06｜Forward throw +29
dash -> +10  
throw / 5MP / shimmy

### O07｜SA2 +47
SA2 active -> OD Daloy -> Boosted Alon +47

dash -> 2LP whiff x2 -> +4  
throw / shimmy / 2LK

## 6｜Mukha truth

### Ulan
- Hit +3~+6
- Block -4~-2
- Cross-up
- height-conditioned

### Kulog
- Hit +4~+10
- Block -3~+4
- front-side
- height-conditioned

### OD Kulog
- Block +1~+7
- still height-conditioned

Never flatten Mukha into one fixed plus-frame rule.

## 7｜Pangil truth

- normal versions total about 50F;
- normal block -4;
- OD block -2;
- use as setup/movement layer, not neutral autopilot.

## 8｜Backend-only

- Mukha fixed-frame claims without height.
- Pangil generic neutral use.
- SA2 Linya full tree before S4.
- Boosted Alon without Bayani/SA2 state.

## 9｜Source Boundary

Current numerical and state truth lives in sources.yaml. All Bayani, height, spacing, side-switch, active-frame and SA2 claims remain conditioned where applicable.
