# Cookies alert

[![Gem Version](https://badge.fury.io/rb/cookiesalert.svg)](https://badge.fury.io/rb/cookiesalert)

Easily add a Cookie consent banner, upon the user’s first visit to the site, to alert the users about the cookies and get consent for setting them.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'cookiesalert'
```

And then execute:

    $ bundle

## Requirements

Version 2.0 only supports modern setups. The JavaScript is written in modern JavaScript (ES2015+: `const`, `let`, arrow functions, template strings) and no longer depends on jQuery.

| Setup | 1.x | 2.0 | How to load it in 2.0 |
|---|:---:|:---:|---|
| Sprockets + Terser | ✅ | ✅ | `//= require cookiesalert/cookies_alert` or `javascript_include_tag` |
| Sprockets + Uglifier | ✅ | ❌ | Switch to Terser (see below) or stay on 1.x |
| Propshaft | ❌ | ✅ | `javascript_include_tag "cookiesalert/cookies_alert"` |
| Importmap | ❌ | ✅ | `import "cookiesalert"` |
| jsbundling (esbuild, webpack...) | ❌ | ✅ | `javascript_include_tag "cookiesalert/cookies_alert"` |
| Turbo / Hotwire | — | ✅ | Call `cookies.check()` on `turbo:load` |
| jQuery | Required | Not needed | — |

Version 2.0 requires a modern browser (no Internet Explorer).

If your app uses Sprockets with **Uglifier**, `assets:precompile` will fail, because Uglifier does not understand modern JavaScript. Replace it with [Terser](https://github.com/ahorek/terser-ruby):

```ruby
# Gemfile
gem 'terser'
```

```ruby
# config/environments/production.rb
config.assets.js_compressor = :terser
```

If you can't upgrade your toolchain, stay on version 1.x (`gem 'cookiesalert', '~> 1.0'`), which still uses jQuery.

## Usage

The JavaScript has no dependencies (no jQuery, no js-cookie). Pick the setup that matches your app.

### Sprockets (`//= require`)

In "application.js":
```js
//= require cookiesalert/cookies_alert
```

### Importmap (Rails 7+)

The gem pins itself, so in "app/javascript/application.js":
```js
import "cookiesalert"
```

### Any asset pipeline (Propshaft, Sprockets, jsbundling...)

Load it as a standalone script in your layout:
```erb
<%= javascript_include_tag "cookiesalert/cookies_alert" %>
```

### Initialize

Call `cookies.check()` once the page has loaded:
```js
document.addEventListener("DOMContentLoaded", function () {
  cookies.check();
});
```

With Turbo, use `turbo:load` instead of `DOMContentLoaded`.

Optional parameters: the banner selector (`div`), the accept button (`btn`), the deny button (`denyBtn`) and how many days the consent lasts (`expires`):
```js
cookies.check({
  div : '#cookies',
  btn : '#cookies .accept',
  denyBtn: "#cookies .deny",
  expires : 7 //Days
});
```

## Optional template

Add the optional styles in "application.css" (Sprockets):
```css
*= require cookiesalert/cookies_alert
```

or in your layout (Propshaft or Sprockets):
```erb
<%= stylesheet_link_tag "cookiesalert/cookies_alert" %>
```

Render the optional view layout:
```erb
<%= render "cookies/alert", advice: "Cookies Text", policy_cookies: "/cookies-policy", button: "Button", gtm_code: "GTM-XXXX" %>
```

`policy_cookies` is the URL of your cookies policy. `advice`, `button` and `gtm_code` are optional.
Google Tag Manager is only loaded in production, after the user accepts the cookies.

If you write your own HTML instead of the partial, set `data-rails-env` and `data-gtm-code` on the banner element (or `window.rails_env` / `window.gtm_code`).

## Used Javascript Linter
ESLint file config ".eslintrc.js":
```js
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
	"no-undef" : 0
    }
};
```

# Contributing

Bug reports and pull requests are welcome on GitHub. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


# License

`cookiesalert` is Copyright © 2018 CodiTramuntana SL. It is free software, and may be redistributed under the terms specified in the LICENSE file.

# About CodiTramuntana

![CodiTramuntana's Logo](https://avatars0.githubusercontent.com/u/27996979?v=3&u=b0256e23ae7b2f237e3d1b5f2b2abdfe3092b24c&s=400)

Maintained by [CodiTramuntana](http://www.coditramuntana.com).

The names and logos for CodiTramuntana are trademarks of CodiTramuntana SL.

We love open source software!
