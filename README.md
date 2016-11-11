# Cookiesalert

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'cookiesalert', :git => 'ssh://git@gitlab.coditdev.net:534/gems/cookiesalert.git'
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

## Dependences included:
-[JavaScript Cookie v2.1.3](https://github.com/js-cookie/js-cookie)
