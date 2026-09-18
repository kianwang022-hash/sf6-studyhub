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
  { slug:'lily', group:'base', normals:18, learn:['S0｜最小可玩','Windclad','Mexican Typhoon'], ref:['Normal vs Windclad Spire','Mexican Typhoon','+52'], practical:['Mexican Typhoon','Windclad H Condor Spire'], candidate:true }
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
        if (stage === 'S0') {
          assert(!/Mexican Typhoon\s*$/i.test(input), 'lily: Mexican Typhoon choice leaked into S0');
        }
        const enhancedMove = /Windclad\s+(?:[LMHOD]+\s+)?(?:Condor Spire|Tomahawk Buster|Condor Dive)/i.test(input) || /Windclad stock active/i.test(input);
        if (enhancedMove || stockSpend > 0) {
          assert(/windclad_stock/i.test(conditions), 'lily: Windclad move/spend row missing windclad_stock');
        }
        if (/Mexican Typhoon\s*$/i.test(input)) {
          assert(stage !== 'S0', 'lily: Mexican Typhoon must start after S0');
          assert(/opponent_respect|punish_counter|point_blank/i.test(conditions), 'lily: Mexican Typhoon choice lost respect/punish truth');
        }
        const usesPlus52 = /\+52/.test(JSON.stringify(value)) || /\+52/.test(input);
        if (usesPlus52 && /Spire/i.test(input + ' ' + String(op.title ?? ''))) {
          assert(/windclad_stock/i.test(conditions) && /windclad_h_spire_end_state/i.test(conditions), 'lily: +52 safe-jump/Oki row lost Windclad H Spire exact-state truth');
        }
        if (stockGain > 0) {
          assert(/safe_resource_window/i.test(conditions), 'lily: Windclad build row missing safe resource window');
        }
        if (stockGain > 1) {
          assert(stage === 'S3' || stage === 'S4', 'lily: multi-stock Windclad build must remain S3+');
        }
      }
    }
    assert((practical.opportunities ?? []).some((op) => op.id === 'resource' && op.stage === 'S0'), 'lily: S0 one-stock investment opportunity missing');
    assert((practical.opportunities ?? []).some((op) => op.id === 'state_choice' && op.stage === 'S2'), 'lily: S2 hold-vs-spend opportunity missing');
  }
}

const roster = yaml('ROSTER.yaml');
const count = Object.values(roster.groups).flat().length;
assert(count === 31, `roster must remain 31, got ${count}`);
console.log('CONTENT INTEGRATION GATE PASS | 31 roster | 5 current characters + 17 content candidates | Learn + Role + Practical + Reference + resolved source registries');
