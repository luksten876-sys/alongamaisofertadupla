// DOM link changes happen after hydration; server/client initial markup stays identical.
export function startAfterHydration() {
  const w = window as typeof window & { __alongaAfterHydration?: boolean; clarity?: { (...args: unknown[]): void; q?: unknown[][] } };
  if (w.__alongaAfterHydration) return;
  w.__alongaAfterHydration = true;
  const key = 'alonga-campaign';
  const allowed = /^(utm_.+|xcod|sck|src|sub_?id\d*|sub\d+|fbclid|gclid|gbraid|wbraid|ttclid)$/i;
  const campaign = new URLSearchParams();
  try {
    new URLSearchParams(sessionStorage.getItem(key) || '').forEach((v, k) => { if (allowed.test(k)) campaign.set(k, v); });
  } catch { /* Storage may be unavailable; URL parameters still work. */ }
  new URLSearchParams(location.search).forEach((v, k) => { if (allowed.test(k)) campaign.set(k, v); });
  try { sessionStorage.setItem(key, campaign.toString()); } catch { /* No storage required. */ }
  function decorate(anchor: HTMLAnchorElement) {
    const url = new URL(anchor.href, location.href);
    if (url.hostname !== 'pay.kiwify.com.br') return;
    campaign.forEach((value, name) => {
      // UTMify appends its lead reference to utm_source; retain that official suffix.
      const current = url.searchParams.get(name);
      if (name === 'utm_source' && current?.startsWith(value + 'jLj')) return;
      url.searchParams.set(name, value);
    });
    if (anchor.href !== url.href) anchor.href = url.href;
  }
  function decorateAll() { document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(decorate); }
  decorateAll();
  new MutationObserver(decorateAll).observe(document.body, { childList: true, subtree: true });
  document.addEventListener('click', (event) => {
    const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
    if (anchor) decorate(anchor);
  }, true);
  // Preserve the existing official UTM propagation library and its options.
  const utms = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
  if (!document.querySelector(`script[src="${utms}"]`)) {
    const script = document.createElement('script');
    script.src = utms;
    script.async = true;
    script.defer = true;
    script.setAttribute('data-utmify-prevent-xcod-sck', '');
    script.setAttribute('data-utmify-prevent-subids', '');
    script.addEventListener('load', decorateAll, { once: true });
    document.head.appendChild(script);
  }
  // Only Clarity is deferred. There is no interaction gate for any tracker.
  setTimeout(() => {
    const src = 'https://www.clarity.ms/tag/yrjdvvxfog';
    if (document.querySelector(`script[src="${src}"]`)) return;
    w.clarity = w.clarity || function (...args: unknown[]) { (w.clarity!.q = w.clarity!.q || []).push(args); };
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }, 2500);
}
