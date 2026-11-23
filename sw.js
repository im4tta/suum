/* Suum service worker — offline app shell + share target for images and links */
const VERSION = 'suum-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'favicon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
const SHARE = 'suum-share';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== SHARE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);

  /* Web Share Target: images and/or a link shared into the installed app */
  if (req.method === 'POST' && url.pathname.endsWith('/share-target')) {
    e.respondWith((async () => {
      const dest = new URL('./', self.registration.scope);
      try {
        const form = await req.formData();
        const cache = await caches.open(SHARE);
        for (const k of await cache.keys()) await cache.delete(k);
        let n = 0;
        for (const f of form.getAll('files')) {
          if (f && f.type && f.type.startsWith('image/')) {
            await cache.put('shared/' + n++, new Response(f, { headers: { 'content-type': f.type, 'x-name': encodeURIComponent(f.name || 'shared.png') } }));
          }
        }
        if (n) dest.searchParams.set('shared', String(n));
        for (const k of ['url', 'text', 'title']) { const v = form.get(k); if (v) dest.searchParams.set(k, String(v)); }
      } catch (_) {}
      return Response.redirect(dest.href, 303);
    })());
    return;
  }

  if (req.method !== 'GET') return;

  /* Pages: network first so a new deploy shows up, cached copy when offline */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put('index.html', copy));
        return res;
      }).catch(() => caches.match('index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  /* Our own files and Google Fonts: serve cached, refresh in the background */
  const fonts = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (url.origin === self.location.origin || fonts) {
    e.respondWith(
      caches.open(VERSION).then(async c => {
        const hit = await c.match(req, { ignoreSearch: url.origin === self.location.origin });
        const refresh = fetch(req).then(res => {
          if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone());
          return res;
        }).catch(() => hit);
        return hit || refresh;
      })
    );
  }
});
