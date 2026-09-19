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
  { slug:'kimberly', normals:18, learn:'普通contact → corner carry → simple Oki', ref:'Anti-template truth', practical:['Sprint > Shadow Slide','Shuriken Bomb','SA3'] }
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

    await page.locator('[data-top-tab="learn"]').click();
    const learn = await page.locator('[data-panel="learn"]').innerText();
    assert(learn.includes(c.learn), `${c.slug}: latest learning content not connected`);

    await page.locator('[data-top-tab="practical"]').click();
    assert(await page.locator('#practical:visible').count() === 1, `${c.slug}: Practical Hub missing`);
    assert(await page.locator('[data-stage]').count() === 6, `${c.slug}: S0-S4 + ALL missing`);
    assert(await page.locator('[data-op]').count() >= 5, `${c.slug}: Opportunity Hub too small`);
    assert(await page.locator('[data-row-stage="S4"]:visible').count() === 0, `${c.slug}: future S4 should be folded at S0`);
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

  await page.setViewportSize({ width:390, height:844 });
  for (const c of chars) {
    await page.goto(`${BASE}/character/${c.slug}/#role`, { waitUntil:'networkidle' });
    const overflow = await page.evaluate(() => ({ doc:document.documentElement.scrollWidth, win:window.innerWidth }));
    assert(overflow.doc <= overflow.win + 1, `${c.slug}: mobile document overflow ${overflow.doc} > ${overflow.win}`);
    await page.screenshot({ path:`${SHOTS}/${c.slug}-v6-mobile.png`, fullPage:false });
  }

  assert(errors.length === 0, `browser errors: ${errors.join(' | ')}`);
  console.log('ASTRO V6 BROWSER GATE PASS | 31 selector | 15 accepted light+dark heroes | 学习/角色/实战/资料 | 15 Gold characters | pending shell | dark/light | mobile');
} finally {
  await browser.close();
}
