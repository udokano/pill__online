// JavaScript Document

///* fadepage */!function(n){n("body").css({display:"none"}),n(window).on("load",function(){n("body")/*.delay(30)*/.fadeIn(1200)})}(jQuery);
///* ua */var isUA=function(i){return{pc:-1!=i.indexOf("windows nt")||-1!=i.indexOf("macintosh"),tablet:-1!=i.indexOf("windows")&&-1!=i.indexOf("touch")&&-1==i.indexOf("tablet pc")||-1!=i.indexOf("android")&&-1==i.indexOf("mobile")||-1!=i.indexOf("ipad"),mobile:-1!=i.indexOf("windows")&&-1!=i.indexOf("phone")||-1!=i.indexOf("android")&&-1!=i.indexOf("mobile")||-1!=i.indexOf("iphone")||-1!=i.indexOf("ipod"),win:-1!=i.indexOf("windows nt"),mac:-1!=i.indexOf("machintosh"),android:-1!=i.indexOf("android"),ios:i.match(/ip(ad|hone|od)/),ie:-1!=i.indexOf("trident")||-1!=i.indexOf("msie"),edge:-1!=i.indexOf("trident")&&-1==i.indexOf("msie")||-1!=i.indexOf("edge"),chrome:-1!=i.indexOf("chrome")&&-1==i.indexOf("opr"),safari:-1!=i.indexOf("safari")&&-1==i.indexOf("opr")&&-1==i.indexOf("chrome")&&-1==i.indexOf("presto"),firefox:-1!=i.indexOf("firefox")}}(window.navigator.userAgent.toLowerCase()),ver=function(i){return isUA.android&&(v=i.match(/android (\d+).(\d+).?(\d+)?/)),isUA.ios&&(v=i.match(/os (\d+)_(\d+)?(\d+)?/)),isUA.pc&&isUA.ie&&(v=i.match(/msie (\d+).(\d+).?(\d+)?/)),isUA.pc&&isUA.edge&&(v=i.match(/trident\/(\d+).(\d+).?(\d+)?/)),isUA.pc&&isUA.chrome&&(v=i.match(/chrome\/(\d+).(\d+).?(\d+)?/)),isUA.pc&&isUA.firefox&&(v=i.match(/firefox\/(\d+).(\d+).?(\d+)?/)),isUA.pc&&isUA.safari&&(v=i.match(/safari\/(\d+).(\d+).?(\d+)?/)),v?String(" ver_"+v[1]+"-"+v[2]+"-"+parseInt(v[3]||0,10)):" ver_none"}(window.navigator.userAgent.toLowerCase());window.onload=function(){var i=document.getElementsByTagName("body");isUA.pc&&(device="pc"),isUA.tablet&&(device="tablet"),isUA.mobile&&(device="mobile"),isUA.win&&(os="win"),isUA.mac&&(os="mac"),isUA.android&&(os="android"+ver),isUA.ios&&(os="ios"+ver),isUA.pc&&isUA.ie&&(browser="ie"+ver),isUA.pc&&isUA.edge&&(browser="edge"+ver),isUA.pc&&isUA.chrome&&(browser="chrome"+ver),isUA.pc&&isUA.safari&&(browser="safari"+ver),isUA.pc&&isUA.firefox&&(browser="firefox"+ver),isUA.tablet||isUA.mobile?i[0].setAttribute("class",device+" "+os):i[0].setAttribute("class",device+" "+os+" "+browser)};
///* touchover */!function(o){var e=navigator.userAgent.toLowerCase(),s=-1!=e.indexOf("android")||e.match(/ip(ad|hone|od)/),t=o(".js-hover"),n="is-hover";s?t.on({touchstart:function(){t.not(this).removeClass(n),o(this).addClass(n)},touchmove:function(){e.indexOf("android 4")>0&&setTimeout(o.proxy(function(){o(this).removeClass(n)},this),100)},touchend:function(){o(this).removeClass(n)}}):t.on({mouseenter:function(){t.not(this).removeClass(n),o(this).addClass(n)},mouseleave:function(){o(this).removeClass(n)}})}(jQuery);
///* jQuery plugin FitText */!function(t){t.fn.fitText=function(n,i){var e=n||1,o=t.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},i);return this.each(function(){var n=t(this),i=function(){n.css("font-size",Math.max(Math.min(n.width()/(10*e),parseFloat(o.maxFontSize)),parseFloat(o.minFontSize)))};i(),t(window).on("resize.fittext orientationchange.fittext",i)})}}(jQuery);
///* jQuery inview */!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(){var t,n,i={height:d.innerHeight,width:d.innerWidth};return i.height||!(t=a.compatMode)&&e.support.boxModel||(i={height:(n="CSS1Compat"===t?h:a.body).clientHeight,width:n.clientWidth}),i}function n(){return{top:d.pageYOffset||h.scrollTop||a.body.scrollTop,left:d.pageXOffset||h.scrollLeft||a.body.scrollLeft}}function i(){if(f.length){var i=0,l=e.map(f,function(e){var t=e.data.selector,n=e.$element;return t?n.find(t):n});for(o=o||t(),r=r||n();i<f.length;i++)if(e.contains(h,l[i][0])){var a=e(l[i]),d={height:a[0].offsetHeight,width:a[0].offsetWidth},c=a.offset(),u=a.data("inview");if(!r||!o)return;c.top+d.height>r.top&&c.top<r.top+o.height&&c.left+d.width>r.left&&c.left<r.left+o.width?u||a.data("inview",!0).trigger("inview",[!0]):u&&a.data("inview",!1).trigger("inview",[!1])}}}var o,r,l,f=[],a=document,d=window,h=a.documentElement;e.event.special.inview={add:function(t){f.push({data:t,$element:e(this),element:this}),!l&&f.length&&(l=setInterval(i,250))},remove:function(e){for(var t=0;t<f.length;t++){var n=f[t];if(n.element===this&&n.data.guid===e.guid){f.splice(t,1);break}}f.length||(clearInterval(l),l=null)}},e(d).bind("scroll resize scrollstop",function(){o=r=null}),!h.addEventListener&&h.attachEvent&&h.attachEvent("onfocusin",function(){r=null})});
///* imageswitcher */(function(a){function b(){var h=parseInt(a(window).width());c.each(function(){var i=a(this);768>h?i.attr("src",i.attr("src").replace(e,d)):i.attr("src",i.attr("src").replace(d,e))})}var c=a(".js-image-switch"),d="@2x.",e="@1x.",g=!1;a(window).on({load:function(){b()},resize:function(){!1!=g&&clearTimeout(g),g=setTimeout(function(){b()},200)}})})(jQuery);


