// JavaScript Document


//ハンバーガーメニュー

$("#js-trigger").on("click", function () {
  var header_height = $(".header").outerHeight();
  $(this).toggleClass("is-close");
  $("#js-menu").toggleClass("is-menu-open");
  $("#js-menu").css("top", header_height - 1);
});

$(".nav__link").on("click", function () {
  $("#js-trigger").removeClass("is-close");
  $("#js-menu").removeClass("is-menu-open");
});



//フッター固定にしたからラッパーにフッダーの高さを加える

var footerhight = $(".footer").innerHeight();
$(".wrapper").css("padding-bottom", footerhight);



//よくある質問アコーディオン
$(".js-ac-open").on("click", function () {
  $(this).find(".line_faq__list__question__text").toggleClass("line_faq__list__question__text--arrow__up");
  $(this).next().toggleClass("line_faq__list__answer--open");

});


//スムーススクロール
$('a[href^="#"]').click(function () {
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  $("html, body").animate(
    {
      scrollTop: target.offset().top
    },
    speed,
    "swing"
  );
  return false;
});
