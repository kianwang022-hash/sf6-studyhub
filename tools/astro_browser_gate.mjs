import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const BASE = process.env.SF6_BASE_URL || 'http://127.0.0.1:4176/sf6-studyhub';
const SHOTS = process.env.SF6_SCREENSHOT_DIR || 'qa-screenshots';
const assert = (ok, msg) => { if (!ok) throw new Error(msg); };
await mkdir(SHOTS, { recursive: true });

const chars = [
  { slug:'ryu', normals:18, learn:'623HP', ref:'Version Boundary', practical:['5MP','623HP'] },
  { slug:'jamie', normals:18, learn:'Drink Level', ref:'Bakkai', practical:['236K','63214'] },
  { slug:'mai', normals:18, learn:'dash +9', ref:'OD 214P Ryuuenbu', practical:['j.214P','OD 236K','SA2'] },
  { slug:'zangief', normals:23, learn:'尊重', ref:'SPD 后重置', practical:['360P','SA3'] },
  { slug:'cammy', normals:18, learn:'M Spiral Arrow', ref:'Cannon Strike', practical:['SA1','SA3'] },
  { slug:'ken', normals:18, learn:'Quick Dash Tatsu', ref:'Forward Step Kick', practical:['KK > Tatsu','SA3'] },
  { slug:'akuma', normals:18, learn:'同一个 opening 可以买不同的 Oki 时间预算', ref:'Shun Goku Satsu', practical:['L Tatsu > 2HK','Demon Raid','charged Gou Hadoken'] },
  { slug:'luke', normals:18, learn:'不靠 Perfect，也能在真人里打出完整 Luke', ref:'Perfect Flash Knuckle', practical:['2MP > 2LP > L Flash Knuckle','OD Flash Knuckle > DDT','+64'] },
  { slug:'terry', normals:18, learn:'Burning Knuckle买位置', ref:'Round Wave', practical:['2LK > 2LP > M Burning Knuckle','2LK > 2LP > H Rising Tackle','OD Quick Burn'] },
  { slug:'sagat', normals:18, learn:'Tiger Shot → 对手反应', ref:'H Tiger Knee airborne +42', practical:['236MP -> watch jump / walk / crouch / parry','5MP > 2LP > M Tiger Uppercut','H Tiger Knee Crush airborne hit -> +42'] },
  { slug:'juri', normals:18, learn:'真正的角色判断是下一次 opening 这颗 stock 现在花不花', ref:'Resource Truth', practical:['5MP > 2MP > M Fuhajin','5MP > 2MP > Go Ohsatsu','Feng Shui Engine'] },
  { slug:'elena', normals:18, learn:'Healing只在最后作为伤害与恢复之间的资源选择', ref:'Lynx follow-up truth', practical:['5MP > MP > M Rhino Horn','earned Lynx Song setup','SA2'] },
  { slug:'yasmine', normals:18, learn:'取得 → 消费 → 再取得', ref:'Bayani system truth', practical:['M Daloy ng Tubig > Alon','Boosted Alon','SA2'] },
  { slug:'rashid', normals:18, learn:'不靠风也能打完整 Rashid', ref:'Air Current truth', practical:['M Spinning Mixer','L Eagle Spike','Air Current'] },
  { slug:'kimberly', normals:18, learn:'普通contact → corner carry → simple Oki', ref:'Anti-template truth', practical:['Sprint > Shadow Slide','Shuriken Bomb','SA3'] },
  { slug:'guile', normals:18, learn:'down-back 是后台状态', ref:'Charge truth', practical:['[4]6P -> immediately keep anti-air attention','2LK > 2LP > H Somersault Kick','OD Sonic Blade block'] },
  { slug:'deejay', normals:18, learn:'L Air Slasher = fake', ref:'Charge / Rhythm Truth', practical:['[4]6LP L Air Slasher fake','H Jackknife Maximum grounded hit -> +42 -> immediate forward jump attack','Jus Cool > MK Waning Moon'] },
  { slug:'ehonda', normals:18, learn:'S0不要求Oicho', ref:'Charge / State Truth', practical:['H Sumo Smash grounded hit -> +23 -> forward dash','Sumo Smash +23 -> dash +4 -> H Oicho Throw','Sumo Spirit active -> L Hundred Hand Slap block'] },
  { slug:'blanka', normals:18, learn:'赢到角落以后，再用 Blanka-chan Bomb', ref:'Bomb Setplay', practical:['5LK > 2LP > Electric Thunder','M Vertical Rolling Attack exact hit -> +42 -> immediate forward jump HK','corner 5HP > Coward Crouch > Wild Lift > Blanka-chan Bomb'] },
  { slug:'vega', normals:18, learn:'不要自动继续爆 Mine', ref:'Psycho Mine Truth', practical:['2LP or 2LK > 5LK > L Backfist Combo','Psycho Mine active -> L Backfist Combo hit','Psycho Mine active + back charge -> M Psycho Crusher Attack block'] },
  { slug:'marisa', normals:18, learn:'只有这时，5F Enfold command grab 才进入主循环', ref:'Anti-template Truth', practical:['2LK or 2LP > 2LP > L Dimachaerus > 6P','Phalanx ender -> +42 -> immediate forward jump HP/HK','fully charged 5HP block'] },
  { slug:'lily', normals:18, learn:'先投资 Windclad，把 Condor Spire 变成正帧进场', ref:'Normal vs Windclad Spire', practical:['safe window -> hold Condor Wind for 1 Windclad stock','Windclad H Condor Spire plus entry -> Mexican Typhoon','safe long window -> hold Condor Wind for 2 Windclad stocks'] },
  { slug:'manon', normals:18, learn:'先用普通 Rond-point / Renversé / dash Oki 赢回合', ref:'Medal Strategy', practical:['2LP > 2LP > H Rond-point','opponent respect / point-blank read -> H Manège Doré','Medal Level 4-5 + opponent respect -> H Manège Doré'] },
  { slug:'alex', normals:18, learn:'先用稳定 strike 和 +2 压力买到 respect', ref:'Prowler Truth', practical:['2MP > M Flash Axe hit > Prowler > Heavy Lariat','earned Prowler entry -> Air Stampede','4MK block + opponent respects -> H Power Bomb'] },
  { slug:'chunli', normals:18, learn:'临时进入 Serenity Stream', ref:'Lotus Naming Boundary', practical:['2HP hit > Serenity Stream > Forward Strike > M Spinning Bird Kick','earned Serenity Stream entry -> Lotus Fist','H Tensho Kicks grounded hit +37 -> forward dash'] },
  { slug:'aki', normals:18, learn:'毒爆最大伤害', ref:'Poison Burst Routes', practical:['2LK > 2LP > 2LP > H Serpent Lash','opponent poisoned -> M Serpent Lash poison burst','corner opponent poisoned -> M Serpent Lash burst'] },
  { slug:'ed', normals:18, learn:'接触距离和重新进身', ref:'Exact +42 Safe Jump', practical:['2LP > 5LP > M Psycho Blitz','5MP > 5HP > H Psycho Blitz in declared Hitman Combination state -> +42','charged L/M Psycho Flicker blocked'] },
  { slug:'jp', normals:18, learn:'对手离你很远，仍然不能安心', ref:'Departure', practical:['2LP > 5LP > L Stribog','earned Departure active -> Departure: Shadow / portal strike','grounded M Stribog hit +42 -> immediate forward jump HK'] },
  { slug:'ingrid', normals:18, learn:'0-stock Sun Rise', ref:'One-Stock Layer', practical:['safe resource window -> hold L Sun Flare about 47F','stock_level_1 -> confirmed 2HP > Sun Flare Lv2','stock_level_2 -> Sun Flare Lv3 blocked'] },
  { slug:'cviper', normals:18, learn:'High Jump Cancel', ref:'High Jump Cancel Truth', practical:['2MK hit -> High Jump Cancel -> M Thunder Dash -> Tracer Combination','5MP > 2MP > L Thunder Dash > Tracer Combination','5MK hit -> High Jump Cancel -> M Thunder Dash -> Tracer Combination'] },
  { slug:'dhalsim', normals:18, learn:'只靠一直把对手赶回去很难赢', ref:'Identity Route — M Blast -> Teleport', practical:['2LP > CDR > 5LP > 4MP > M Yoga Blast hit +42 -> immediate P Yoga Teleport (Forward)','Aerial Yoga Float > j.HP > 1HP Nirvana Punch > M Yoga Flame','OD Yoga Fire -> Yoga Arch -> Yoga Comet'] }
];

