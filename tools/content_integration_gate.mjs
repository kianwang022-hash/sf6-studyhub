import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const ROOT = process.cwd();
const assert = (ok, msg) => { if (!ok) throw new Error(msg); };
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const yaml = (p) => YAML.parse(read(p));

const collectSourceRefs = (node, out = []) => {
  if (Array.isArray(node)) {
    for (const item of node) collectSourceRefs(item, out);
    return out;
  }
  if (!node || typeof node !== 'object') return out;
  for (const [key, value] of Object.entries(node)) {
    if ((key === 'source_id' || key === 'primary_source') && typeof value === 'string') out.push(value);
    if (key === 'sources' && Array.isArray(value)) {
      for (const id of value) if (typeof id === 'string') out.push(id);
    }
    collectSourceRefs(value, out);
  }
  return out;
};

const chars = [
  { slug:'ryu', group:'base', normals:18, learn:['S0｜最小可玩','623HP','236P'], ref:['+42','236236K'], practical:['623HP'] },
  { slug:'jamie', group:'base', normals:18, learn:['安全窗口','Drink Level','H Arrow Kick'], ref:['Bakkai','Tenshin'], practical:['236K','63214'] },
  { slug:'mai', group:'year2', normals:18, learn:['dash +9','Musasabi','stock'], ref:['OD `214P` Ryuuenbu','+41 / +42'], practical:['j.214P','OD 236K','SA2'] },
  { slug:'zangief', group:'base', normals:23, learn:['建立“对手必须防”的尊重','SPD','Lariat'], ref:['SPD 后重置','OD Double Lariat'], practical:['360P','SA3'] },
  { slug:'cammy', group:'base', normals:18, learn:['M Spiral Arrow','Cannon Strike','Hooligan'], ref:['Cannon Strike','SA3'], practical:['SA1','SA3'] },
  { slug:'ken', group:'base', normals:18, learn:['S0｜最小可玩','Quick Dash Tatsu','2MP > 5LK'], ref:['+25','Forward Step Kick'], practical:['Quick Dash','SA3'], candidate:true },
  { slug:'akuma', group:'year1', normals:18, learn:['S0｜最小可玩','+30','Demon Raid'], ref:['+37 family','Demon Raid','Shun Goku Satsu'], practical:['Demon Raid','SA3'], candidate:true },
  { slug:'luke', group:'base', normals:18, learn:['S0｜最小可玩','L Flash Knuckle','Perfect Flash Knuckle'], ref:['+36','+64','Perfect Flash Knuckle'], practical:['DDT','SA3'], candidate:true },
  { slug:'terry', group:'year2', normals:18, learn:['S0｜最小可玩','Round Wave','OD Quick Burn'], ref:['+33','Round Wave','Triple Geyser'], practical:['OD Quick Burn','SA2'], candidate:true },
  { slug:'sagat', group:'year3', normals:18, learn:['S0｜最小可玩','High Tiger Shot','+42 safe jump'], ref:['+32','+42','Tiger Knee Crush'], practical:['High Tiger Shot','SA2'], candidate:true },
  { slug:'juri', group:'base', normals:18, learn:['S0｜最小可玩','M Fuhajin','stock +1'], ref:['Feng Shui Engine','Boosted Saihasho','stock'], practical:['Go Ohsatsu','Feng Shui Engine'], candidate:true },
  { slug:'elena', group:'year2', normals:18, learn:['S0｜最小可玩','Lynx Song','Healing'], ref:['+42','Revival Dance','Healing variation'], practical:['Lynx Song','SA2 Healing'], candidate:true },
  { slug:'yasmine', group:'year4', normals:18, learn:['S0｜最小可玩','Bayani','Boosted Alon'], ref:['Bayani','Boosted Alon','Nakatagong Lakas'], practical:['Boosted Alon','SA2'], candidate:true },
  { slug:'rashid', group:'year1', normals:18, learn:['S0｜最小可玩','M Spinning Mixer','Air Current'], ref:['+31','+42','Ysaar'], practical:['Air Current','Ysaar'], candidate:true },
  { slug:'kimberly', group:'base', normals:18, learn:['S0｜最小可玩','Shadow Slide','Bomb'], ref:['Shuriken Bomb','+42','SA3'], practical:['Shuriken Bomb','SA3'], candidate:true },
  { slug:'guile', group:'base', normals:18, learn:['S0｜最小可玩','Sonic Boom','charge'], ref:['OD Sonic Blade','+42','Solid Puncher'], practical:['OD Sonic Blade','Solid Puncher'], candidate:true },
  { slug:'deejay', group:'base', normals:18, learn:['S0｜最小可玩','Air Slasher','Jus Cool'], ref:['OD Machine Gun Uppercut','+52','Waning Moon'], practical:['Jus Cool','Sunrise Festival'], candidate:true },
  { slug:'ehonda', group:'base', normals:18, learn:['S0｜最小可玩','Oicho','Sumo Spirit'], ref:['+42','Oicho','OD Teppo'], practical:['Oicho','Sumo Spirit'], candidate:true },
  { slug:'blanka', group:'base', normals:18, learn:['S0｜最小可玩','Electric Thunder','Blanka-chan Bomb'], ref:['+42','Blanka-chan Bomb','Lightning Beast'], practical:['Blanka-chan Bomb','SA2'], candidate:true },
  { slug:'vega', group:'year2', normals:18, learn:['S0｜最小可玩','Psycho Mine','cash-in'], ref:['Psycho Mine','OD Crusher','Devil Reverse'], practical:['Psycho Mine','OD Psycho Crusher'], candidate:true },
  { slug:'marisa', group:'base', normals:18, learn:['S0｜最小可玩','Enfold','+42'], ref:['charged 5HP','Phalanx','Enfold'], practical:['Enfold','fully charged'], candidate:true },
  { slug:'lily', group:'base', normals:18, learn:['S0｜最小可玩','Windclad','Mexican Typhoon'], ref:['Normal vs Windclad Spire','Mexican Typhoon','+52'], practical:['Mexican Typhoon','Windclad H Condor Spire'], candidate:true },
  { slug:'manon', group:'base', normals:18, learn:['S0｜最小可玩','Medal','H Rond-point'], ref:['Medal Level','Manège Doré','Throw Aftermath'], practical:['Manège Doré','Medal Level'], candidate:true },
  { slug:'alex', group:'year3', normals:18, learn:['S0｜最小可玩','Prowler','4MK'], ref:['+42','Flying Cross Chop','Power Bomb'], practical:['Power Bomb','Prowler','Flying Cross Chop'], candidate:true },
  { slug:'chunli', group:'base', normals:18, learn:['S0｜最小可玩','Serenity Stream','Up exit'], ref:['Lotus Fist','+46','charge'], practical:['Serenity Stream','Spinning Bird Kick','safe-jump'], candidate:true },
  { slug:'aki', group:'year1', normals:18, learn:['S0｜最小可玩','H Serpent Lash','poison'], ref:['+69','Orchid Spring','Drive Parry'], practical:['H Serpent Lash','opponent poisoned','Orchid Spring'], candidate:true },
  { slug:'ed', group:'year1', normals:18, learn:['S0｜最小可玩','M Psycho Blitz','charged Flicker'], ref:['back throw','Psycho Knuckle','+42'], practical:['M Psycho Blitz','charged L/M Psycho Flicker','Psycho Knuckle'], candidate:true },
  { slug:'jp', group:'base', normals:18, learn:['S0｜最小可玩','Departure','M Stribog'], ref:['+42','OD Amnesia','Lovushka'], practical:['Departure','M Stribog','OD Torbalan'], candidate:true }
];

