# Beginner + Terminology Acceptance

Status: **CANDIDATE — Astro Gate required**  
Checked through: **2026-09-19**

## Problem repaired

The Astro migration preserved current S0-S4 data but had dropped the visible global first-entry layer and contextual terminology support.

The historical accepted product contained:
- SF6 Fundamentals before character-specific depth;
- Whole -> Part -> Whole learner flow;
- beginner-oriented terminology / self-check material.

## Candidate behavior

- global `/beginner/` page for common SF6 fundamentals;
- character pages keep the current Role / Learn / Practical / Reference experience;
- Character Hero exposes a small `第一次玩 SF6？` entry without replacing the main character flow;
- Practical renders common terms as contextual learner affordances;
- a term click opens a Chinese explanation in place;
- Practical keeps a compact expandable terminology panel;
- public Pages verification includes `/beginner/`.

## Non-goals

This change does **not** restore legacy `play.yaml` or `guide.yaml` as semantic authority.

It does **not** reintroduce the full legacy GROW / Guide runtime in this lane.

## Final proof required

One full Astro Gate must prove:
- beginner page renders;
- eight first-entry lessons exist;
- glossary is present;
- contextual KD and Shimmy terms are clickable in Ryu Practical;
- terminology drawer and popover work;
- beginner mobile width does not overflow;
- all 31 existing Gold character regression checks remain green.

## Final judgment

Promote to **ACCEPTED — BEGINNER_TERMINOLOGY_READY** after the exact candidate head passes Astro Gate.
