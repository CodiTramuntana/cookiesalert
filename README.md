# Cookiesalert

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'cookiesalert'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install cookiesalert

## Usage

Add in "application.js":
```ruby
//= require cookiesalert/cookie
//= require cookiesalert/cookies_alert
```

Run Javascript check when load/ready:
```js
cookies.check()
```

Javascript optional parameters for select "#text_div" and add listener in "#button_confirm" for accept cookies:
```js
cookies.check("#div", "#button")
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