for (const c of chars) {
  const dir = `characters/${c.group}/${c.slug}`;
  const practicalText = read(`${dir}/practical.yaml`);
  const practical = YAML.parse(practicalText);
  const progression = yaml(`${dir}/grow.yaml`);
  const learn = read(`${dir}/learn.md`);
  const reference = read(`${dir}/reference.md`);
  const roleOwner = c.slug === 'ryu'
    ? yaml(`${dir}/meta.yaml`)
    : yaml(`${dir}/role_profile.yaml`);
  const role = c.slug === 'ryu' ? roleOwner.role_profile : roleOwner.role_profile;
  const sourceRegistry = yaml(`${dir}/sources.yaml`);
  const sourceIds = new Set((sourceRegistry?.sources ?? []).map((s) => s?.id).filter(Boolean));

  assert(sourceRegistry?.character === c.slug, `${c.slug}: source registry character mismatch`);
  assert(sourceIds.size >= 4, `${c.slug}: source registry is missing current evidence tiers`);
  assert((sourceRegistry.sources ?? []).some((s) => Number(s?.tier) === 0), `${c.slug}: official Tier 0 source missing`);
  for (const id of new Set([...collectSourceRefs(roleOwner), ...collectSourceRefs(practical)])) {
    assert(sourceIds.has(id), `${c.slug}: unresolved source reference ${id}`);
  }

  assert(learn.length > 500, `${c.slug}: learning content missing/thin`);
  assert(reference.length > 400, `${c.slug}: reference content missing/thin`);
  assert(role?.character_model || role?.identity, `${c.slug}: character model missing`);
  assert(role?.normal_frame_table?.rows?.length === c.normals, `${c.slug}: normal table must be ${c.normals}`);
  assert(practical?.stages?.S0 && practical?.stages?.S4, `${c.slug}: S0-S4 practical stages missing`);
  assert(Array.isArray(practical?.opportunities) && practical.opportunities.length >= 4, `${c.slug}: practical Opportunity Hub too small`);
  assert(Array.isArray(progression?.progression_stages) && progression.progression_stages.length === 5, `${c.slug}: learning S0-S4 progression missing`);
  assert(progression.progression_stages.every((s) => s.learner_goal && Array.isArray(s.add_now) && s.gate), `${c.slug}: incomplete learning progression stage`);

  for (const token of c.learn) assert(learn.includes(token), `${c.slug}: learning marker missing: ${token}`);
  for (const token of c.ref) assert(reference.includes(token), `${c.slug}: reference marker missing: ${token}`);
  for (const token of c.practical) assert(practicalText.includes(token), `${c.slug}: practical marker missing: ${token}`);

  for (const op of practical.opportunities ?? []) {
    for (const row of op.rows ?? []) {
      const input = String(row.input ?? '');
      assert(input && !input.includes('...') && !input.includes('…'), `${c.slug}: unfinished practical input: ${input}`);
      assert(!/^starter\s*>/i.test(input) && !/^move\s*>/i.test(input), `${c.slug}: generic starter leaked: ${input}`);
      assert(String(row.next_loop ?? row.next_loop_package ?? '').trim(), `${c.slug}: practical row missing next loop`);
      assert(String(row.why ?? '').trim(), `${c.slug}: practical row missing WHY`);
    }
  }

  if (c.slug === 'jamie') {
    assert(!/Bakkai[^\n]{0,40}214K|214K[^\n]{0,40}Bakkai/i.test(`${learn}\n${reference}\n${practicalText}`), 'jamie: incorrect 214K Bakkai mapping leaked');
  }
  if (c.slug === 'zangief') {
    assert(!/SPD[^\n]{0,80}(保证|guaranteed).{0,20}(贴脸|point-blank)/i.test(`${learn}\n${reference}\n${practicalText}`), 'zangief: guaranteed point-blank Oki wording leaked');
  }
  if (c.slug === 'cammy') {
    assert(/高度|距离|落点/.test(practicalText), 'cammy: Cannon Strike conditioning language missing');
  }
  if (c.slug === 'sagat') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === '-', 'sagat: 2MK must remain non-cancelable');
    assert(/airborne|空中命中|airborne_hit/i.test(practicalText), 'sagat: +42 safe jump lost airborne-hit condition');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'sagat: inherited 2MK DRC route leaked');
  }
  if (c.slug === 'juri') {
    assert(/Fuhajin Stock/i.test(role?.resource?.name ?? ''), 'juri: Fuhajin stock resource owner missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const spend = row?.value?.stock_spend;
        if (stage === 'S0') {
          assert(!spend || Number(spend) === 0, 'juri: S0 must not spend stock');
          assert(!/Boosted\s+(?:Saihasho|Ankensatsu|Go Ohsatsu)/i.test(input), 'juri: Boosted special leaked into S0');
        }
        if (spend && Number(spend) > 0) {
          const conditions = JSON.stringify(row.conditions ?? []);
          assert(/stock/i.test(conditions) || /stock/i.test(input) || /Stock/i.test(op.title ?? ''), 'juri: stock-spend route missing stock condition');
        }
        if (/SA2|Feng Shui Engine/i.test(input)) {
          assert(stage === 'S4', 'juri: Feng Shui Engine must remain S4');
        }
      }
    }
  }
  if (c.slug === 'elena') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === '-', 'elena: 2MK must remain non-cancelable');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'elena: inherited 2MK DRC route leaked');
    assert(/corner[\s\S]{0,120}M Spinning Scythe[\s\S]{0,120}\+42/i.test(practicalText) || /M Spinning Scythe[\s\S]{0,120}\+42[\s\S]{0,120}corner/i.test(practicalText), 'elena: +42 safe jump lost corner M Scythe condition');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        if (/Healing|SA2 Healing/i.test(input) || /Healing/i.test(op.title ?? '')) {
          assert(stage === 'S4', 'elena: SA2 Healing must remain S4');
        }
      }
    }
  }
  if (c.slug === 'yasmine') {
    assert(/Bayani/i.test(role?.resource?.name ?? ''), 'yasmine: Bayani resource owner missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const spend = row?.value?.bayani_spend;
        if (stage === 'S0') {
          assert(!spend || Number(spend) === 0, 'yasmine: S0 must not spend Bayani');
          assert(!/Boosted Alon/i.test(input), 'yasmine: Boosted Alon leaked into S0');
        }
        if (/Boosted Alon/i.test(input)) {
          const conditions = JSON.stringify(row.conditions ?? []);
          assert(/bayani|sa2/i.test(conditions) || /Bayani active|SA2 active/i.test(input), 'yasmine: Boosted Alon route missing Bayani/SA2 condition');
        }
        if (/SA2|Nakatagong Lakas/i.test(input) || /SA2/i.test(op.title ?? '')) {
          assert(stage === 'S4', 'yasmine: SA2 persistent Bayani must remain S4');
        }
      }
    }
  }
  if (c.slug === 'rashid') {
    assert(/Air Current/i.test(role?.signature_mechanic?.name ?? ''), 'rashid: Air Current signature owner missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);
        if (stage === 'S0') {
          assert(!/Air Current Boosted|Boosted .*Mixer|Boosted .*Eagle/i.test(input), 'rashid: Boosted Air Current route leaked into S0');
        }
        if (/Boosted/i.test(input)) {
          assert(/air_current/i.test(conditions) || /Air Current/i.test(input), 'rashid: Boosted route missing Air Current condition');
        }
        if (/Eagle Spike\s*$/i.test(input.trim())) {
          assert(/spacing/i.test(rowText), 'rashid: Eagle Spike ender row lost spacing truth');
        }
        if (/\+42/.test(JSON.stringify(row?.value ?? {})) || /\+42/.test(input)) {
          if (/Mixer/i.test(input)) assert(/air_current/i.test(conditions) || /Air Current/i.test(input), 'rashid: +42 Mixer lost Air Current condition');
        }
        if (/Ysaar|SA2/i.test(input) || /Ysaar|SA2/i.test(op.title ?? '')) {
          assert(stage === 'S4', 'rashid: Ysaar must remain S4');
        }
      }
    }
  }
  if (c.slug === 'kimberly') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === '-', 'kimberly: 2MK must remain non-cancelable');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'kimberly: inherited 2MK DRC route leaked');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);
        const stockSpend = Number(row?.value?.bomb_stock_spend ?? 0);
        if (stage === 'S0') {
          assert(stockSpend === 0, 'kimberly: S0 must not spend Bomb stock');
          assert(!/Shuriken Bomb|Bomb Spread/i.test(input), 'kimberly: Bomb leaked into S0');
        }
        if (/Shuriken Bomb|Bomb Spread/i.test(input) || stockSpend > 0) {
          assert(/bomb_stock|stock/i.test(conditions) || /bomb_stock/i.test(rowText), 'kimberly: Bomb row missing stock condition');
          assert(/corner|setup/i.test(conditions) || /corner|setup/i.test(rowText), 'kimberly: Bomb row missing corner/setup condition');
        }
        if (/\+42/.test(JSON.stringify(row?.value ?? {})) || /\+42/.test(input)) {
          assert(/OD Sprint/i.test(input) && /Hojin/i.test(input) && /Hisen/i.test(input), 'kimberly: +42 safe jump lost exact OD Sprint/Hojin/Hisen route');
        }
        if (/SA3|Ninjastar Cypher/i.test(input) || /SA3/i.test(op.title ?? '')) {
          assert(stage === 'S4', 'kimberly: SA3 install must remain S4');
        }
      }
    }
  }
  if (c.slug === 'guile') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === '-', 'guile: 2MK must remain non-cancelable');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'guile: inherited 2MK DRC route leaked');
    assert(/Charge availability/i.test(role?.signature_mechanic?.name ?? ''), 'guile: charge availability owner missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);
        if (stage === 'S0') {
          assert(!/Sonic Blade|Sonic Cross/i.test(input), 'guile: Blade/Cross leaked into S0');
        }
        if (/Somersault/i.test(input) && /\+42/.test(rowText)) {
          assert(/hit_height/i.test(conditions), 'guile: +42 Somersault lost hit-height condition');
        }
        if (/Solid Puncher|SA2/i.test(input) || /Solid Puncher|SA2/i.test(op.title ?? '')) {
          assert(stage === 'S4', 'guile: Solid Puncher must remain S4');
        }
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'charge' && op.stage === 'S0'), 'guile: S0 charge opportunity missing');
  }
  if (c.slug === 'deejay') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === '-', 'deejay: 2MK must remain non-cancelable');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'deejay: inherited 2MK DRC route leaked');
    assert(/rhythm deception/i.test(role?.signature_mechanic?.name ?? ''), 'deejay: rhythm-deception owner missing');
    assert(/fake projectile/i.test(JSON.stringify(role)), 'deejay: L Air Slasher fake truth missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);
        if (/Jus Cool/i.test(input) || /Jus Cool/i.test(op.title ?? '')) {
          assert(stage === 'S2' || stage === 'S3' || stage === 'S4', 'deejay: Jus Cool must not enter S0/S1');
        }
        if (/Jackknife/i.test(input) && /\+42/.test(rowText)) {
          assert(/grounded_hit/i.test(conditions), 'deejay: +42 Jackknife lost grounded-hit condition');
        }
        if (/OD Machine Gun Uppercut/i.test(input) || /OD MGU/i.test(op.title ?? '')) {
          assert(stage === 'S3' || stage === 'S4', 'deejay: OD MGU +52 must remain S3+');
        }
        if (/Sunrise Festival|SA2/i.test(input) || /Sunrise Festival|SA2/i.test(op.title ?? '')) {
          assert(stage === 'S4', 'deejay: Sunrise Festival must remain S4');
        }
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'rhythm' && op.stage === 'S0'), 'deejay: S0 fake/real rhythm opportunity missing');
  }
  if (c.slug === 'ehonda') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === 'conditional', 'ehonda: 2MK must remain Spirit-only conditional cancel');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'ehonda: inherited 2MK DRC route leaked');
    assert(/respect.*Oicho/i.test(role?.signature_mechanic?.name ?? ''), 'ehonda: respect-to-Oicho owner missing');
    const hondaText = learn + "\n" + reference + "\n" + practicalText;
    assert(!/(?:guaranteed\s+(?:point-blank\s+)?Oicho|Oicho\s+(?:is\s+)?guaranteed|Oicho[^\n]{0,32}(?:保证能抓|保证贴脸|必定能抓|必抓))/i.test(hondaText), 'ehonda: positive guaranteed-Oicho wording leaked');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        if (stage === 'S0') assert(!/Oicho/i.test(input), 'ehonda: Oicho input leaked into S0');
        if (/Oicho/i.test(input)) assert(stage !== 'S0', 'ehonda: Oicho must start after S0');
        const usesPlus42 = /\+42/.test(JSON.stringify(row?.value ?? {})) || /\+42/.test(input);
        if (usesPlus42) assert(/teppo_first_hit/i.test(conditions) || /Teppo Triple Slap first hit/i.test(input), 'ehonda: +42 lost Teppo first-hit truth');
        if (/Sumo Spirit/i.test(input) || /Sumo Spirit/i.test(op.title ?? '')) assert(stage === 'S3' || stage === 'S4', 'ehonda: Sumo Spirit must remain S3+');
        if (/OD Teppo/i.test(input) || /OD Teppo/i.test(op.title ?? '')) assert(stage === 'S3' || stage === 'S4', 'ehonda: OD Teppo +3 must remain S3+');
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'charge' && op.stage === 'S0'), 'ehonda: S0 charge opportunity missing');
  }
  if (c.slug === 'blanka') {
    assert(/Earned corner object setplay/i.test(role?.signature_mechanic?.name ?? ''), 'blanka: corner-object signature owner missing');
    assert(/very unsafe on block|被防很危险/i.test(JSON.stringify(role)), 'blanka: Rolling blocked-risk truth missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);
        const bombUse = /Blanka-chan Bomb|Bomb setup|Bomb placed/i.test(input) || /Bomb/i.test(op.title ?? '');
        if (bombUse) {
          assert(stage === 'S2' || stage === 'S3' || stage === 'S4', 'blanka: Bomb must not enter S0/S1');
          assert(/corner/i.test(conditions) || /corner/i.test(rowText), 'blanka: Bomb row lost corner truth');
          assert(/bomb_placed|activation_timing|setup/i.test(conditions) || /activation|setup/i.test(rowText), 'blanka: Bomb row lost placement/activation truth');
        }
        const usesPlus42 = /\+42/.test(JSON.stringify(row?.value ?? {})) || /\+42/.test(input);
        if (usesPlus42 && /Vertical Rolling/i.test(input + ' ' + String(op.title ?? ''))) {
          assert(/vertical_rolling_exact_state/i.test(conditions) || /exact/i.test(input), 'blanka: +42 Vertical Rolling lost exact-state truth');
        }
        if (/Lightning Beast|SA2/i.test(input) || /Lightning Beast|SA2/i.test(op.title ?? '')) {
          assert(stage === 'S4', 'blanka: Lightning Beast must remain S4');
        }
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'charge' && op.stage === 'S0'), 'blanka: S0 charge opportunity missing');
  }
  if (c.slug === 'vega') {
    assert(/Psycho Mine/i.test(role?.resource?.name ?? ''), 'vega: Psycho Mine resource owner missing');
    assert(/opponent-side Psycho Mine state/i.test(role?.signature_mechanic?.name ?? ''), 'vega: Mine-state signature owner missing');
    const roleText = JSON.stringify(role);
    assert(/normal L\/M Crusher|Normal L\/M Crusher|Block -20/i.test(roleText), 'vega: normal Crusher unsafe truth missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const spend = Number(row?.value?.mine_spend ?? 0);
        if (stage === 'S0') {
          assert(spend === 0, 'vega: S0 must not cash Psycho Mine');
          assert(!/Psycho Mine active/.test(input), 'vega: Mine cash-in leaked into S0');
        }
        if (/Psycho Mine active/.test(input) || spend > 0) assert(/psycho_mine_active/i.test(conditions), 'vega: Mine-enhanced row missing psycho_mine_active');
        const usesMinePlus = /\+(?:42|49|82)/.test(JSON.stringify(row?.value ?? {})) || /\+(?:42|49|82)/.test(input);
        if (usesMinePlus && /Backfist|Crusher/.test(input)) assert(/psycho_mine_active/i.test(conditions), 'vega: Mine Oki value lost Mine-state truth');
        if (/Devil Reverse/i.test(input)) assert(/landing_height/i.test(conditions), 'vega: Devil Reverse lost height condition');
        if (/OD Psycho Crusher/i.test(input) || /OD Crusher/i.test(op.title ?? '')) assert(stage === 'S3' || stage === 'S4', 'vega: OD Crusher high-resource cash-in must remain S3+');
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'plant' && op.stage === 'S0'), 'vega: S0 Mine-plant opportunity missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'state_choice' && op.stage === 'S2'), 'vega: S2 hold-vs-detonate opportunity missing');
  }
  if (c.slug === 'marisa') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === '-', 'marisa: 2MK must remain non-cancelable');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'marisa: inherited 2MK DRC route leaked');
    assert(/Damage-backed respect.*Enfold/i.test(role?.signature_mechanic?.name ?? ''), 'marisa: damage-backed respect owner missing');
    assert(/armor.*无风险|armor.*not.*safety|armor.*risk/i.test(JSON.stringify(role)), 'marisa: armor-risk truth missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        if (stage === 'S0') assert(!/Enfold/i.test(input), 'marisa: Enfold leaked into S0');
        if (/Enfold/i.test(input)) {
          assert(stage !== 'S0', 'marisa: Enfold must start after S0');
          assert(/opponent_respect|setup_timing/i.test(conditions), 'marisa: Enfold row lost respect/setup truth');
        }
        const usesPlus42 = /\+42/.test(JSON.stringify(row?.value ?? {})) || /\+42/.test(input);
        if (usesPlus42) assert(/phalanx_ender/i.test(conditions) || /Phalanx ender/i.test(input), 'marisa: +42 lost Phalanx ender truth');
        if (/fully charged|charged 5HP|charged 4HP|charged .*Gladius/i.test(input)) assert(/full_charge/i.test(conditions), 'marisa: charged row lost full-charge truth');
        if (/Scutum/i.test(input) || /Scutum/i.test(op.title ?? '')) assert(stage === 'S3' || stage === 'S4', 'marisa: Scutum must remain S3+');
      }
    }
  }
  if (c.slug === 'lily') {
    assert(/Windclad Stock/i.test(role?.resource?.name ?? ''), 'lily: Windclad resource owner missing');
    assert(/Windclad investment.*Mexican Typhoon/i.test(role?.signature_mechanic?.name ?? ''), 'lily: investment-to-Typhoon signature owner missing');
    assert(/Normal Spire[\s\S]{0,120}Block -8|normal Spire -8/i.test(JSON.stringify(role)), 'lily: normal Spire unsafe truth missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const value = row?.value ?? {};
        const stockGain = Number(value?.stock_gain ?? 0);
        const stockSpend = Number(value?.stock_spend ?? 0);
        if (stage === 'S0') assert(!/Mexican Typhoon\s*$/i.test(input), 'lily: Mexican Typhoon choice leaked into S0');
        const enhancedMove = /Windclad\s+(?:[LMHOD]+\s+)?(?:Condor Spire|Tomahawk Buster|Condor Dive)/i.test(input) || /Windclad stock active/i.test(input);
        if (enhancedMove || stockSpend > 0) assert(/windclad_stock/i.test(conditions), 'lily: Windclad move/spend row missing windclad_stock');
        if (/Mexican Typhoon\s*$/i.test(input)) {
          assert(stage !== 'S0', 'lily: Mexican Typhoon must start after S0');
          assert(/opponent_respect|punish_counter|point_blank/i.test(conditions), 'lily: Mexican Typhoon choice lost respect/punish truth');
        }
        const usesPlus52 = /\+52/.test(JSON.stringify(value)) || /\+52/.test(input);
        if (usesPlus52 && /Spire/i.test(input + ' ' + String(op.title ?? ''))) assert(/windclad_stock/i.test(conditions) && /windclad_h_spire_end_state/i.test(conditions), 'lily: +52 safe-jump/Oki row lost Windclad H Spire exact-state truth');
        if (stockGain > 0) assert(/safe_resource_window/i.test(conditions), 'lily: Windclad build row missing safe resource window');
        if (stockGain > 1) assert(stage === 'S3' || stage === 'S4', 'lily: multi-stock Windclad build must remain S3+');
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'resource' && op.stage === 'S0'), 'lily: S0 one-stock investment opportunity missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'state_choice' && op.stage === 'S2'), 'lily: S2 hold-vs-spend opportunity missing');
  }
  if (c.slug === 'manon') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === '-', 'manon: 2MK must remain non-cancelable');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'manon: inherited 2MK DRC route leaked');
    assert(/Medal reward escalation.*strike revaluation/i.test(role?.signature_mechanic?.name ?? ''), 'manon: Medal feedback signature owner missing');
    const manonText = learn + "\n" + reference + "\n" + practicalText;
    const manonPositiveGuarantee = manonText.split('\n').some((line) => {
      const hasGuarantee = /guaranteed\s+(?:continued\s+)?throw|throw\s+(?:is\s+|is\s+always\s+|always\s+)?guaranteed|保证续投|必定续投/i.test(line);
      const hasNegation = /\bnot\b|不是|并非|不保证/i.test(line);
      return hasGuarantee && !hasNegation;
    });
    assert(!manonPositiveGuarantee, 'manon: positive guaranteed throw-after wording leaked');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const valueText = JSON.stringify(row?.value ?? {});
        if (stage === 'S0') {
          assert(!/Manège Doré\s*$/i.test(input), 'manon: command-grab choice leaked into S0');
          assert(!/medal_level/i.test(valueText), 'manon: Medal Level bookkeeping leaked into S0');
        }
        if (/Manège Doré\s*$/i.test(input)) {
          assert(stage !== 'S0', 'manon: Manège Doré must start after S0');
          assert(/opponent_respect|point_blank|punish_counter/i.test(conditions), 'manon: Manège Doré choice lost respect/point-blank truth');
        }
        if (/Medal Level 4-5/i.test(input) || /medal_level_4_5/i.test(conditions)) {
          assert(stage === 'S3' || stage === 'S4', 'manon: high-Medal layer must remain S3+');
        }
        if (/normal throw or Manège Doré hit -> forward dash/i.test(input)) {
          assert(/throw_spacing/i.test(conditions), 'manon: throw-after dash lost spacing truth');
        }
        if (/damage/i.test(valueText) && /Medal|medal_level/i.test(input + conditions + valueText)) {
          assert(/medal_level|explicit current level|medal_level_\d/i.test(conditions + valueText), 'manon: Medal-scaled damage missing explicit Level state');
        }
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'first_medal' && op.stage === 'S1'), 'manon: S1 first-Medal opportunity missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'medal_behavior' && op.stage === 'S2'), 'manon: S2 Medal-behavior opportunity missing');
  }
  if (c.slug === 'alex') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === '-', 'alex: 2MK must remain non-cancelable');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'alex: inherited 2MK DRC route leaked');
    assert(/Earned Prowler entry.*choice-denial/i.test(role?.signature_mechanic?.name ?? ''), 'alex: earned-Prowler signature owner missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);
        if (stage === 'S0' && /Prowler/i.test(input)) {
          assert(/Heavy Lariat/i.test(input), 'alex: full Prowler branch leaked into S0');
          assert(/earned_prowler_entry/i.test(conditions), 'alex: S0 Prowler route missing earned-entry condition');
        }
        if (/Air Stampede|Sweep Combination|Hyper Takedown/i.test(input)) {
          assert(stage === 'S2' || stage === 'S3' || stage === 'S4', 'alex: full Prowler tree must remain S2+');
          assert(/earned_prowler_entry/i.test(conditions), 'alex: Prowler branch missing earned-entry condition');
        }
        if (/Power Bomb\s*$/i.test(input) || /Power Bomb read/i.test(input)) {
          assert(stage !== 'S0', 'alex: Power Bomb read leaked into S0');
          assert(/opponent_respect|point_blank_read|punish_counter/i.test(conditions), 'alex: Power Bomb choice lost respect/read truth');
        }
        const usesPlus42 = /\+42/.test(JSON.stringify(row?.value ?? {})) || /\+42/.test(input);
        if (usesPlus42) assert(/forward_input_od_power_drop/i.test(conditions), 'alex: +42 lost forward-input OD Power Drop exact state');
        const usesCross8 = /Flying Cross Chop/i.test(input) && /\+8/.test(rowText);
        if (usesCross8) assert(/corner/i.test(conditions) && /cross_chop_exact_route/i.test(conditions), 'alex: Cross Chop +8 lost corner/exact-route truth');
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'prowler_entry' && op.stage === 'S0'), 'alex: S0 earned Prowler entry missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'prowler_tree' && op.stage === 'S2'), 'alex: S2 full Prowler tree missing');
  }
  if (c.slug === 'chunli') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === 'C', 'chunli: 2MK must remain cancelable');
    assert(/Temporary Serenity Stream routing.*charge bypass/i.test(role?.signature_mechanic?.name ?? ''), 'chunli: temporary-stance charge-bypass signature owner missing');
    const roleText = JSON.stringify(role);
    assert(/stance Lotus Fist[\s\S]{0,160}Block \+1|Lotus Fist.*Block \+1/i.test(roleText), 'chunli: current stance Lotus Fist +1 truth missing');
    assert(/Water Lotus Fist[\s\S]{0,120}-3/i.test(roleText) || /3HP Water Lotus Fist -3/i.test(roleText), 'chunli: 3HP Water Lotus Fist -3 boundary missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);

        if (stage === 'S0' && /Serenity Stream/i.test(input)) {
          const allowedS0Stance = /Forward Strike.*M Spinning Bird Kick/i.test(input) || /Up exit/i.test(input);
          assert(allowedS0Stance, 'chunli: full Serenity Stream branch tree leaked into S0');
        }
        if (/Lotus Fist|Orchid Palm|Snake Strike|Senpu Kick|Tenku Kick/i.test(input) && /Serenity Stream|stance/i.test(input + ' ' + String(op.title ?? ''))) {
          if (!/Forward Strike/i.test(input)) assert(stage === 'S2' || stage === 'S3' || stage === 'S4', 'chunli: full stance branch must remain S2+');
        }
        if (/Lotus Fist/i.test(input)) {
          assert(/earned_stance_entry/i.test(conditions), 'chunli: stance Lotus Fist row missing earned stance entry');
        }
        const sbkRoute = /Spinning Bird Kick/i.test(input);
        if (sbkRoute && !/Spinning Bird Kick hit/i.test(input)) {
          assert(/confirmed_hit|earned_stance_entry|m_sbk_grounded_end_state|grounded_sbk_end_state/i.test(conditions), 'chunli: SBK route lost hit-confirm/earned-entry/end-state truth');
        }
        const uses46 = /\+46/.test(rowText);
        if (uses46) assert(/exact_safe46_state/i.test(conditions), 'chunli: +46 safe jump lost exact-state truth');
        const uses45 = /\+45/.test(rowText);
        if (uses45) assert(/exact_safe45_state/i.test(conditions) && /reversal_interaction/i.test(conditions), 'chunli: +45 safe jump lost exact-state/reversal truth');
        const uses37 = /\+37/.test(rowText) && /Tensho/i.test(input + ' ' + String(op.title ?? ''));
        if (uses37) assert(/h_tensho_grounded_hit/i.test(conditions), 'chunli: H Tensho +37 lost grounded-hit truth');
        const uses35 = /\+35/.test(rowText) && /Tensho/i.test(input + ' ' + String(op.title ?? ''));
        if (uses35) assert(/corner/i.test(conditions) && /h_tensho_airborne_hit/i.test(conditions), 'chunli: H Tensho +35 lost corner/airborne truth');
        if (/Water Lotus Fist/i.test(input) && /\+1/.test(rowText)) {
          assert(false, 'chunli: stance Lotus +1 leaked onto 3HP Water Lotus Fist');
        }
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'stance_route' && op.stage === 'S0'), 'chunli: S0 single stance-route opportunity missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'stance_tree' && op.stage === 'S2'), 'chunli: S2 full stance tree missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'safejump' && op.stage === 'S3'), 'chunli: S3 exact safe-jump opportunity missing');
  }
  if (c.slug === 'aki') {
    const row2mk = role?.normal_frame_table?.rows?.find((r) => r?.input === '2MK');
    assert(row2mk?.cancel === 'SA', 'aki: 2MK must remain SA-only cancel');
    assert(!/2MK\s*(?:>|xx|→)\s*(?:DRC|CDR)/i.test(practicalText), 'aki: inherited 2MK DRC route leaked');
    assert(/Poison application.*\+44 Oki.*poisoned-state conversion.*corner puddle/i.test(role?.signature_mechanic?.name ?? ''), 'aki: poison-state conversion signature owner missing');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);

        if (stage === 'S0') {
          assert(!/poison burst/i.test(input), 'aki: poison-burst optimization leaked into S0');
          assert(!/Orchid Spring|OD Nightshade Chaser|Qiong Qi/i.test(input), 'aki: puddle/Year4 advanced state leaked into S0');
        }
        if (/poison burst/i.test(input)) {
          assert(/opponent_poisoned/i.test(conditions), 'aki: poison-burst route missing opponent_poisoned');
          assert(stage === 'S1' || stage === 'S2' || stage === 'S3' || stage === 'S4', 'aki: poison-burst route appears before S1');
        }
        if (/\+69|\+53|\+71/.test(rowText)) {
          assert(/opponent_poisoned/i.test(conditions), 'aki: poisoned Lash value lost poisoned-state truth');
        }
        if (/Orchid Spring/i.test(input) && /\+38/.test(rowText)) {
          assert(/corner/i.test(conditions) && /orchid_spring_puddle_setup/i.test(conditions), 'aki: puddle +38 lost corner/exact-route truth');
        }
        if (/Nightshade Chaser blocked normally/i.test(input)) {
          assert(/not_drive_parry/i.test(conditions), 'aki: OD Chaser block-poison lost Drive Parry exception');
        }
        if (/Drive Parried/i.test(input)) {
          assert(/drive_parry/i.test(conditions), 'aki: Drive Parry exception row missing drive_parry condition');
        }
        if (/6HP active meaty/i.test(input)) {
          assert(/exact_plus18_setup/i.test(conditions) && /active_frame_timing/i.test(conditions), 'aki: +18 6HP active meaty lost exact-state truth');
        }
        if (/OD Cruel Fate hit/i.test(input) && /\+42/.test(rowText)) {
          assert(/od_cruel_fate_hit_state/i.test(conditions), 'aki: OD Cruel Fate +42 lost hit-state truth');
        }
        if (/OD Cruel Fate block/i.test(input)) {
          assert(/od_cruel_fate_block_state/i.test(conditions), 'aki: OD Cruel Fate block row lost block-state truth');
        }
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'oki44' && op.stage === 'S0'), 'aki: S0 +44 Oki owner missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'first_burst' && op.stage === 'S1'), 'aki: S1 first poison-burst owner missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'puddle' && op.stage === 'S2'), 'aki: S2 poison-puddle owner missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'exact_setplay' && op.stage === 'S3'), 'aki: S3 exact-setplay owner missing');
  }
  if (c.slug === 'ed') {
    const row5hk = role?.normal_frame_table?.rows?.find((r) => r?.input === '5HK');
    assert(row5hk?.block === '+4', 'ed: 5HK must remain Block +4');
    assert(/Long-range contact.*Psycho Blitz knockdown.*Rush re-entry/i.test(role?.signature_mechanic?.name ?? ''), 'ed: range-to-reentry signature owner missing');
    assert(!(practical.opportunities ?? []).some((op) => (op.rows ?? []).some((row) => /back throw[^\n]{0,40}\+24/i.test(String(row.input ?? '')))), 'ed: old back-throw +24 actionable row leaked');
    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);

        if (stage === 'S0') {
          assert(!/charged .*Flicker|Psycho Knuckle|Kill Switch|Psycho Spark|Psycho Cannon|SA2/i.test(input), 'ed: advanced charged/carry/projectile/super layer leaked into S0');
        }
        if (/5MK/i.test(input) && /L Psycho Flicker/i.test(input) && String(row.result ?? '') === 'HIT') {
          assert(/confirmed_hit/i.test(conditions), 'ed: 5MK > L Flicker lost confirmed-hit truth');
        }
        if (/charged L\/M Psycho Flicker|charged Flicker/i.test(input)) {
          assert(stage === 'S1' || stage === 'S2' || stage === 'S3' || stage === 'S4', 'ed: charged Flicker appears before S1');
          assert(/charged_flicker/i.test(conditions) && /spacing_check/i.test(conditions), 'ed: charged Flicker +4 lost spacing truth');
        }
        const hBlitz42 = /H Psycho Blitz/i.test(input) && /\+42/.test(rowText);
        if (hBlitz42) {
          assert(/hitman_h_blitz_exact_state/i.test(conditions), 'ed: H Blitz +42 safe jump lost exact Hitman state');
        }
        const hBlitz40 = /ordinary H Psycho Blitz|H Psycho Blitz hit \+40/i.test(input);
        if (hBlitz40) {
          assert(/h_blitz_ordinary_end_state/i.test(conditions), 'ed: ordinary H Blitz +40 lost ordinary-state owner');
        }
        if (/back throw hit \+17/i.test(input)) {
          assert(/\+17/.test(rowText), 'ed: current back throw +17 row corrupted');
        }
        if (/Psycho Spark/i.test(input) && /Block \+5|block.*\+5/i.test(rowText)) {
          assert(/corner/i.test(conditions) && /exact_plus38_state/i.test(conditions) && /active_frame_timing/i.test(conditions), 'ed: Spark +5 meaty lost corner +38 exact setup');
        }
        if (/Psycho Knuckle/i.test(input)) {
          assert(stage === 'S3' || stage === 'S4', 'ed: Psycho Knuckle must remain S3+');
          assert(/psycho_knuckle_lv1|psycho_knuckle_lv2/i.test(conditions), 'ed: Psycho Knuckle lost charge-level condition');
        }
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'reentry' && op.stage === 'S0'), 'ed: S0 Blitz Rush re-entry owner missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'charged_flicker' && op.stage === 'S1'), 'ed: S1 charged-Flicker spacing owner missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'kill_switch' && op.stage === 'S2'), 'ed: S2 Kill Switch owner missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'knuckle' && op.stage === 'S3'), 'ed: S3 Psycho Knuckle owner missing');
  }
  if (c.slug === 'jp') {
    const row5hk = role?.normal_frame_table?.rows?.find((r) => r?.input === '5HK');
    assert(row5hk?.block === '+2', 'jp: 5HK must remain Block +2');
    assert(/Immediate remote control.*earned Departure investment.*dual-position portal state/i.test(role?.signature_mechanic?.name ?? ''), 'jp: remote-to-portal signature owner missing');

    for (const op of practical.opportunities ?? []) {
      for (const row of op.rows ?? []) {
        const stage = String(row.stage ?? '');
        const input = String(row.input ?? '');
        const conditions = JSON.stringify(row.conditions ?? []);
        const rowText = JSON.stringify(row);

        if (stage === 'S0') {
          assert(!/Departure|Amnesia|OD Torbalan|Lovushka|SA2/i.test(input), 'jp: portal/defense/high-resource layer leaked into S0');
        }

        if (String(row.result ?? '') === 'HIT' && /(?:2LP|5LP|5MK|2MP|5LK)[^\n]*>[^\n]*(?:L|M) Stribog/i.test(input)) {
          assert(/confirmed_hit/i.test(conditions), 'jp: unsafe Stribog route lost confirmed-hit truth');
        }

        if (/grounded M Stribog hit \+42/i.test(input) && /safe_jump|safe jump/i.test(rowText)) {
          assert(/m_stribog_grounded_end_state/i.test(conditions), 'jp: M Stribog +42 safe jump lost grounded exact-state truth');
        }

        if (/L Torbalan/i.test(input) && /\+42/.test(rowText)) {
          assert(/l_torbalan_grounded_spacing_check|grounded.*spacing/i.test(conditions), 'jp: L Torbalan +42 lost grounded/spacing truth');
        }

        const placesDeparture = /-> Departure(?:\s|$)/i.test(input) && !/skip Departure/i.test(input);
        if (placesDeparture) {
          assert(stage === 'S1' || stage === 'S2' || stage === 'S3' || stage === 'S4', 'jp: Departure appears before S1');
          assert(/departure_state/i.test(conditions), 'jp: Departure route missing earned portal-state owner');
        }

        if (/Departure active|Departure: Shadow|Departure: Window|portal-enabled/i.test(input)) {
          assert(stage === 'S2' || stage === 'S3' || stage === 'S4', 'jp: full portal tree must remain S2+');
          assert(/departure_state/i.test(conditions) && /portal_active/i.test(conditions), 'jp: portal branch missing active Departure state');
        }

        if (/\+15/.test(rowText) && /Departure/i.test(input)) {
          assert(/airborne_5hp_hit/i.test(conditions) && /departure_state/i.test(conditions), 'jp: Departure +15 lost airborne 5HP owner');
        }

        if (/\+4\.\.\+6|\+4\.\.6|\+4.*\+6/.test(rowText) && /OD Departure/i.test(input)) {
          assert(/airborne_5hp_hit/i.test(conditions) && /triglav_into_od_departure/i.test(conditions) && /drive_resource/i.test(conditions), 'jp: OD Departure +4..+6 lost exact route/Drive truth');
        }

        if (/Amnesia/i.test(input)) {
          assert(stage === 'S2' || stage === 'S3' || stage === 'S4', 'jp: Amnesia aftermath must remain S2+');
          assert(/current_year4_amnesia_aftermath/i.test(conditions), 'jp: Amnesia route lost current Year4 aftermath');
        }

        if (/corner forward throw/i.test(input) && /\+23/.test(rowText)) {
          assert(/corner/i.test(conditions) && /forward_throw_end_state/i.test(conditions), 'jp: corner throw +23 lost corner owner');
        }

        if (/OD Torbalan/i.test(input)) {
          assert(stage === 'S3' || stage === 'S4', 'jp: OD Torbalan +25 must remain S3+');
          assert(/od_torbalan_state/i.test(conditions) && /drive_resource/i.test(conditions), 'jp: OD Torbalan lost resource-state truth');
        }

        if (/Lovushka|SA2/i.test(input)) {
          assert(stage === 'S4', 'jp: Lovushka must remain S4');
        }
      }
    }

    assert((practical.opportunities ?? []).some((op) => op.id === 'triglav' && op.stage === 'S0'), 'jp: S0 Triglav remote-control owner missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'first_portal' && op.stage === 'S1'), 'jp: S1 first earned Departure owner missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'portal_tree' && op.stage === 'S2'), 'jp: S2 portal tree missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'od_torbalan' && op.stage === 'S3'), 'jp: S3 OD Torbalan owner missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'super' && op.stage === 'S4'), 'jp: S4 Lovushka owner missing');
  }
}

const roster = yaml('ROSTER.yaml');
const count = Object.values(roster.groups).flat().length;
assert(count === 31, `roster must remain 31, got ${count}`);
console.log('CONTENT INTEGRATION GATE PASS | 31 roster | 5 current characters + 23 content candidates | Learn + Role + Practical + Reference + resolved source registries');
