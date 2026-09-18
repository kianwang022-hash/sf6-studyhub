# Yasmine Fact Inventory v0.1

Status: **PHASE C CANDIDATE**  
Checked: **2026-09-19**

## Stable constraints

- Health: **10000**.
- Signature state: **Bayani Mode**.
- Bayani upgrades Alon into Boosted Alon and normally gets consumed by that strengthened interaction.
- SA2 Nakatagong Lakas creates a temporary persistent-Bayani window.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Magaang na Paglaslas | 5 | 5-7 | 7 | +4 | -1 | C | 300 |
| 5LK | Mababang Sipa | 5 | 5-6 | 12 | +2 | -4 | C | 300 |
| 5MP | Pabalik-balik na Paglaslas | 6 | 6-17 / 6-7,16-17 | 18 | +2 | -3 | — | 600 |
| 5MK | Tagilirang Sipa | 10 | 10-12 | 19 | +3 | -4 | — | 700 |
| 5HP | Tripleng Paglaslas | 9 | 9-28 / 9-10,15-16,27-28 | 15 | +2 | -3 | C | 800 |
| 5HK | Tumatalon na Sipa | 14 | 14-16 | 20 | +1 | -4 | — | 800 |
| 2LP | Mabilisang Paglaslas | 4 | 4-6 | 8 | +4 | -1 | C | 300 |
| 2LK | Magaang na Sipa | 5 | 5-7 | 10 | +2 | -2 | — | 200 |
| 2MP | Kalmot | 6 | 6-8 | 16 | +4 | 0 | C | 600 |
| 2MK | Pandurog ng Lulod | 8 | 8-10 | 19 | -1 | -6 | C | 500 |
| 2HP | Mamimituin | 8 | 8-13 | 23 | +2 | -11 | C | 800 |
| 2HK | Gunting na Pabagsak | 10 | 10-12 | 25 | KD | -10 | — | 900 |
| j.LP | Magaang na Panghimpapawid na Paglaslas | 4 | 4-8 | Landing 3 | — | — | — | 300 |
| j.LK | Panghimpapawid na Sipa Gamit ang Tuhod | 4 | 4-9 | Landing 3 | — | — | — | 300 |
| j.MP | Pabilog na Paglaslas | 7 | 7-10 | Landing 3 | — | — | — | 700 |
| j.MK | Panghimpapawid na Sipa sa Harap | 7 | 7-12 | Landing 3 | — | — | — | 500 |
| j.HP | Namamalong Mga Pakpak | 9 | 9-14 | Landing 3 | — | — | — | 800 |
| j.HK | Panghimpapawid na Malakas na Sipa | 10 | 10-16 | Landing 3 | — | — | — | 800 |

## Key current tools

| Tool | Current fact | Practical meaning |
|---|---|---|
| 2LP | 4F / Hit +4 / Block -1 / C | basic light confirm |
| 2MP | 6F / Hit +4 / Block 0 / C | main grounded contact |
| 2MK | 8F / Hit -1 / Block -6 / C | low DRC entry |
| L/M/H Daloy ng Tubig | 12/16/21F / Block -6 | route into Alon |
| normal Alon | first phase block around -12 | risky without Bayani |
| Boosted L/M/H Alon | Block about -1 / -2 / -3 | Bayani conversion into safe-strengthened state |
| Boosted OD Alon | Block -1 | stronger state; current system can re-acquire Bayani on hit |
| M Talim ng Hangin | 21F / Block -3 / hit +2 | point-blank throw state / Bayani route |
| H Talim ng Hangin | 30F / Block +1 | +37 end state |
| OD Talim ng Hangin | 18F / Block -12 | combo route |
| Mukha ng Langit | movement / airborne branch | Ulan cross-up vs Kulog front-side choice |
| Ulan | 17F / Hit +3~+6 / Block -4~-2 | height-conditioned cross-up |
| Kulog | 17F / Hit +4~+10 / Block -3~+4 | height-conditioned front attack |
| OD Kulog | Block +1~+7 | later strong conditioned approach |
| OD Lipad ng Agila | 6F fully invincible | reversal |
| Pangil sa Likuran | 25F / Block -4 normal | later movement/setplay tool |
| SA2 Nakatagong Lakas | total 10 activation / about 1500F state | persistent Bayani; Linya ng Liwanag available |

## High-leverage current end states

- M Daloy -> Alon: **+30**.
- H Daloy -> Alon: **+44**.
- L Daloy -> Boosted Alon: **+42**.
- SA2 OD Boosted Alon: **+47**.
- H Talim ng Hangin: **+37**.
- M Talim hit: **+2**, point-blank throw.
- H Lipad ng Agila: **+20~21**.
- forward throw: **+29**.
- sweep: **+40**.
- SA1: about **+24**.
- SA3: **+42**.

## Constraints

- normal Alon and Boosted Alon are different state truths; never merge them into one safe move.
- Boosted Alon requires Bayani unless SA2 provides persistent Bayani.
- Mukha Ulan/Kulog hit/block advantage changes with height.
- +42 safe jump is tied to the Bayani Boosted-Alon route state, not generic Alon.
- SA2 persistent Bayani is a late-stage install and should not define S0.

## Next

Proceed to Route Master Inventory and audit whether the first Boosted Alon belongs in S1.