const browser = await chromium.launch({ headless:true });
try {
  const page = await browser.newPage({ viewport:{ width:1600, height:1000 }, deviceScaleFactor:1 });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type()==='error') errors.push(m.text()); });

  await page.goto(`${BASE}/`, { waitUntil:'networkidle' });
  assert(await page.locator('[data-top-tab]').count() === 4, 'v6 top tabs must be exactly 学习/角色/实战/资料');
  assert(await page.locator('#heroCharacterSelect option').count() === 31, 'hero selector must preserve all 31 characters');
  assert((await page.locator('.v6-hero').innerText()).includes('Train smarter.'), 'accepted v6 hero copy missing');
  assert(await page.locator('.hero-keywords span').count() === 6, 'accepted role→tools→neutral→opportunity→oki→practical path missing');
  assert(await page.locator('[data-panel="role"]:visible').count() === 1, 'Role must be default tab');
  const rootHeroLoaded = await page.locator('.hero-character-light').evaluate((img) => img.complete && img.naturalWidth > 0);
  assert(rootHeroLoaded, 'Ryu hero art did not load');
  await page.screenshot({ path:`${SHOTS}/v6-home-ryu-light.png`, fullPage:false });
  assert(await page.locator('.beginner-nav').count() === 1, 'global beginner entry missing from topbar');
  assert(await page.locator('.hero-beginner-hint').count() === 1, 'hero beginner hint missing');

  await page.goto(`${BASE}/beginner/`, { waitUntil:'networkidle' });
  const beginnerText = await page.locator('.beginner-hero').innerText();
  assert(beginnerText.includes('第一次玩 SF6') && beginnerText.includes('先学共同语言'), 'beginner fundamentals hero missing');
  assert(await page.locator('.beginner-lesson').count() === 8, 'beginner fundamentals must expose 8 first-entry lessons');
  assert(await page.locator('.glossary-card').count() >= 20, 'beginner glossary is too small');
  assert((await page.locator('.beginner-map').innerText()).includes('Hit / Block / Whiff'), 'beginner whole-round map missing');
  await page.screenshot({ path:`${SHOTS}/beginner-v1-light.png`, fullPage:false });

  for (const c of chars) {
    await page.goto(`${BASE}/character/${c.slug}/#role`, { waitUntil:'networkidle' });
    assert(await page.locator('#heroCharacterSelect option').count() === 31, `${c.slug}: selector lost roster options`);
    assert(await page.locator('#heroCharacterSelect').inputValue() === c.slug, `${c.slug}: selector current value mismatch`);
    const lightHeroLoaded = await page.locator('.hero-character-light').evaluate((img) => img.complete && img.naturalWidth > 0);
    assert(lightHeroLoaded, `${c.slug}: accepted light hero art missing`);
    const darkHeroLoadedForCharacter = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
    assert(darkHeroLoadedForCharacter, `${c.slug}: accepted dark hero art missing`);

    await page.locator('[data-top-tab="role"]').click();
    assert(await page.locator('#role:visible').count() === 1, `${c.slug}: Role panel missing`);
    assert(await page.locator('.frame-table tbody tr').count() === c.normals, `${c.slug}: normal frame table count mismatch`);
    await page.locator('#role').screenshot({ path:`${SHOTS}/${c.slug}-role-v6-light.png` });
    if (c.slug === 'ken') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('28F') && roleText.includes('Block +1'), 'ken: H Dragonlash 28F/+1 projection truth missing');
      assert(roleText.includes('Quick Dash / Jinrai end-state engine'), 'ken: signature end-state engine missing from Role');
    }
    if (c.slug === 'akuma') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('9000') && roleText.includes('Option density under 9000 health'), 'akuma: 9000-health option-density truth missing');
      assert(roleText.includes('L Tatsu > 2HK') && roleText.includes('+37'), 'akuma: current +37 Tatsu-sweep truth missing');
      assert(!roleText.includes('L Tatsu > 2HK') || !roleText.includes('旧 +42') || roleText.includes('禁止把旧 +42 投到前台'), 'akuma: old +42 wording leaked without correction');
    }
    if (c.slug === 'luke') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Execution investment via Flash Knuckle timing'), 'luke: execution-investment signature missing');
      assert(roleText.includes('Perfect Flash Knuckle不是入门要求'), 'luke: Perfect-not-required constraint missing');
      assert(roleText.includes('+36') && roleText.includes('+64'), 'luke: stable-vs-advanced Oki budget truth missing');
    }
    if (c.slug === 'terry') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Special-role relay'), 'terry: special-role relay signature missing');
      assert(roleText.includes('29F') && roleText.includes('Block +5'), 'terry: Round Wave 29F/+5 truth missing');
      assert(roleText.includes('+30…42') || roleText.includes('+30...42'), 'terry: spacing-dependent Burning Knuckle budget missing');
    }
    if (c.slug === 'sagat') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Projectile-to-contact space conversion'), 'sagat: projectile-to-contact signature missing');
      assert(roleText.includes('2MK不可取消'), 'sagat: non-cancelable 2MK constraint missing');
      assert(roleText.includes('airborne') && roleText.includes('+42'), 'sagat: airborne-only +42 truth missing');
    }
    if (c.slug === 'juri') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Fuhajin Stock') && roleText.includes('S0先生成不消费'), 'juri: stock generation-before-spend truth missing');
      assert(roleText.includes('M Fuhajin') && roleText.includes('Stock +1'), 'juri: M Fuhajin stock-gain truth missing');
    }
    if (c.slug === 'elena') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Earned Lynx Song mix hub + late SA2 Healing choice'), 'elena: earned-Lynx/late-Healing signature missing');
      assert(roleText.includes('2MK') && roleText.includes('non-cancel'), 'elena: non-cancel 2MK truth missing');
    }
    if (c.slug === 'yasmine') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Bayani Mode') && roleText.includes('S0只学取得'), 'yasmine: Bayani acquire-first rule missing');
      assert(roleText.includes('normal Alon vs Boosted') && roleText.includes('-12') && roleText.includes('-1~-3'), 'yasmine: normal-vs-Boosted risk truth missing');
    }
    if (c.slug === 'rashid') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Earned mobility + Air Current re-entry'), 'rashid: earned-mobility signature missing');
      assert(roleText.includes('M Spinning Mixer') && roleText.includes('KD +31'), 'rashid: normal Mixer +31 truth missing');
      assert(roleText.includes('Air Current Boosted') && roleText.includes('KD +42'), 'rashid: boosted Mixer +42 boundary missing');
    }
    if (c.slug === 'kimberly') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Shuriken Bomb Stock') && roleText.includes('S0-S1不要求Bomb'), 'kimberly: Bomb-deferred resource truth missing');
      assert(roleText.includes('2MK') && roleText.includes('non-cancel'), 'kimberly: non-cancel 2MK truth missing');
    }
    if (c.slug === 'guile') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Charge availability management'), 'guile: charge-availability signature missing');
      assert(roleText.includes('2MK不可取消'), 'guile: non-cancelable 2MK truth missing');
      assert(roleText.includes('+42不是通用H Somersault数字'), 'guile: non-universal +42 boundary missing');
    }
    if (c.slug === 'deejay') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Charge + rhythm deception'), 'deejay: charge-rhythm signature missing');
      assert(roleText.includes('L Air Slasher是fake'), 'deejay: fake projectile truth missing');
      assert(roleText.includes('H Jackknife +42必须grounded hit'), 'deejay: grounded-only +42 truth missing');
    }
    if (c.slug === 'ehonda') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Charge-enabled respect -> Oicho conversion'), 'ehonda: respect-to-Oicho signature missing');
      assert(roleText.includes('Sumo Spirit') && roleText.includes('S0-S2不要求Spirit'), 'ehonda: late Spirit resource truth missing');
      assert(roleText.includes('Oicho') && roleText.includes('6F'), 'ehonda: Oicho reward truth missing');
    }
    if (c.slug === 'blanka') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Earned corner object setplay'), 'blanka: earned-object signature missing');
      assert(roleText.includes('Bomb不进S0/S1必修'), 'blanka: Bomb-deferred truth missing');
      assert(roleText.includes('M/H Vertical Rolling') && roleText.includes('KD +42'), 'blanka: exact +42 vertical owner missing');
    }
    if (c.slug === 'vega') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Charge + opponent-side Psycho Mine state'), 'vega: charge+Mine signature missing');
      assert(roleText.includes('Psycho Mine') && roleText.includes('S0只学植Mine'), 'vega: plant-first Mine rule missing');
      assert(roleText.includes('Normal L/M Crusher') && roleText.includes('Block -20'), 'vega: normal Crusher unsafe truth missing');
      assert(roleText.includes('Mine L/M Crusher') && roleText.includes('Block +6'), 'vega: Mine Crusher rewrite truth missing');
    }
    if (c.slug === 'marisa') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Damage-backed respect -> Enfold conversion'), 'marisa: damage-to-Enfold signature missing');
      assert(roleText.includes('Enfold不进S0'), 'marisa: Enfold-deferred truth missing');
      assert(roleText.includes('Phalanx ender') && roleText.includes('+42'), 'marisa: Phalanx +42 owner missing');
    }
    if (c.slug === 'lily') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Windclad investment -> plus entry -> Mexican Typhoon respect loop'), 'lily: Windclad respect-loop signature missing');
      assert(roleText.includes('Normal Spire') && roleText.includes('Block -8'), 'lily: unsafe normal Spire truth missing');
      assert(roleText.includes('Windclad L/M/H Spire') && roleText.includes('Block +1'), 'lily: Windclad plus-entry truth missing');
    }
    if (c.slug === 'manon') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Medal reward escalation -> opponent escape -> strike revaluation'), 'manon: Medal feedback signature missing');
      assert(roleText.includes('S0 only notices Medal growth'), 'manon: S0 Medal bookkeeping boundary missing');
      assert(roleText.includes('throw-after dash不是guaranteed throw'), 'manon: throw-after-dash boundary missing');
    }
    if (c.slug === 'alex') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Earned Prowler entry -> choice-denial high/low/throw layering'), 'alex: earned-Prowler signature missing');
      assert(roleText.includes('2MK不可取消'), 'alex: non-cancelable 2MK truth missing');
      assert(roleText.includes('Power Bomb +15不是guaranteed close Oki'), 'alex: Power Bomb aftermath boundary missing');
    }
    if (c.slug === 'chunli') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Temporary Serenity Stream routing -> charge bypass -> continue-or-exit decision'), 'chunli: stance-routing signature missing');
      assert(roleText.includes('stance Lotus Fist +1') && roleText.includes('3HP Water Lotus Fist -3'), 'chunli: Lotus naming/frame boundary missing');
      assert(roleText.includes('charge-bypass只描述声明的stance follow-up route'), 'chunli: charge-bypass scope missing');
    }
    if (c.slug === 'aki') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Poison application -> +44 Oki -> poisoned-state conversion -> corner puddle'), 'aki: poison-state signature missing');
      assert(roleText.includes('Poisoned Target State'), 'aki: poison resource/state owner missing');
      assert(roleText.includes('ordinary H Lash +44') && roleText.includes('poisoned +53'), 'aki: ordinary-vs-poisoned Lash state split missing');
    }
    if (c.slug === 'ed') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Long-range contact -> Psycho Blitz knockdown -> Rush re-entry -> close pressure'), 'ed: Blitz re-entry signature missing');
      assert(roleText.includes('uncharged L/M Flicker Block -6'), 'ed: uncharged Flicker unsafe truth missing');
      assert(roleText.includes('charged Flicker +4必须保留spacing条件'), 'ed: charged Flicker spacing truth missing');
    }
    if (c.slug === 'jp') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Immediate remote control -> earned Departure investment -> dual-position portal state'), 'jp: earned-Departure signature missing');
      assert(roleText.includes('M Stribog grounded') && roleText.includes('+42'), 'jp: grounded M Stribog +42 owner missing');
      assert(roleText.includes('Departure所有分支必须来自earned active portal state'), 'jp: earned portal-state boundary missing');
    }
    if (c.slug === 'ingrid') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Zero-stock base loop -> safe stock investment -> future Sun Flare plus-turn amplification'), 'ingrid: stock-investment signature missing');
      assert(roleText.includes('Sun Shot Stock'), 'ingrid: stock resource owner missing');
      assert(roleText.includes('Sun Flare Lv1') && roleText.includes('Block -4') && roleText.includes('Sun Flare Lv2') && roleText.includes('Block +4'), 'ingrid: zero-vs-one-stock frame split missing');
    }
    if (c.slug === 'cviper') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Drive-owned High Jump Cancel -> pre-jump special rerouting'), 'cviper: HJC signature missing');
      assert(roleText.includes('HJC在SA1 install外必须带Drive owner'), 'cviper: HJC Drive ownership missing');
      assert(roleText.includes('2HK不可HJC'), 'cviper: HJC eligibility boundary missing');
    }
    if (c.slug === 'dhalsim') {
      const roleText = await page.locator('#role').innerText();
      assert(roleText.includes('Range geometry -> earned knockdown -> covered Teleport proximity conversion'), 'dhalsim: geometry-to-Teleport signature missing');
      assert(roleText.includes('raw Teleport不得继承+3'), 'dhalsim: raw Teleport +3 boundary missing');
      assert(roleText.includes('M Yoga Blast') && roleText.includes('KD +42'), 'dhalsim: Blast +42 owner missing');
    }

    await page.locator('[data-top-tab="learn"]').click();
    const learn = await page.locator('[data-panel="learn"]').innerText();
    assert(learn.includes(c.learn), `${c.slug}: latest learning content not connected`);

    await page.locator('[data-top-tab="practical"]').click();
    assert(await page.locator('#practical:visible').count() === 1, `${c.slug}: Practical Hub missing`);
    assert(await page.locator('[data-stage]').count() === 6, `${c.slug}: S0-S4 + ALL missing`);
    assert(await page.locator('[data-op]').count() >= 5, `${c.slug}: Opportunity Hub too small`);
    assert(await page.locator('[data-row-stage="S4"]:visible').count() === 0, `${c.slug}: future S4 should be folded at S0`);
    assert(await page.locator('.term-inline').count() > 0, `${c.slug}: Practical terminology affordances missing`);
    if (c.slug === 'ryu') {
      assert(await page.locator('.term-inline[data-term-key="kd"]').count() > 0, 'ryu: KD should be contextual glossary text');
      assert(await page.locator('.term-inline[data-term-key="shimmy"]').count() > 0, 'ryu: Shimmy should be contextual glossary text');
      await page.locator('#terminology-toggle').click();
      assert(await page.locator('#terminology-panel:visible').count() === 1, 'Practical terminology panel did not open');
      assert(await page.locator('.terminology-card').count() >= 15, 'Practical terminology panel is too small');
      await page.locator('.term-inline[data-term-key="kd"]').first().click();
      assert(await page.locator('#term-popover:visible').count() === 1, 'contextual term popover did not open');
      const termText = await page.locator('#term-popover').innerText();
      assert(termText.includes('Knockdown') && termText.includes('击倒'), 'KD explanation is not learner-readable');
      await page.locator('[data-term-close]').click();

      if (await page.evaluate(() => document.documentElement.dataset.theme) !== 'dark') {
        await page.locator('#theme-toggle').click();
      }
      const readability = await page.evaluate(() => {
        const route = document.querySelector('.pr-section .route');
        const why = document.querySelector('.pr-section .why');
        const td = document.querySelector('.pr-section .pr-table td');
        const routeStyle = route ? getComputedStyle(route) : null;
        const whyStyle = why ? getComputedStyle(why) : null;
        const tdStyle = td ? getComputedStyle(td) : null;
        return {
          routeSize: routeStyle ? parseFloat(routeStyle.fontSize) : 0,
          whySize: whyStyle ? parseFloat(whyStyle.fontSize) : 0,
          fontFamily: routeStyle?.fontFamily || '',
          whyColor: whyStyle?.color || '',
          rowBorder: tdStyle?.borderBottomColor || ''
        };
      });
      assert(readability.routeSize >= 14, `Practical route type too small: ${readability.routeSize}px`);
      assert(readability.whySize >= 12, `Practical secondary type too small: ${readability.whySize}px`);
      assert(readability.fontFamily.includes('PingFang SC'), `Practical font stack must include PingFang SC: ${readability.fontFamily}`);
      assert(readability.whyColor === 'rgb(188, 198, 191)', `Practical dark secondary contrast token missing: ${readability.whyColor}`);
      assert(readability.rowBorder === 'rgb(58, 68, 61)', `Practical dark row separator token missing: ${readability.rowBorder}`);
      await page.screenshot({ path:`${SHOTS}/ryu-practical-readability-dark.png`, fullPage:false });
      await page.locator('#theme-toggle').click();
    }
    if (c.slug === 'ken') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('j.HP > 5MP > 5HP > KK > Tatsu'), 'ken: S0 carry identity route missing');
      assert(!s0Text.includes('H Dragonlash推进'), 'ken: S3 signature branch leaked into S0');
    }
    if (c.slug === 'akuma') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2LP > 2LP > 5LK > H Gou Shoryuken'), 'akuma: S0 stable shoto route missing');
      assert(s0Text.includes('2LP > 2LP > 5LK > L Tatsu > 2HK'), 'akuma: S0 +37 Oki-choice route missing');
      assert(!s0Text.includes('Demon Raid > Demon Low Slash'), 'akuma: S3 Demon Raid branch leaked into S0');
      assert(!s0Text.includes('charged Gou Hadoken Lv2'), 'akuma: S3 charged-fireball branch leaked into S0');
    }
    if (c.slug === 'luke') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2MP > 2LP > L Flash Knuckle'), 'luke: S0 stable +36 route missing');
      assert(s0Text.includes('2LK > 2LP > L Flash Knuckle'), 'luke: S0 low +36 route missing');
      assert(!s0Text.includes('L Flash Knuckle (Perfect)'), 'luke: Perfect route leaked into S0');
      assert(!s0Text.includes('H Flash Knuckle (Perfect)'), 'luke: +64 Perfect route leaked into S0');
    }
    if (c.slug === 'terry') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2LK > 2LP > M Burning Knuckle'), 'terry: S0 carry/Oki route missing');
      assert(s0Text.includes('2LK > 2LP > H Rising Tackle'), 'terry: S0 damage route missing');
      assert(!s0Text.includes('earned setup -> Round Wave block (+5)'), 'terry: S2 Round Wave pressure leaked into S0');
      assert(!s0Text.includes('OD Quick Burn hit -> +33'), 'terry: S3 OD Quick Burn shimmy leaked into S0');
    }
    if (c.slug === 'sagat') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('236MP -> watch jump / walk / crouch / parry'), 'sagat: S0 M Tiger Shot movement-reading owner missing');
      assert(s0Text.includes('5MP > 2LP > M Tiger Uppercut'), 'sagat: S0 long-normal conversion missing');
      assert(!s0Text.includes('H Tiger Knee Crush airborne hit -> +42'), 'sagat: S3 +42 safe jump leaked into S0');
      assert(!s0Text.includes('2MP > CDR'), 'sagat: S2 cancel-drive layer leaked into S0');
    }
    if (c.slug === 'juri') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('5MP > 2MP > M Fuhajin'), 'juri: S0 stock-generating stable route missing');
      assert(!s0Text.includes('5MP > 2MP > Go Ohsatsu'), 'juri: stock-spend layer leaked into S0');
      assert(!s0Text.includes('Feng Shui Engine'), 'juri: SA2 system leaked into S0');
    }
    if (c.slug === 'elena') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('5MP > MP > M Rhino Horn'), 'elena: S0 stable Rhino route missing');
      assert(!s0Text.includes('earned Lynx Song setup'), 'elena: Lynx mix leaked into S0');
      assert(!s0Text.includes('confirmed route > SA2 Healing variation'), 'elena: SA2 Healing route leaked into S0');
    }
    if (c.slug === 'yasmine') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('M Daloy ng Tubig > Alon'), 'yasmine: S0 Bayani-acquire route missing');
      assert(!s0Text.includes('Bayani active -> 2LP > 5LP/LP > L Daloy ng Tubig > Boosted Alon'), 'yasmine: S1 Bayani-spend route leaked into S0');
    }
    if (c.slug === 'rashid') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('M Spinning Mixer') && s0Text.includes('L Eagle Spike'), 'rashid: S0 Mixer/Eagle skeleton missing');
      assert(!s0Text.includes('5HK (PC) > 6MP > OD Arabian Cyclone > Air Current Boosted M Spinning Mixer'), 'rashid: S3 Air Current route leaked into S0');
      assert(!s0Text.includes('SA2 Ysaar active -> 6HP overhead / 2MK low / throw'), 'rashid: S4 Ysaar route leaked into S0');
    }
    if (c.slug === 'kimberly') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2MP > 5MP > 5HP > Sprint > Shadow Slide'), 'kimberly: S0 carry identity route missing');
      assert(!s0Text.includes('corner DI wall splat > 2HP > M Vagabond Edge > 5MP whiff > Shuriken Bomb Spread'), 'kimberly: S2 Bomb route leaked into S0');
    }
    if (c.slug === 'guile') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('hold down-back during crouch-block / 2LP / 2MP'), 'guile: S0 charge-availability owner missing');
      assert(s0Text.includes('[4]6P -> immediately keep anti-air attention'), 'guile: S0 Boom reaction loop missing');
      assert(!s0Text.includes('OD Sonic Blade block'), 'guile: later Blade pressure leaked into S0');
    }
    if (c.slug === 'deejay') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('[4]6LP L Air Slasher fake') && s0Text.includes('[4]6MP/HP Air Slasher'), 'deejay: S0 fake/real projectile split missing');
      assert(!s0Text.includes('Jus Cool > MK Waning Moon'), 'deejay: Jus Cool branch leaked into S0');
      assert(!s0Text.includes('SA2 Sunrise Festival activation / rhythm sequence'), 'deejay: SA2 system leaked into S0');
    }
    if (c.slug === 'ehonda') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('H Sumo Smash grounded hit -> +23 -> forward dash'), 'ehonda: S0 Smash Oki owner missing');
      assert(!s0Text.includes('Sumo Smash +23 -> dash +4 -> H Oicho Throw'), 'ehonda: S1 Oicho route leaked into S0');
      assert(!s0Text.includes('Sumo Spirit active -> L Hundred Hand Slap block'), 'ehonda: S3 Spirit layer leaked into S0');
    }
    if (c.slug === 'blanka') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('5LK > 2LP > Electric Thunder'), 'blanka: S0 Thunder route missing');
      assert(!s0Text.includes('corner 5HP > Coward Crouch > Wild Lift > Blanka-chan Bomb'), 'blanka: Bomb setplay leaked into S0');
      assert(!s0Text.includes('SA2 Lightning Beast activation'), 'blanka: Lightning Beast leaked into S0');
    }
    if (c.slug === 'vega') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2LP or 2LK > 5LK > L Backfist Combo'), 'vega: S0 Mine-plant route missing');
      assert(!s0Text.includes('Psycho Mine active -> L Backfist Combo hit'), 'vega: S1 Mine cash-in leaked into S0');
      assert(!s0Text.includes('Psycho Mine active + back charge -> M Psycho Crusher Attack block'), 'vega: Mine Crusher pressure leaked into S0');
    }
    if (c.slug === 'marisa') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2LK or 2LP > 2LP > L Dimachaerus > 6P'), 'marisa: S0 stable +31 route missing');
      assert(!s0Text.includes('L Dimachaerus +31 -> 5LP whiff -> immediate Enfold'), 'marisa: S1 Enfold route leaked into S0');
      assert(!s0Text.includes('fully charged 5HP block'), 'marisa: charged layer leaked into S0');
    }
    if (c.slug === 'lily') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('safe window -> hold Condor Wind for 1 Windclad stock'), 'lily: S0 one-stock investment missing');
      assert(s0Text.includes('Windclad stock active -> 2LK > 2LP > 2LP > Windclad M Condor Spire'), 'lily: S0 plus-entry route missing');
      assert(!s0Text.includes('Windclad H Condor Spire plus entry -> Mexican Typhoon'), 'lily: S1 Typhoon route leaked into S0');
      assert(!s0Text.includes('safe long window -> hold Condor Wind for 2 Windclad stocks'), 'lily: multi-stock build leaked into S0');
    }
    if (c.slug === 'manon') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2LP > 2LP > H Rond-point'), 'manon: S0 ordinary route missing');
      assert(!s0Text.includes('opponent respect / point-blank read -> H Manège Doré'), 'manon: S1 command-grab choice leaked into S0');
      assert(!s0Text.includes('Medal Level 4-5 + opponent respect -> H Manège Doré'), 'manon: high-Medal layer leaked into S0');
    }
    if (c.slug === 'alex') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2MP > M Flash Axe hit > Prowler > Heavy Lariat'), 'alex: S0 earned-Prowler identity route missing');
      assert(!s0Text.includes('earned Prowler entry -> Air Stampede'), 'alex: full Prowler branch leaked into S0');
      assert(!s0Text.includes('4MK block + opponent respects -> H Power Bomb'), 'alex: Power Bomb read leaked into S0');
    }
    if (c.slug === 'chunli') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2HP hit > Serenity Stream > Forward Strike > M Spinning Bird Kick'), 'chunli: S0 single stance route missing');
      assert(s0Text.includes('Serenity Stream entered but no branch is worth committing -> Up exit'), 'chunli: S0 stance exit missing');
      assert(!s0Text.includes('earned Serenity Stream entry -> Lotus Fist'), 'chunli: full stance tree leaked into S0');
    }
    if (c.slug === 'aki') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2LK > 2LP > 2LP > H Serpent Lash'), 'aki: S0 stable poison/+44 route missing');
      assert(!s0Text.includes('opponent poisoned -> M Serpent Lash poison burst'), 'aki: S1 poison-burst route leaked into S0');
      assert(!s0Text.includes('corner opponent poisoned -> M Serpent Lash burst > 5HK > Toxic Wreath > DR 5HK > Venomous Fang > Orchid Spring'), 'aki: S2 puddle route leaked into S0');
    }
    if (c.slug === 'ed') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2LP > 5LP > M Psycho Blitz'), 'ed: S0 Blitz route missing');
      assert(s0Text.includes('M Psycho Blitz hit +39 -> Drive Rush +8 -> 5HP'), 'ed: S0 Rush re-entry missing');
      assert(!s0Text.includes('5MP > 5HP > H Psycho Blitz in declared Hitman Combination state -> +42'), 'ed: S1 exact +42 safe jump leaked into S0');
    }
    if (c.slug === 'jp') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2LP > 5LP > L Stribog'), 'jp: S0 remote-control route missing');
      assert(s0Text.includes('opponent holds ground / walks predictably -> Triglav'), 'jp: S0 remote-control decision missing');
      assert(!s0Text.includes('earned Departure active -> Departure: Shadow / portal strike'), 'jp: portal tree leaked into S0');
    }
    if (c.slug === 'ingrid') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('safe resource window -> hold L Sun Flare about 47F'), 'ingrid: S0 one-stock investment missing');
      assert(!s0Text.includes('stock_level_1 -> confirmed 2HP > Sun Flare Lv2'), 'ingrid: S1 first-spend route leaked into S0');
      assert(!s0Text.includes('stock_level_2 -> Sun Flare Lv3 blocked'), 'ingrid: two-stock layer leaked into S0');
    }
    if (c.slug === 'cviper') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2MK hit -> High Jump Cancel -> M Thunder Dash -> Tracer Combination'), 'cviper: S0 HJC identity route missing');
      assert(!s0Text.includes('5MP > 2MP > L Thunder Dash > Tracer Combination'), 'cviper: S1 larger-Oki route leaked into S0');
      assert(!s0Text.includes('5MK hit -> High Jump Cancel -> M Thunder Dash -> Tracer Combination'), 'cviper: later HJC branch leaked into S0');
    }
    if (c.slug === 'dhalsim') {
      const s0Text = await page.locator('#practical').innerText();
      assert(s0Text.includes('2LP > CDR > 5LP > 4MP > M Yoga Blast hit +42 -> immediate P Yoga Teleport (Forward)'), 'dhalsim: S0 earned Teleport identity route missing');
      assert(!s0Text.includes('Aerial Yoga Float > j.HP > 1HP Nirvana Punch > M Yoga Flame'), 'dhalsim: S1 Float layer leaked into S0');
      assert(!s0Text.includes('OD Yoga Fire -> Yoga Arch -> Yoga Comet'), 'dhalsim: S2 projectile-chain layer leaked into S0');
    }
    await page.locator('[data-stage="ALL"]').click();
    const practicalText = await page.locator('#practical').innerText();
    for (const token of c.practical) assert(practicalText.includes(token), `${c.slug}: practical marker missing ${token}`);
    assert(await page.locator('[data-row-stage="S4"]:visible').count() >= 1, `${c.slug}: ALL should reveal S4`);
    const routes = await page.locator('.route').allInnerTexts();
    assert(routes.every(x => !x.includes('...') && !x.includes('…') && !/^starter\s*>/i.test(x) && !/^move\s*>/i.test(x)), `${c.slug}: unfinished learner route leaked`);
    await page.locator('#practical').screenshot({ path:`${SHOTS}/${c.slug}-practical-v6-light.png` });

    await page.locator('[data-top-tab="reference"]').click();
    const reference = await page.locator('[data-panel="reference"]').innerText();
    assert(reference.includes(c.ref), `${c.slug}: latest Reference not connected`);
  }

  await page.goto(`${BASE}/character/ryu/#role`, { waitUntil:'networkidle' });
  await Promise.all([
    page.waitForURL('**/character/jamie/**', { waitUntil:'networkidle' }),
    page.locator('#heroCharacterSelect').selectOption('jamie')
  ]);
  assert(page.url().includes('/character/jamie/'), 'real 31-character selector navigation failed');
  assert(await page.locator('#heroCharacterSelect').inputValue() === 'jamie', 'selector did not land on Jamie');

  const goldSlugs = chars.map(c => c.slug);
  const pendingSlug = await page.locator('#heroCharacterSelect option').evaluateAll(
    (options, accepted) => options.map(option => option.value).find(value => !accepted.includes(value)) ?? null,
    goldSlugs
  );
  if (pendingSlug) {
    await page.goto(`${BASE}/character/${pendingSlug}/#role`, { waitUntil:'networkidle' });
    assert((await page.locator('[data-panel="role"]').innerText()).includes('GOLD PAGE QA PENDING'), `${pendingSlug}: CONTENT_READY roster shell must not masquerade as Gold content`);
  }

  await page.goto(`${BASE}/character/jamie/#role`, { waitUntil:'networkidle' });
  assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'light', 'v6 default/saved test theme should start light');
  await page.locator('#theme-toggle').click();
  assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', 'dark theme toggle failed');
  const darkHeroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
  assert(darkHeroLoaded, 'dark hero art missing');
  await page.screenshot({ path:`${SHOTS}/jamie-v6-dark.png`, fullPage:false });
  await page.locator('#theme-toggle').click();

  await page.goto(`${BASE}/character/ken/#role`, { waitUntil:'networkidle' });
  await page.locator('#theme-toggle').click();
  assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', 'ken: dark theme toggle failed');
  const kenDarkHeroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
  assert(kenDarkHeroLoaded, 'ken: dark hero art missing');
  await page.screenshot({ path:`${SHOTS}/ken-v6-dark.png`, fullPage:false });
  await page.locator('#theme-toggle').click();

  await page.goto(`${BASE}/character/akuma/#role`, { waitUntil:'networkidle' });
  await page.locator('#theme-toggle').click();
  assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', 'akuma: dark theme toggle failed');
  const akumaDarkHeroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
  assert(akumaDarkHeroLoaded, 'akuma: dark hero art missing');
  await page.screenshot({ path:`${SHOTS}/akuma-v6-dark.png`, fullPage:false });
  await page.locator('#theme-toggle').click();

  await page.goto(`${BASE}/character/luke/#role`, { waitUntil:'networkidle' });
  await page.locator('#theme-toggle').click();
  assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', 'luke: dark theme toggle failed');
  const lukeDarkHeroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
  assert(lukeDarkHeroLoaded, 'luke: dark hero art missing');
  await page.screenshot({ path:`${SHOTS}/luke-v6-dark.png`, fullPage:false });
  await page.locator('#theme-toggle').click();

  await page.goto(`${BASE}/character/terry/#role`, { waitUntil:'networkidle' });
  await page.locator('#theme-toggle').click();
  assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', 'terry: dark theme toggle failed');
  const terryDarkHeroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
  assert(terryDarkHeroLoaded, 'terry: dark hero art missing');
  await page.screenshot({ path:`${SHOTS}/terry-v6-dark.png`, fullPage:false });
  await page.locator('#theme-toggle').click();

  await page.goto(`${BASE}/character/sagat/#role`, { waitUntil:'networkidle' });
  await page.locator('#theme-toggle').click();
  assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', 'sagat: dark theme toggle failed');
  const sagatDarkHeroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
  assert(sagatDarkHeroLoaded, 'sagat: dark hero art missing');
  await page.screenshot({ path:`${SHOTS}/sagat-v6-dark.png`, fullPage:false });
  await page.locator('#theme-toggle').click();

  for (const slug of ['juri','elena','yasmine','rashid','kimberly']) {
    await page.goto(`${BASE}/character/${slug}/#role`, { waitUntil:'networkidle' });
    if (await page.evaluate(() => document.documentElement.dataset.theme) !== 'dark') await page.locator('#theme-toggle').click();
    assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', `${slug}: dark theme toggle failed`);
    const heroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
    assert(heroLoaded, `${slug}: dark hero art missing`);
    await page.screenshot({ path:`${SHOTS}/${slug}-v6-dark.png`, fullPage:false });
    await page.locator('#theme-toggle').click();
  }

  for (const slug of ['guile','deejay','ehonda','blanka','vega']) {
    await page.goto(`${BASE}/character/${slug}/#role`, { waitUntil:'networkidle' });
    if (await page.evaluate(() => document.documentElement.dataset.theme) !== 'dark') await page.locator('#theme-toggle').click();
    assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', `${slug}: dark theme toggle failed`);
    const heroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
    assert(heroLoaded, `${slug}: dark hero art missing`);
    await page.screenshot({ path:`${SHOTS}/${slug}-v6-dark.png`, fullPage:false });
    await page.locator('#theme-toggle').click();
  }

  for (const slug of ['marisa','lily','manon','alex']) {
    await page.goto(`${BASE}/character/${slug}/#role`, { waitUntil:'networkidle' });
    if (await page.evaluate(() => document.documentElement.dataset.theme) !== 'dark') await page.locator('#theme-toggle').click();
    assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', `${slug}: dark theme toggle failed`);
    const heroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
    assert(heroLoaded, `${slug}: dark hero art missing`);
    await page.screenshot({ path:`${SHOTS}/${slug}-v6-dark.png`, fullPage:false });
    await page.locator('#theme-toggle').click();
  }

  for (const slug of ['chunli','aki','ed','jp','ingrid','cviper','dhalsim']) {
    await page.goto(`${BASE}/character/${slug}/#role`, { waitUntil:'networkidle' });
    if (await page.evaluate(() => document.documentElement.dataset.theme) !== 'dark') await page.locator('#theme-toggle').click();
    assert(await page.evaluate(() => document.documentElement.dataset.theme) === 'dark', `${slug}: dark theme toggle failed`);
    const heroLoaded = await page.locator('.hero-character-dark').evaluate((img) => img.complete && img.naturalWidth > 0);
    assert(heroLoaded, `${slug}: dark hero art missing`);
    await page.screenshot({ path:`${SHOTS}/${slug}-v6-dark.png`, fullPage:false });
    await page.locator('#theme-toggle').click();
  }

  const assertNoDocumentOverflow = async (label) => {
    const overflow = await page.evaluate(() => ({ doc:document.documentElement.scrollWidth, win:window.innerWidth }));
    assert(overflow.doc <= overflow.win + 1, `${label}: document overflow ${overflow.doc} > ${overflow.win}`);
  };

  const assertPrimaryChromeVisible = async (label) => {
    const selectors = ['.beginner-nav','[data-top-tab="learn"]','[data-top-tab="role"]','[data-top-tab="practical"]','[data-top-tab="reference"]','#theme-toggle'];
    const viewport = page.viewportSize();
    for (const selector of selectors) {
      const locator = page.locator(selector).first();
      assert(await locator.isVisible(), `${label}: primary control hidden ${selector}`);
      const box = await locator.boundingBox();
      assert(box, `${label}: primary control has no box ${selector}`);
      assert(box.x >= -1 && box.x + box.width <= viewport.width + 1, `${label}: primary control clipped horizontally ${selector} @ ${JSON.stringify(box)}`);
      assert(box.y >= -1 && box.y + box.height <= viewport.height + 1, `${label}: primary control clipped vertically ${selector} @ ${JSON.stringify(box)}`);
    }
  };

  const assertPracticalDevice = async (label, width, height) => {
    await page.setViewportSize({ width, height });
    await page.goto(`${BASE}/character/ryu/#role`, { waitUntil:'networkidle' });
    await assertNoDocumentOverflow(`${label} role`);
    await assertPrimaryChromeVisible(`${label} role`);
    await page.locator('[data-top-tab="practical"]').click();
    assert(await page.locator('#practical:visible').count() === 1, `${label}: Practical not reachable`);
    assert(await page.locator('[data-stage]:visible').count() === 6, `${label}: stage controls not all visible`);
    assert(await page.locator('[data-op]:visible').count() >= 5, `${label}: opportunity controls not visible`);
    await assertNoDocumentOverflow(`${label} practical`);
    const tableState = await page.locator('.table-wrap').first().evaluate((el) => ({
      client:el.clientWidth,
      scroll:el.scrollWidth,
      overflow:getComputedStyle(el).overflowX
    }));
    assert(tableState.client > 0 && ['auto','scroll'].includes(tableState.overflow), `${label}: Practical table must scroll internally when needed`);
    await page.locator('.term-inline').first().click();
    const pop = page.locator('#term-popover:visible');
    assert(await pop.count() === 1, `${label}: terminology popover did not open`);
    const popBox = await pop.boundingBox();
    const viewport = page.viewportSize();
    assert(popBox && popBox.x >= -1 && popBox.y >= -1 && popBox.x + popBox.width <= viewport.width + 1 && popBox.y + popBox.height <= viewport.height + 1, `${label}: terminology popover clipped ${JSON.stringify(popBox)}`);
    await page.locator('[data-term-close]').click();
  };

  // Compact phone: every roster page must remain document-safe.
  await page.setViewportSize({ width:390, height:844 });
  await page.goto(`${BASE}/beginner/`, { waitUntil:'networkidle' });
  await assertNoDocumentOverflow('beginner phone');
  await page.screenshot({ path:`${SHOTS}/beginner-phone-390.png`, fullPage:false });
  for (const c of chars) {
    await page.goto(`${BASE}/character/${c.slug}/#role`, { waitUntil:'networkidle' });
    await assertNoDocumentOverflow(`${c.slug} phone`);
  }
  await assertPracticalDevice('phone-390',390,844);
  await page.screenshot({ path:`${SHOTS}/ryu-practical-phone-390.png`, fullPage:false });

  // Large phone: representative full interaction surface.
  await assertPracticalDevice('phone-430',430,932);
  await page.goto(`${BASE}/beginner/`, { waitUntil:'networkidle' });
  await assertNoDocumentOverflow('beginner phone-430');
  await page.screenshot({ path:`${SHOTS}/beginner-phone-430.png`, fullPage:false });

  // iPad portrait: all 31 role pages + shared interactive surface.
  await page.setViewportSize({ width:768, height:1024 });
  for (const c of chars) {
    await page.goto(`${BASE}/character/${c.slug}/#role`, { waitUntil:'networkidle' });
    await assertNoDocumentOverflow(`${c.slug} ipad-portrait`);
  }
  await assertPracticalDevice('ipad-portrait',768,1024);
  await page.goto(`${BASE}/character/ryu/#role`, { waitUntil:'networkidle' });
  await page.screenshot({ path:`${SHOTS}/ryu-role-ipad-portrait.png`, fullPage:false });
  await page.goto(`${BASE}/beginner/`, { waitUntil:'networkidle' });
  await assertNoDocumentOverflow('beginner ipad-portrait');
  await page.screenshot({ path:`${SHOTS}/beginner-ipad-portrait.png`, fullPage:false });

  // iPad landscape: preserve the desktop-like workbench without clipping controls.
  await assertPracticalDevice('ipad-landscape',1024,768);
  await page.screenshot({ path:`${SHOTS}/ryu-practical-ipad-landscape.png`, fullPage:false });

  assert(errors.length === 0, `browser errors: ${errors.join(' | ')}`);
  console.log('ASTRO V6 BROWSER GATE PASS | phone 390/430 | iPad 768 portrait/1024 landscape | beginner fundamentals | contextual terminology | 31 selector | 31 accepted light+dark heroes | 31 Gold characters | dark/light | responsive');
} finally {
  await browser.close();
}
