"use strict";function analytics(o){amplitude.getInstance().setOptOut(!o)}function showCookieBar(){var o=getCookie("cookieConsent");null!=o?($("#cookie-bar").css("display","none"),analytics(o)):$("#cookie-bar").css("display","block")}function hideCookieBar(){$("#cookie-bar").css("opacity",0)}function setCookie(o,e,i){var t="";if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),t="; expires="+n.toUTCString()}document.cookie=o+"="+(e||"")+t+"; path=/"}function getCookie(o){for(var e=o+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return null}function eraseCookie(o){document.cookie=o+"=; Max-Age=-99999999;"}$("#cookie-bar-button").on("click",function(){analytics(!0),setCookie("cookieConsent","true",365),hideCookieBar()}),$("#cookie-bar-button-no").on("click",function(){analytics(!1),setCookie("cookieConsent","false",1),hideCookieBar()}),showCookieBar();