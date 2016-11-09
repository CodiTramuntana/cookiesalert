var cookies = {
  div : "#cookies",
  btn : "#cookies_btn",
  check : function (div, btn) {
    cookies.div = div || cookies.div
    cookies.btn = btn || cookies.btn
    if (Cookies.get('cookies_alert') === undefined) {
      $(cookies.div).css({ visibility : 'visible' })
      $(cookies.btn).click(function () {
        cookies.accept()
      })
    } else $(cookies.div).css({ visibility : 'hidden' });
  },
  accept : function () {
    Cookies.set('cookies_alert','true');
    $(cookies.div).css({ visibility : 'hidden' })
  },
  remove : function () {
    Cookies.remove('cookies_alert');
  }
}
