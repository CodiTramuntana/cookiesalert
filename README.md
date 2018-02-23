# Cookies alert

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'cookiesalert', :git => 'ssh://git@github.com:CodiTramuntana/cookiesalert.git'
```

And then execute:

    $ bundle

## Usage

Add in "application.js":
```ruby
//= require cookiesalert/cookie
//= require cookiesalert/cookies_alert
```

Run Javascript check when load/ready:
```js
$( document ).ready(function() {
    cookies.check();
});
```

Javascript optional parameters for select "#text_div" and add listener in "#button_confirm" for accept cookies:
```js
cookies.check({
  div : '#div',
  btn : '#button',
  expires : 7 //Days
});
```

## Optional template

Add optional styles in "application.css":
```ruby
*= require cookiesalert/cookies_alert
```

Import optional view layout:
```erb
<%= render "cookies/alert", :advice => "Cookies Text", :link => "Link Advice", :button => "Button" %>
```

Render optional parameters:
```erb
<%= render "cookies/alert", :advice => "Cookies Text", :link => link_to('Link Advice', root_path, target: '_blank'), :button => image_tag('cross_cookies.svg') %>
```

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

## Dependences included:
-[JavaScript Cookie v2.1.3](https://github.com/js-cookie/js-cookie)

# Contributing

Bug reports and pull requests are welcome on GitHub. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


# License

`cookiesalert` is Copyright © 2018 CodiTramuntana SL. It is free software, and may be redistributed under the terms specified in the LICENSE file.

# About CodiTramuntana

![CodiTramuntana's Logo](https://avatars0.githubusercontent.com/u/27996979?v=3&u=b0256e23ae7b2f237e3d1b5f2b2abdfe3092b24c&s=400)

Maintained by [CodiTramuntana](http://www.coditramuntana.com).

The names and logos for CodiTramuntana are trademarks of CodiTramuntana SL.

We love open source software!
