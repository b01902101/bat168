"use strict";function init(){$((function(){handleCarousel(),handlePageAnchor()}))}function handleCarousel(){$(".js-carousel").slick({arrows:!1,autoplay:!0,autoplaySpeed:3e3,dots:!0,infinite:!0})}function handlePageAnchor(){$('a[href^="#"]').on("click",(function(t){t.preventDefault();var e=$(this.getAttribute("href"));if(e.length){var n=$(window).scrollTop(),a=e.offset().top-50,o=n>a?(n-a)/2:(a-n)/2;$("html, body").stop().animate({scrollTop:a},o)}}))}new Vue({el:"#app",data:{url:{form:"https://forms.gle/F5WHwSVysw4nhGuRA",line:"line://ti/p/@bat101",wechat:"https://u.wechat.com/IEutuK-O1iu5LBVZ-w0PVek"},account:{bank:"中國信託（822）0935-4013-9545",line:"@bat101",wechat:"nickairport"},year:(new Date).getFullYear()},mounted:function(){init()}});
//# sourceMappingURL=index.js.map