import { chromium } from 'playwright';

const BASE = process.env.SF6_BASE_URL || 'http://127.0.0.1:4176/sf6-studyhub';
const assert = (ok, msg) => { if (!ok) throw new Error(msg); };

const chars = [
  { slug:'ryu', normals:18, must:['5MP','623HP'], s0:'5MP > 2MP xx 623HP' },
  { slug:'jamie', normals:18, must:['22P','63214K','236LK'], s0:'22P' },
  { slug:'mai', normals:18, must:['236LK','OD 214P','j.214P'], s0:'236LK' },
  { slug:'zangief', normals:23, must:['360P','6HP','PPP'], s0:'360P' },
  { slug:'cammy', normals:18, must:['236MK','j.214K','236P'], s0:'236MK' }
];

const browser = await chromium.launch({ headless:true });
try {
  const page = await browser.newPage({ viewport:{ width:1440, height:1050 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type()==='error') errors.push(m.text()); });

  await page.goto(`${BASE}/`, { waitUntil:'networkidle' });
  assert(await page.locator('.char-link').count() === 5, 'home must expose exactly current five-character Gold lane');

  for (const c of chars) {
    await page.goto(`${BASE}/character/${c.slug}/`, { waitUntil:'networkidle' });
    assert(await page.locator('#role').count() === 1, `${c.slug}: Role missing`);
    assert(await page.locator('#practical').count() === 1, `${c.slug}: Practical missing`);
    assert(await page.locator('.frame-table tbody tr').count() === c.normals, `${c.slug}: normal table count mismatch`);
    assert(await page.locator('[data-stage]').count() === 6, `${c.slug}: S0-S4 + ALL missing`);
    assert(await page.locator('[data-op]').count() >= 5, `${c.slug}: Opportunity Hub too small`);

    const s0Text = await page.locator('#practical').innerText();
    assert(s0Text.includes(c.s0), `${c.slug}: identity-floor input missing from default S0 view`);
    assert(await page.locator('[data-row-stage="S4"]:visible').count() === 0, `${c.slug}: future S4 rows should be folded at S0`);

    const routes = await page.locator('.route').allInnerTexts();
    assert(routes.every(x => !x.includes('...') && !x.includes('…') && !/^starter\s*>/i.test(x) && !/^move\s*>/i.test(x)), `${c.slug}: unfinished learner route leaked`);

    await page.locator('[data-stage="ALL"]').click();
    const allText = await page.locator('#practical').innerText();
    for (const token of c.must) assert(allText.includes(token), `${c.slug}: missing ${token} from ALL view`);
    assert(await page.locator('[data-row-stage="S4"]:visible').count() >= 1, `${c.slug}: ALL should reveal S4`);
  }

  await page.goto(`${BASE}/character/jamie/`, { waitUntil:'networkidle' });
  assert((await page.locator('#role').innerText()).includes('投资未来'), 'jamie: Role must explain current-turn vs future Drink investment');

  await page.goto(`${BASE}/character/zangief/`, { waitUntil:'networkidle' });
  assert((await page.locator('#role').innerText()).includes('站着防'), 'zangief: respect loop explanation missing');

  await page.goto(`${BASE}/character/cammy/`, { waitUntil:'networkidle' });
  await page.locator('[data-stage="ALL"]').click();
  const cammy = await page.locator('#practical').innerText();
  assert(cammy.includes('高度') || cammy.includes('距离') || cammy.includes('落点'), 'cammy: Cannon Strike condition language missing');

  await page.setViewportSize({ width:390, height:844 });
  for (const c of chars) {
    await page.goto(`${BASE}/character/${c.slug}/`, { waitUntil:'networkidle' });
    const overflow = await page.evaluate(() => ({ doc:document.documentElement.scrollWidth, win:window.innerWidth }));
    assert(overflow.doc <= overflow.win + 1, `${c.slug}: document mobile overflow ${overflow.doc} > ${overflow.win}`);
  }

  assert(errors.length === 0, `browser errors: ${errors.join(' | ')}`);
  console.log('ASTRO BROWSER GATE PASS | 5 current characters | Role | Practical | S0 folding | route completeness | mobile');
} finally {
  await browser.close();
}
