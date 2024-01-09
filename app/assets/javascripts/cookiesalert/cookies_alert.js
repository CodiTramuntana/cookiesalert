var cookies = {
  div : "#cookies",
  btn : "#cookies .accept",
  denyBtn: "#cookies .deny",
  expires : 365,
  check : function (obj) {
    if (obj !== undefined) {
      cookies.div = obj.div || cookies.div
      cookies.btn = obj.btn || cookies.btn
      cookies.expires = obj.expires || cookies.expires
    }

    if (Cookies.get('cookies_consent') === undefined) {
      $(cookies.div).css({ visibility : 'visible' })
      $(cookies.btn).click(function () {
        cookies.accept_all_cookies();
      })
      $(cookies.denyBtn).click(function () {
        cookies.remove();
        $(cookies.div).css({ visibility : 'hidden' });
      })
    } else {
      $(cookies.denyBtn).click(function () {
        cookies.remove();
        $(cookies.div).css({ visibility : 'hidden' });
      })
    }
  },
  accept_all_cookies : function () {
    Cookies.set('cookies_consent','true', { expires : cookies.expires });
    $(cookies.div).css({ visibility : 'hidden' });
    setNonTechnicalCookies();
  },
  remove : function () {
    Cookies.set('cookies_consent', 'false');
  }
}

function setNonTechnicalCookies() {
  switch(window.rails_env) {
    case 'production':
      console.log('You have accepted the cookies.');
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',`${window.gtm_code}`);
      break;
    default:
      console.log('You have accepted the cookies.');
      break;
  }
}