; (function ($) {


  /* hash jumper
  -------------------------------------------------- */
  if (location.hash) {
    setTimeout(function () {
      $("html, body").scrollTop(0);
      jump();
    }, 50);
  }

  var jump = function () {
    var target = location.hash;
    setTimeout(function () {
      $("html, body").animate({ scrollTop: $(target).offset().top - 80 }, 700, "swing");
    }, 1200);
  }


  /* load
  -------------------------------------------------- */
  $(window).on("load", function () {
    // fadepageの遅延処理
    setTimeout(function () {
      // fit text
      if (isUA.mobile) {
        $("body").fitText(3, {
          minFontSize: "12px",
          maxFontSize: "14px"
        });

        $(".yag-group__list-item dd").fitText(1.5, {
          minFontSize: "10px",
          maxFontSize: "12px"
        });

        $(".yag-group__heading").fitText(2.66, {
          minFontSize: "12px",
          maxFontSize: "16px"
        });
      }
    }, 0);
  });


  // $(function() {
  var replaceWidth = 768,
    resizeTimer = false,
    navH = "";
  ww = wh = dh = arrowB = elemH = headH = footH = winH = 0;

  /* load & resize
  -------------------------------------------------- */
  $(window).on("load resize", function () {
    ww = parseInt($(window).width());
    wh = window.innerHeight;
    dh = $(document).height();
    if (resizeTimer !== false) {
      clearTimeout(resizeTimer);
    }

    /* timer = 200
    ---------------------------------------- */
    resizeTimer = setTimeout(function () {
      /* < 768 [SP]
      ---------------------------------------- */
      if (ww < replaceWidth) {
        // ポップアップ用変数
        navH = $(".fixed-nav").outerHeight();
        elemH = $(".popup-group").outerHeight() + 66;
        footH = $(".site-footer").innerHeight();
        // ページトップ用変数
        arrowB = navH;
        // ヘッダーナビ
        headH = $(".main-menu--sp").height();

        /* popup reset
        ---------------------------------------- */
        if (!$(".fixed-nav-popup").hasClass("is-active")) {
          $(".fixed-nav-popup").css({
            bottom: 50,
            webkitTransform: "translate3d(0," + elemH + "px,0)",
            transform: "translate3d(0," + elemH + "px,0)",
          });
        }

        /* メインメニュー
        ---------------------------------------- */
        $(window).on("scroll", function () {
          var scroll = $(this).scrollTop();

          if (scroll > 0) {
            $(".main-menu--sp").css({
              webkitTransform: "translate3d(0,0,0)",
              transform: "translate3d(0,0,0)",
            });
          } else {
            $(".main-menu--sp").css({
              webkitTransform: "translate3d(0,-46px,0)",
              transform: "translate3d(0,-46px,0)",
            });
          }
        });

        /* hamburger
        ---------------------------------------- */
        $("#js_menu_trigger").on("click", function () {
          noScroll();
          $(".quick-nav")
            .css({ display: "block" })
            .delay(10)
            .queue(function () {
              $(this).addClass("is-active").dequeue();
            });
        });
        $(".quick-nav__close, quick-nav__list a").on("click", function () {
          isScroll();
          $(".quick-nav")
            .removeClass("is-active")
            .delay(500)
            .queue(function () {
              $(this).css({ display: "none" }).dequeue();
            });
        });

        /* swiper menu
        ---------------------------------------- */
        setTimeout(function () {
          var swiper = new Swiper(".swiper-container", {
            slidesPerView: "auto",
            freeMode: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              540: {
                slidesPerView: "auto",
              },
              767: {
                slidesPerView: 6,
              }
            },
          });
        }, 200);
      }
      /* < 768 [PC]
      ---------------------------------------- */
      else {
        // ポップアップ用変数
        navH = "auto";
        elemH = -$(".popup-group").outerHeight() - 88;
        footH = $(".site-footer").innerHeight() - 10;
        // ページトップ用変数
        arrowB = 20;
        // ヘッダーナビ
        headH = $(".site-header").height();

        /* popup reset
        ---------------------------------------- */
        $(".fixed-nav-popup").css({
          bottom: "auto",
          webkitTransform: "translate3d(0,-660px,0)",
          transform: "translate3d(0,-660px,0)",
        });

        /* header
        ---------------------------------------- */
        $(window).on("scroll", function () {
          var scroll = $(this).scrollTop();
          if (scroll > 0) {
            $(".site-header").css({
              boxShadow: "0 0 10px rgba(0,0,0,.2)",
            });
          } else {
            $(".site-header").css({
              boxShadow: "none",
            });
          }
        });

        /* href="tel:を無効にする
        ---------------------------------------- */
        $('a[href^="tel:"]').on("click", function (e) {
          e.preventDefault();
        });
      }
    }, 200);
  });

  /* ポップアップ処理
  ---------------------------------------- */
  $(window).on("load scroll", function () {
    if (window.innerHeight === document.documentElement.clientHeight) {
      winH = window.innerHeight;
    } else {
      winH = window.innerHeight;
    }
  });

  $(".js-popup-open").on("click", function () {
    var t = this,
      cls = "is-active";

    // is-firstは無条件に削除
    $(".open-tel").removeClass("is-first");

    // オープンさせるクラスの定義
    if ($(this).hasClass("open-reserve")) actClass = "popup-reserve";
    if ($(this).hasClass("open-tel")) actClass = "popup-tel";
    if ($(this).hasClass("open-group")) actClass = "popup-group";


    if ($(this).hasClass("open-group")) {
      var objH = $(".popup-group").outerHeight() + navH;
      if (winH < objH) {
        $(".popup-group").innerHeight(winH - navH);
      }
    }

    $(".js-popup-open").each(function () {
      if (t === this) {
        if ($(this).hasClass(cls)) {
          $(this).removeClass(cls);
          $("." + actClass)
            .removeClass(cls)
            .css({
              webkitTransform: "translate3d(0," + elemH + "px,0)",
              transform: "translate3d(0," + elemH + "px,0)",
            });
        } else {
          $(this).addClass(cls);
          $("." + actClass)
            .addClass(cls)
            .css({
              webkitTransform: "translate3d(0,0,0)",
              transform: "translate3d(0,0,0)",
            });
        }
      } else {
        $(this).removeClass(cls);
        $(".fixed-nav-popup")
          .not("." + actClass)
          .removeClass(cls)
          .css({
            webkitTransform: "translate3d(0," + elemH + "px,0)",
            transform: "translate3d(0," + elemH + "px,0)",
          });
      }
    });

    // クラス削除（閉じるボタン、ポップアップのリンク押下で無条件に全クラス削除）
    $(".js-popup-close, .fixed-nav-popup__anchor").on("click", function () {
      $(".fixed-nav-popup")
        .css({
          webkitTransform: "translate3d(0," + elemH + "px,0)",
          transform: "translate3d(0," + elemH + "px,0)",
        })
        .add($("[class*='open-']"))
        .removeClass(cls);
    });

    return false;

  });


})(jQuery);


/* functions
-------------------------------------------------- */
// スクロールを無効にする
function noScroll() {
  var scrollElement = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
  $(document).on(scrollElement, function (e) {
    e.preventDefault();
  });
  $(document).on("touchmove.noScroll", function (e) {
    e.preventDefault();
  });
}

// スクロールを再開させる
function isScroll() {
  var scrollElement = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
  $(document).off(scrollElement);
  $(document).off(".noScroll");
}
