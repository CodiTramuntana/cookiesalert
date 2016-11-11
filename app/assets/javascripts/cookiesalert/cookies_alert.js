<<<<<<< HEAD
var cookies = {
  div : '#cookies',
  btn : '#cookies_btn',
  check : function (div, btn) {
    cookies.div = div || cookies.div;
    cookies.btn = btn || cookies.btn;
    if (Cookies.get('cookies_alert') === undefined) {
      $(cookies.div).css({ visibility : 'visible' });
      $(cookies.btn).click(function () {
        cookies.accept();
      });
    } else $(cookies.div).css({ visibility : 'hidden' });
  },
  accept : function () {
    Cookies.set('cookies_alert','true');
    $(cookies.div).css({ visibility : 'hidden' });
  },
  remove : function () {
    Cookies.remove('cookies_alert');
  }
};
=======
var cookies = {
  div : "#cookies",
  btn : "#cookies_btn",
  expires : 365,
  check : function (obj) {
    if (obj !== undefined) {
      cookies.div = obj.div || cookies.div
      cookies.btn = obj.btn || cookies.btn
      cookies.expires = obj.expires || cookies.expires
    }

    if (Cookies.get('cookies_alert') === undefined) {
      $(cookies.div).css({ visibility : 'visible' })
      $(cookies.btn).click(function () {
        cookies.accept()
      })
    } else $(cookies.div).css({ visibility : 'hidden' });
  },
  accept : function () {
    Cookies.set('cookies_alert','true', { expires : cookies.expires });
    $(cookies.div).css({ visibility : 'hidden' })
  },
  remove : function () {
    Cookies.remove('cookies_alert');
  }
}
>>>>>>> 411510f38d1070d4293c711f555958e734a093ea
