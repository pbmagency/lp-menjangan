const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const blade = fs.readFileSync(path.join(__dirname, '../resources/views/landing.blade.php'), 'utf8');
const script = blade.match(/<script nonce="\{\{ \$cspNonce \}\}">([\s\S]*?)<\/script>/)[1];
const appBlade = fs.readFileSync(path.join(__dirname, '../resources/views/app.blade.php'), 'utf8');
const c1Script = appBlade.match(/<script nonce="\{\{ \$cspNonce \}\}">([\s\S]*?)<\/script>/)[1];

function run(search, stored, href, storageBlocked = false, source = script) {
  const events = {};
  const values = new Map(stored ? [['gclid', stored]] : []);
  const link = { href };
  const document = {
    addEventListener(name, callback) { events[name] = callback; },
    querySelectorAll() { return [link]; },
  };
  const window = { location: { search, href: `https://example.com/${search}` } };
  const localStorage = {
    getItem(key) { if (storageBlocked) throw new Error('Storage blocked'); return values.get(key) || null; },
    setItem(key, value) { if (storageBlocked) throw new Error('Storage blocked'); values.set(key, value); },
  };

  vm.runInNewContext(source, { document, window, localStorage, URL, URLSearchParams });
  return { events, link, values };
}

const wa = 'https://wa.me/6281238578042?text=Hello%2C%20I%20want%20to%20book.';

test('a first ad click receives its GCLID even before page load', () => {
  const { events, link, values } = run('?gclid=TEST_123', null, wa);
  events.click({ target: { closest: () => link } });
  const message = new URL(link.href).searchParams.get('text');

  assert.equal(values.get('gclid'), 'TEST_123');
  assert.equal(message, '[ID: TEST_123]\n\nPenting! Kode referensi di atas jangan dihapus\n\nHello, I want to book.');
  events.DOMContentLoaded();
  assert.equal(new URL(link.href).searchParams.get('text'), message);
});

test('a new ad click replaces an older GTM reference', () => {
  const old = 'https://wa.me/6281238578042?text=' + encodeURIComponent('[ID: OLD]\n\nPenting! Kode referensi di atas jangan dihapus\n\nHello');
  const { events, link, values } = run('?gclid=NEW', 'OLD', old);
  events.DOMContentLoaded();

  assert.equal(values.get('gclid'), 'NEW');
  assert.equal(new URL(link.href).searchParams.get('text'), '[ID: NEW]\n\nPenting! Kode referensi di atas jangan dihapus\n\nHello');
});

test('a visit without a known GCLID keeps the original message', () => {
  const { events, link } = run('', null, wa);
  assert.equal(events.click, undefined);
  assert.equal(link.href, wa);
});

test('a first ad click still works when browser storage is blocked', () => {
  const { events, link } = run('?gclid=TEST_123', null, wa, true);
  events.click({ target: { closest: () => link } });
  assert.match(new URL(link.href).searchParams.get('text'), /^\[ID: TEST_123\]/);
});

test('every WhatsApp link on the landing page receives the reference', () => {
  const hrefs = [...blade.matchAll(/href="(https:\/\/wa\.me\/[^"<>]+)"/g)].map((match) => match[1]);
  assert.ok(hrefs.length > 10);

  for (const href of hrefs) {
    const { events, link } = run('?gclid=TEST_123', null, href);
    events.DOMContentLoaded();
    assert.match(new URL(link.href).searchParams.get('text'), /^\[ID: TEST_123\]/);
  }
});

test('c1-lp WhatsApp links include (uc) and receive the GCLID reference', () => {
  const pages = ['c1-lp.tsx', 'c1-lp-below.tsx'].map((name) =>
    fs.readFileSync(path.join(__dirname, '../resources/js/Pages', name), 'utf8')
  );
  const hrefs = pages.flatMap((page) => [...page.matchAll(/href="(https:\/\/wa\.me\/[^"<>]+)"/g)].map((match) => match[1]));
  assert.ok(hrefs.length > 10);

  for (const href of hrefs) {
    assert.match(new URL(href).searchParams.get('text'), /^\(uc\) /);
    const { events, link } = run('?gclid=TEST_123', null, href, false, c1Script);
    events.click({ target: { closest: () => link } });
    assert.match(new URL(link.href).searchParams.get('text'), /^\[ID: TEST_123\]\n\nPenting! Kode referensi di atas jangan dihapus\n\n\(uc\) /);
  }
});
