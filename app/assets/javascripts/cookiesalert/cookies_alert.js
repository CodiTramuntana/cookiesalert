/*!
 * cookiesalert: dependency-free cookie consent banner.
 *
 * Works as a classic script (Sprockets `//= require`, `javascript_include_tag`)
 * or as an ES module (importmap). Either way it exposes `window.cookies` and
 * `window.setNonTechnicalCookies`.
 */
(function (root) {
  'use strict';

  const CONSENT_COOKIE = 'cookies_consent';
  let listenersBound = false;
  let gtmLoaded = false;

  function find(selector) {
    return selector ? document.querySelector(selector) : null;
  }

  function readCookie(name) {
    const pairs = document.cookie ? document.cookie.split('; ') : [];
    for (const pair of pairs) {
      const separator = pair.indexOf('=');
      if (separator === -1) continue;
      if (decodeURIComponent(pair.slice(0, separator)) === name) {
        return decodeURIComponent(pair.slice(separator + 1));
      }
    }
    return undefined;
  }

  function writeCookie(name, value, days) {
    let cookie = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax`;
    if (days) {
      cookie += `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`;
    }
    document.cookie = cookie;
  }

  function setBannerVisible(visible) {
    const banner = find(cookies.div);
    if (banner) banner.style.visibility = visible ? 'visible' : 'hidden';
  }

  // The partial stores its settings in data-* attributes on the banner (CSP
  // friendly). `window.rails_env` and `window.gtm_code` are still supported
  // as a fallback for apps that write their own banner HTML.
  function gtmSettings() {
    const banner = find(cookies.div);
    const data = (banner && banner.dataset) || {};
    return {
      env: data.railsEnv || root.rails_env,
      code: data.gtmCode || root.gtm_code
    };
  }

  function setNonTechnicalCookies() {
    const settings = gtmSettings();
    if (gtmLoaded || settings.env !== 'production' || !settings.code) return;
    gtmLoaded = true;

    root.dataLayer = root.dataLayer || [];
    root.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(settings.code)}`;
    document.head.appendChild(script);
  }

  // Event delegation: bound only once, and keeps working when Turbo/Hotwire
  // replaces the <body> or when check() is called more than once.
  function bindListeners() {
    if (listenersBound) return;
    listenersBound = true;

    document.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      if (cookies.btn && target.closest(cookies.btn)) {
        cookies.accept_all_cookies();
      } else if (cookies.denyBtn && target.closest(cookies.denyBtn)) {
        cookies.only_technical_cookies();
        setBannerVisible(false);
      }
    });
  }

  const cookies = {
    div: '#cookies',
    btn: '#cookies .accept',
    denyBtn: '#cookies .deny',
    expires: 365,

    check(options) {
      if (options) {
        cookies.div = options.div || cookies.div;
        cookies.btn = options.btn || cookies.btn;
        cookies.denyBtn = options.denyBtn || cookies.denyBtn;
        cookies.expires = options.expires || cookies.expires;
      }

      bindListeners();

      const consent = readCookie(CONSENT_COOKIE);
      if (consent === undefined) {
        setBannerVisible(true);
      } else if (consent === 'true') {
        setNonTechnicalCookies();
      }
    },

    accept_all_cookies() {
      writeCookie(CONSENT_COOKIE, 'true', cookies.expires);
      setBannerVisible(false);
      setNonTechnicalCookies();
    },

    only_technical_cookies() {
      writeCookie(CONSENT_COOKIE, 'false');
    }
  };

  root.cookies = cookies;
  root.setNonTechnicalCookies = setNonTechnicalCookies;
})(typeof window !== 'undefined' ? window : this);
