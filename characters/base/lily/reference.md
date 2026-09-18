# Lily — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Current combo / Oki guide：**2026-08-31**
- Frame reference：official-reference data through **2026-08-27**
- Checked through：**2026-09-19**
- Health：**10000**

## 2｜Windclad Resource Truth

### Build

Condor Wind hold:

- about 46F -> 1 Windclad
- about 71F -> 2 Windclad
- about 90F -> 3 Windclad

This is real time/space investment.

### Spend

Windclad enhances:

- Condor Spire
- Tomahawk Buster
- Condor Dive
- selected Super routes

### Learner rule

**Windclad should not be built automatically just because there is distance.**

Current pressure / position can be more valuable than future stock.

## 3｜Normal vs Windclad Spire

| Version | Startup | Block | End state |
|---|---:|---:|---:|
| L Spire | 17F | -8 | +33 |
| M Spire | 21F | -8 | +37 |
| H Spire | 25F | -8 | +37 |
| OD Spire | current route state | resource-dependent | +43 |
| Windclad L | 9F | +1 | +47 |
| Windclad M | 13F | +1 | +49 |
| Windclad H | 17F | +1 | +52 |
| Windclad OD | 9F | +2 | +56 |

Windclad state is mandatory for every enhanced row.

## 4｜Mexican Typhoon

- 5F startup
- L: 2000
- M: 2400
- H: 2800
- OD: 2900
- current end state around +28

Use after:
- plus Spire respect;
- explicit point-blank punish/read;
- real setup.

Do not teach it as the first action after every entry.

## 5｜Route Library

### R01｜Light basic
2LK > 2LP > M Tomahawk Buster

### R02｜Light Windclad
Windclad stock active -> 2LK > 2LP > 2LP > Windclad M Condor Spire  
End state：+49

### R03｜2MK Wind
2MK > L Condor Wind

### R04｜2HP Wind
2HP > M Condor Wind

### R05｜4HP Wind
4HP > H Condor Wind

### R06｜CDR normal
2HP / 4HP / 6HP > CDR > 4HP > 5MK > L Condor Spire  
End state：+33

### R07｜CDR Tomahawk
2HP / 4HP / 6HP > CDR > 4HP > 5MK > H Tomahawk Buster

### R08｜CDR Windclad
Windclad stock active -> 2HP / 4HP / 6HP > CDR > 4HP > 5MK > Windclad H Condor Spire  
End state：+52

### R09｜5HP PC
5HP PC > 4HP > H Condor Wind

### R10｜DI PC
DI PC > jump 2HP > 6HP > H Condor Wind

### R11｜Point-blank Typhoon Punish
5HP PC point-blank > H Mexican Typhoon

### R12｜Corner Windclad
2HP > Windclad H Condor Spire > Windclad OD Tomahawk Buster > OD Condor Dive > SA1 / SA2  
Condition：corner / stock / resources

## 6｜Oki / Respect Library

### O01｜Windclad L +47
two forward dashes -> +5

Options：
- strike
- Mexican Typhoon after respect

### O02｜Windclad M +49
two forward dashes -> +7

Options：
- strike
- Mexican Typhoon
- shimmy

### O03｜Windclad H +52
two forward dashes -> +10

Options：
- 2HP
- throw
- Mexican Typhoon after respect

Alternative:
delayed forward jump safe jump

Condition：exact Windclad H Spire end state.

### O04｜Windclad OD +56
two forward dashes -> +14

High-budget strike / command-grab state.

### O05｜Windclad Spire Block
Normal Windclad Spire frame truth:
- +1
- OD +2

Practical effective plus can increase with spacing / contact timing.

Always keep spacing truth.

### O06｜Mexican Typhoon +28
Corner:
Typhoon hit + Windclad stock -> Windclad OD Spire active-meaty family

Condition：
- corner
- stock
- exact timing

## 7｜Tomahawk Buster

Normal:
- L 6F
- M 8F
- H 10F

Windclad:
- L 4F
- M 6F
- H 8F

Windclad state required.

## 8｜Year 4 Key Points

- L Condor Wind has attack-version vs hold-to-stock choice.
- Windclad Spire remains the key resource-backed plus-entry layer.
- spacing OD Spire and Condor Dive routes are current.
- safe-jump routes remain state/spacing dependent.

## 9｜Backend-only

- full multi-stock max route
- generic Spire safety without Windclad
- Mexican Typhoon without respect / punish state
- safe jump outside exact Windclad H Spire state
- multi-stock build without safe resource window

## 10｜Source Boundary

Current frame / route truth lives in sources.yaml. Windclad stock, resource window, spacing, active timing, corner, respect and exact end state remain part of the truth.
