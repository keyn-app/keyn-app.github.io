"use strict";function scrollCorrection(){return screen.width<576?50:60}function drawHowBlock(t){var e=$("#how-content"),i=(window.innerHeight+t-e.offset().top)/window.innerHeight;fillNumber(i,1,.3),fillTextAndLock(i,1,.4),fillNumber(i,2,.5),fillTextAndLock(i,2,.6),fillNumber(i,3,.8),drawArrow(i,$("#step-1-arrow"),.4,.5),drawArrow(i,$("#step-2-arrow"),.6,.8)}function intializeArrows(){var t=$("path.arrow-line"),e=$("path.arrow-head"),i=!0,n=!1,a=undefined;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var r=o.value,c=r.getTotalLength();r.style.strokeDasharray=c+" "+c,r.style.strokeDashoffset=c,r.getBoundingClientRect()}}catch(t){n=!0,a=t}finally{try{!i&&l["return"]&&l["return"]()}finally{if(n)throw a}}var s=!0,d=!1,f=undefined;try{for(var u,v=e[Symbol.iterator]();!(s=(u=v.next()).done);s=!0){u.value.style.fillOpacity="0.3"}}catch(t){d=!0,f=t}finally{try{!s&&v["return"]&&v["return"]()}finally{if(d)throw f}}}function drawArrow(t,e,i,n){var a=e.find("path.arrow-line")[0],o=a.getTotalLength(),l=(t-i)/(n-i);if(t>i&&t<n){a.style.strokeDasharray=o+" "+o,e.find("path.arrow-head")[0].style.fillOpacity="0.3";var r=o*l;a.style.strokeDashoffset=o-r}else t>=n?(e.find("path.arrow-head")[0].style.fillOpacity="1.0",a.style.strokeDasharray="none"):(e.find("path.arrow-head")[0].style.fillOpacity="0.3",a.style.strokeDashoffset=o,a.getBoundingClientRect(),a.style.strokeDasharray=o+" "+o)}function fillNumber(t,e,i){var n=$("#step-"+e+" circle")[0];n.style.fill=t<i?"#4722C3":"#EE8C00"}function fillTextAndLock(t,e,i){var n=$("#step-"+e+"-arrow"),a=n.find(".lock-small")[0],o=n.find("p")[0];t<i?(a.style.opacity=.3,o.style.opacity=.3):(a.style.opacity=1,o.style.opacity=1)}function scrollToPosition(){var t=$(this),e=t.attr("href").split("/").pop();return $("html, body").animate({scrollTop:$(e).offset().top-navHeight+scrollCorrection()+1},700),!1}function validateNewsletterForm(){$("input#mc-embedded-subscribe").prop("disabled",!$("input#gdpr_13477")[0].checked||!validateEmail($("input#mce-EMAIL").val()))}function validateEmail(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}function isElementInViewport(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function callbackFunc(){for(var t=0;t<items.length;t++)isElementInViewport(items[t])&&items[t].classList.add("in-view")}var sections=$("section"),nav=$("ul.navigation"),sideNav=$(".sidenav"),navHeight=$("nav.navbar").outerHeight();$(window).on("scroll",function(){var t=$(this).scrollTop();sections.each(function(){var e=$(this).offset().top-navHeight+scrollCorrection(),i=e+$(this).outerHeight();if(t>=e&&t<=i){nav.find("a").removeClass("active"),sideNav.find("a").removeClass("active"),sections.removeClass("active");var n=$(this).attr("id");$(this).addClass("active"),nav.find("a."+n+"-nav").addClass("active"),sideNav.find("a."+n+"-nav").addClass("active")}}),drawHowBlock(t)}),intializeArrows(),nav.find("a").on("click",scrollToPosition),sideNav.find("a").on("click",scrollToPosition),$(".navbar-brand").on("click",scrollToPosition),$("input#gdpr_13477").click(validateNewsletterForm),$("input#mce-EMAIL").change(validateNewsletterForm);var items=document.querySelectorAll(".timeline li");window.addEventListener("load",callbackFunc),window.addEventListener("resize",callbackFunc),window.addEventListener("scroll",callbackFunc),$("#laptop a.try").click(function(){amplitude.getInstance().logEvent("Clicked try",{location:"landing"})}),$("#try a.try").click(function(){amplitude.getInstance().logEvent("Clicked try")}),$("#try a.download").click(function(){amplitude.getInstance().logEvent("Clicked download app",{location:"home"})}),$("button#start-animation").click(function(){amplitude.getInstance().logEvent("Opened animation")}),$("#pricing .security-blog").click(function(){amplitude.getInstance().logEvent("Opened security blog")});