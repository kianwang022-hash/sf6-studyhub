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
  { slug:'luke', normals:18, learn:'不靠 Perfect，也能在真人里打出完整 Luke', ref:'Perfect Flash Knuckle', practical:['2MP > 2LP > L Flash Knuckle','OD Flash Knuckle > DDT','+64'] }
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

  await page.goto(`${BASE}/character/luke/#role`, { waitUntil:'networkidle' });
  assert((await page.locator('[data-panel="role"]').innerText()).includes('GOLD PAGE QA PENDING'), 'CONTENT_READY roster shell must not masquerade as Gold content');

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

  await page.setViewportSize({ width:390, height:844 });
  for (const c of chars) {
    await page.goto(`${BASE}/character/${c.slug}/#role`, { waitUntil:'networkidle' });
    const overflow = await page.evaluate(() => ({ doc:document.documentElement.scrollWidth, win:window.innerWidth }));
    assert(overflow.doc <= overflow.win + 1, `${c.slug}: mobile document overflow ${overflow.doc} > ${overflow.win}`);
    await page.screenshot({ path:`${SHOTS}/${c.slug}-v6-mobile.png`, fullPage:false });
  }

  assert(errors.length === 0, `browser errors: ${errors.join(' | ')}`);
  console.log('ASTRO V6 BROWSER GATE PASS | 31 selector | 8 accepted light+dark heroes | 学习/角色/实战/资料 | 8 Gold characters | pending shell | dark/light | mobile');
} finally {
  await browser.close();
}
