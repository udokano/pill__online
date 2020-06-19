// JavaScript Document





/* フリガナ自動入力 */

//フリガナ自動入力
$(function () {
    $.fn.autoKana('#name', '#namekana', {
        katakana: true  //true：カタカナ、false：ひらがな（デフォルト）
    });

});


/*
プルダウン項目自動生成
----------------------------------------*/

//ソースコードが長くなるので、JSで自動生成

/* ------
西暦
---------*/

//生年月日

var time = new Date();
var full__year = time.getFullYear();

for (var i = 1960; i <= full__year; i++) {
    $('#year').append('<option value="' + i + '年">' + i + '</option>');
}

//最近の月経

/* for (var i = 1960; i <= 2020; i++) {
    $('#year02').append('<option value="' + i + '年">' + i + '</option>');
} */

for (var i = 1960; i <= full__year; i++) {
    $('#year02').append('<option value="' + i + '年">' + i + '</option>');
}

/* for (var i = 1988; i <= 1960; i--) {
    $('#year02').prepend('<option value="' + i + '年">' + i + '</option>');
} */


//その前の月経

for (var i = 1960; i <= full__year; i++) {
    $('#year03').append('<option value="' + i + '年">' + i + '</option>');
}

//1989年の前にからのOPTION追加

$("#year option[value='1989年']").after('<option value="" selected>--</option>');

//最近の月経、その前の月経の最新年をSELECTED

$(".b_year_menopause").val(full__year + '年');



/* ------
月
---------*/

//1～12の数字を生成

//生年月日（月）
for (var i = 1; i <= 12; i++) {
    $('#month').append('<option value="' + i + '月">' + i + '</option>');
}

//最近の月経（月）
for (var i = 1; i <= 12; i++) {
    $('#month02').append('<option value="' + i + '月">' + i + '</option>');
}

//その前の月経（月）
for (var i = 1; i <= 12; i++) {
    $('#month03').append('<option value="' + i + '月">' + i + '</option>');
}

//不正出血（月）
for (var i = 1; i <= 12; i++) {
    $('#month04').append('<option value="' + i + '月">' + i + '</option>');
}

/* ------
日
---------*/

//1～31の数字を生成

/* 生年月日（日） */
for (var i = 1; i <= 31; i++) {
    $('#day').append('<option value="' + i + '日">' + i + '</option>');
}

for (var i = 1; i <= 31; i++) {
    $('#day02').append('<option value="' + i + '日">' + i + '</option>');
}

for (var i = 1; i <= 31; i++) {
    $('#day03').append('<option value="' + i + '日">' + i + '</option>');
}

for (var i = 1; i <= 31; i++) {
    $('#day04-01').append('<option value="' + i + '日~">' + i + '</option>');
}


//初潮開始年齢

for (var i = 10; i <= 16; i++) {
    $('#first-menstruation').append('<option value="' + i + '歳頃">' + i + '歳頃' + '</option>');
}

//閉経した年齢

for (var i = 40; i <= 60; i++) {
    $('#menopause-year').append('<option value="' + i + '歳頃">' + i + '歳頃' + '</option>');
}

//生理持続期間

for (var i = 1; i <= 100; i++) {
    $('#start03').append('<option value="' + i + '日~">' + i + '日' + '</option>');
}

for (var i = 1; i <= 100; i++) {
    $('#end03').append('<option value="' + i + '日間">' + i + '日' + '</option>');
}




//1~100の数字を生成

/* 不正出血終了日 */

for (var i = 1; i <= 90; i++) {
    $('#day04-02').append('<option value="' + i + '日間">' + i + '</option>');
}


//子どもの人数

for (var i = 1; i <= 10; i++) {
    $('#child').append('<option value="' + i + '人">' + i + '人' + '</option>');
}

//結婚した年齢

for (var i = 16; i <= 60; i++) {
    $('#age-wd01').append('<option value="' + i + '歳">' + i + '歳' + '</option>');
}

$("#age-wd01 option[value='29歳']").after('<option value="" selected>--</option>');

//夫の年齢

for (var i = 18; i <= 60; i++) {
    $('#age-wd02').append('<option value="' + i + '歳">' + i + '歳' + '</option>');
}

$("#age-wd02 option[value='29歳']").after('<option value="" selected>--</option>');

//順調な人開始・終了

for (var i = 1; i <= 100; i++) {
    $('#start01').append('<option value="' + i + '日~">' + i + '日' + '</option>');
}

for (var i = 1; i <= 100; i++) {
    $('#end01').append('<option value="' + i + '日周期">' + i + '日' + '</option>');
}

//不順な人開始・終了

for (var i = 1; i <= 100; i++) {
    $('#start02').append('<option value="' + i + '日~">' + i + '日' + '</option>');
}

for (var i = 1; i <= 100; i++) {
    $('#end02').append('<option value="' + i + '日周期">' + i + '日' + '</option>');
}



/* クリックして次のステップを表示 */


$("input:radio[name='ご希望のピル(オンライン心療)']").on("change", function () {
    $("#js-form-step01-online").removeClass("is-step-show");
    $("#js-form-step02").addClass("is-step-show");
});




$("input:radio[name='来院歴']").on("change", function () {

    var checked_val = $("input:radio[name='来院歴']:checked").val();

    if ($("[value='ある']").prop("checked")) {

        $("#js-form-step02").removeClass("is-step-show");
        $("#js-form-step02-01").addClass("is-step-show");
    }

    if ($("[value='なし']").prop("checked")) {
        $("#js-form-step02").removeClass("is-step-show");
        $("#js-form-step02-02").addClass("is-step-show");
    }
});


/* エリア選択したら各エリアの予約フォームへジャンプ */


$("input:radio[name='エリア選択']").on("change", function () {

    if ($("[value='北海道エリア']").prop("checked")) {
        window.open(
            "reserve/sapporo.html",
            "_blank"
        );
    }

    if ($("[value='関東エリア']").prop("checked")) {
        window.open(
            "reserve/kanto.html",
            "_blank"
        );
    }

    if ($("[value='関西エリア']").prop("checked")) {
        window.open(
            "reserve/kansai.html",
            "_blank"
        );
    }

    if ($("[value='九州エリア']").prop("checked")) {
        window.open(
            "reserve/kyushu.html",
            "_blank"
        );
    }

});





/* 選択肢次第で表示が切り替わるエリア */


/* 片方選択したら非表示項目表示 */

$("input[name='閉経']").on("change", function () {

    //val01選択で非表示項目を表示
    if ($("[value='してる']").prop("checked")) {

        $(".menopause-yes-field").css("display", "flex");
        $(".menopause-no-field").css("display", "none");
        /*  $(".menopause-no-field").removeClass("is-field-show");
         $(".menopause-yes-field").addClass("is-field-show"); */
        $(this).parents('.form__row').nextAll(".hidden-field").css("display", "none");
        $(this).parents('.form__row').nextAll(".menopause-no-field, .hidden-field").find(".hidden-input-menopause").removeClass("required");
        $(".menopause-yes-field").find(".hidden-input").addClass("required");
        //$(".menopause-no-field").css("display", "none");
        $(".menopause-no-field").find(".hidden-input").removeClass("required");
    }
    //val01選択で非表示項目を隠す
    if ($("[value='してない']").prop("checked")) {
        $(".menopause-no-field").css("display", "flex");
        $(".menopause-yes-field").css("display", "none");
        /*  $(".menopause-no-field").addClass("is-field-show");
         $(".menopause-yes-field").removeClass("is-field-show"); */
        $(this).parents('.form__row').nextAll(".menopause-no-field").find(".hidden-input-menopause").addClass("required");
        $(".menopause-no-field").find(".hidden-input").addClass("required");
        //$(".menopause-yes-field").css("display", "none");
        $(".menopause-yes-field").find(".hidden-input").removeClass("required");
    }
});

$("input[name='生理痛']").on("change", function () {

    //val01選択で非表示項目を表示
    if ($("[value='有り']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "flex");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").addClass("required");

    }
    //val01選択で非表示項目を隠す
    if ($("[value='無し']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "none");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").removeClass("required");
    }
});


$("input[name='血縁者の疾病']").on("change", function () {

    //val01選択で非表示項目を表示
    if ($("[value='疾病あり']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "flex");
        // $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").addClass("required");

    }
    //val01選択で非表示項目を隠す
    if ($("[value='疾病なし']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "none");
        //$(this).parents('.form__row').next(".hidden-field").find(".hidden-input").removeClass("required");
    }
});

$("input[name='既住歴の有無']").on("change", function () {

    //val01選択で非表示項目を表示
    if ($("[value='既住歴有り']").prop("checked")) {
        $(".resident-history-yes").css("display", "flex");
        // $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").addClass("required");

    }
    //val01選択で非表示項目を隠す
    if ($("[value='既住歴無し']").prop("checked")) {
        $(".resident-history-yes").css("display", "none");
        //$(this).parents('.form__row').next(".hidden-field").find(".hidden-input").removeClass("required");
    }
});


/* 選択肢次第で表示が切り替わるエリア　選択内容で次の内容変化 */

$(".radio-p03").on("change", function () {

    //val03選択で対応する選択肢表示
    if ($(".radio-val03").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "flex");
        $(this).parents('.form__row').next().next(".hidden-field").css("display", "none");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").addClass("required");
        $(this).parents('.form__row').next().next(".hidden-field").find(".hidden-input").removeClass("required");

    }
    //val04選択で対応する選択肢表示
    if ($(".radio-val04").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "none");
        $(this).parents('.form__row').next().next(".hidden-field").css("display", "flex");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").removeClass("required");
        $(this).parents('.form__row').next().next(".hidden-field").find(".hidden-input").addClass("required");
    }
});


$("input[name='未婚or既婚']").on("change", function () {

    //val03選択で対応する選択肢表示
    if ($("[value='未婚']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "flex");
        $(this).parents('.form__row').next().next(".hidden-field").css("display", "none");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").addClass("required");
        $(this).parents('.form__row').next().next(".hidden-field").find(".hidden-input").removeClass("required");

    }
    //val04選択で対応する選択肢表示
    if ($("[value='既婚']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "none");
        $(this).parents('.form__row').next().next(".hidden-field").css("display", "flex");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").removeClass("required");
        $(this).parents('.form__row').next().next(".hidden-field").find(".hidden-input").addClass("required");
    }
});


$("input[name='出産の経験']").on("change", function () {

    //val03選択で対応する選択肢表示
    if ($("[value='出産の経験有り']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").next(".hidden-field").css("display", "flex");
        $(this).parents('.form__row').next(".hidden-field").css("display", "flex");
        $(this).parents('.form__row').next(".hidden-field").next(".hidden-field").find(".hidden-input").addClass("required");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").addClass("required");

    }
    //val04選択で対応する選択肢表示
    if ($("[value='出産の経験無し']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "none");
        $(this).parents('.form__row').next(".hidden-field").next(".hidden-field").css("display", "none");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").removeClass("required");
        $(this).parents('.form__row').next(".hidden-field").next(".hidden-field").find(".hidden-input").removeClass("required");

    }
});


$("input[name='内科病名[]']").on("change", function () {

    //その他を選択したら病名入力欄表示
    if ($("#internist11").prop("checked")) {
        // $(this).parents('.form__row').next(".hidden-field").css("display", "flex");
        //$(this).parents('.form__row').next(".hidden-field").find(".hidden-input").addClass("required");
        $(".sick-hidden-name").css("display", "block");
        $(".sick-hidden-name .hidden-input").addClass("required");

    }
    //そのた以外
    else {
        //$(this).parents('.form__row').next(".hidden-field").css("display", "none");
        //$(this).parents('.form__row').next(".hidden-field").find(".hidden-input").removeClass("required");
        $(".sick-hidden-name").css("display", "none");
        $(".sick-hidden-name .hidden-input").removeClass("required");

    }
});


$("input[name='手術の経験']").on("change", function () {

    //val03選択で対応する選択肢表示
    if ($("[value='手術の経験有り']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "flex");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").addClass("required");

    }
    //val04選択で対応する選択肢表示
    if ($("[value='手術の経験無し']").prop("checked")) {
        $(this).parents('.form__row').next(".hidden-field").css("display", "none");
        $(this).parents('.form__row').next(".hidden-field").find(".hidden-input").removeClass("required");

    }
});




/* 生年月日を選択したら年齢自動入力 */

$(function () {
    $(".select").change(BDcal);
    function BDcal() {
        var y = parseInt($('#year').val(), 10);
        var m = parseInt($('#month').val(), 10);
        var d = parseInt($('#day').val(), 10);

        myNow = new Date();
        myBirth = new Date(1970, 0, d);
        myBirth.setTime(myNow.getTime() - myBirth.getTime());

        myYear = myBirth.getUTCFullYear() - y;
        myMonth = myBirth.getUTCMonth() - (m - 1);

        if (myMonth < 0) {
            myYear--;
            myMonth += 12;
        }

        myDate = myBirth.getUTCDate();
        $('#age').val(myYear);
    }
});

/* 各ステップのスクロールポジション取得 */
var pos_step02_02 = $("#js-form-step02").offset().top;
var pos_step03 = $("#js-form-step03").offset().top;
var pos_step04 = $("#js-form-step04").offset().top;
//var pos_step05 = $("#js-form-step05").offset().top;
var pos_step06 = $("#js-form-step07").offset().top;



/* フォームステップバリデーション */

//日時、希望クリニック

$(function () {

    //リアルタイムで入力内容をチェック
    /*  $("#js-form-step02-02 .required").blur(function () {
         if ($(this).val() == "") {
             //$(this).siblings('.error_required').text("※入力必須項目です");
             $(this).next().remove(".error-massege");
             $(this).parent().append("<p class='error-massege'>必須項目です</p>");

         } else {
             //$(this).siblings('.error_required').text("");
             //$(this).next(".required").focus();
             $(this).next().remove(".error-massege");
         }
     }); */

    //送信ボタンのの必須項目入力チェック
    $("#js-to-step04").on('click', function () {
        //エラーの初期化
        $("#js-form-step02 .error-massege").remove();
        //選択または入力してなかったらエラーメッセージ表示
        $("#js-form-step02 .required").each(function () {
            if ($(this).val() === "") {
                $(this).parent().append("<p class='error-massege'>必須項目です</p>");
                //$(this).siblings('.error_required').text("※必須項目です");
                //$(this).addClass("error__active");

                //$('html,body').animate({ scrollTop: $(".error-massege:first").offset().top });
                //return false;
                //$(this).focus();
                //return false;
            }

            /*   else {
                  $("#js-form-step04").addClass("is-step-show");
              } */
        });
        //エラーメッセージが存在していたら、最初のエラーメッセージへスクロール
        if ($('#js-form-step02 .error-massege').length) {
            $('html,body').animate({ scrollTop: $("#js-form-step02-02 .error-massege:first").offset().top - 45 });
        }
        //エラーがなければ、次のステップへ進む
        else {
            $("#js-form-step02").removeClass("is-step-show");
            $("#js-form-step03").addClass("is-step-show");
            pos_step03 = $("#js-form-step03").offset().top;
            $("html,body").animate({ scrollTop: pos_step03 }, '500');
        }

        /*  if ($(".required").val() == "") {
             error_scpos = $(".error-massege:first");
             $('html,body').animate({ scrollTop: error_scpos.offset().top });
             return false;
         } */
    });

});

/* 戻るボタンのクリックで前のステップへ戻る */


$("#js-prev-step02").on("click", function () {
    $("#js-form-step03").removeClass("is-step-show");
    pos_step02 = $("#js-form-step02").offset().top;
    $("html,body").animate({ scrollTop: pos_step02 }, '500');
    $("#js-form-step02").addClass("is-step-show");
});

$("#js-prev-step03").on("click", function () {
    $("#js-form-step03").removeClass("is-step-show");
    pos_step03 = $("#js-form-step02").offset().top;
    $("html,body").animate({ scrollTop: pos_step03 }, '500');
    $("#js-form-step02").addClass("is-step-show");
});

$("#js-prev-step04").on("click", function () {
    $("#js-form-step04").removeClass("is-step-show");
    pos_step03 = $("#js-form-step03").offset().top;
    $("html,body").animate({ scrollTop: pos_step03 }, '500');
    $("#js-form-step03").addClass("is-step-show");
});

$("#js-prev-step05").on("click", function () {
    $("#js-form-step05").removeClass("is-step-show");
    pos_step03 = $("#js-form-step04").offset().top;
    $("html,body").animate({ scrollTop: pos_step03 }, '500');
    $("#js-form-step04").addClass("is-step-show");
});

$("#js-prev-step06").on("click", function () {
    $("#js-form-step07").removeClass("is-step-show");
    pos_step03 = $("#js-form-step04").offset().top;
    $("html,body").animate({ scrollTop: pos_step03 }, '500');
    $("#js-form-step04").addClass("is-step-show");
});



//基本情報

$(function () {

    //リアルタイムで入力内容をチェック
    /*   $("body").on("blur", "#js-form-step03 .required", function () {
          if ($(this).val() == "") {
              $(this).nextAll().remove(".error-massege");
              $(this).parent().append("<p class='error-massege'>必須項目です</p>");

          } else {
             $(this).nextAll().remove(".error-massege");
          }
      }); */

    //送信ボタンのの必須項目入力チェック
    $("#js-to-step05").on('click', function () {
        //エラーの初期化
        $("#js-form-step02 .error-massege").remove();
        //選択または入力してなかったらエラーメッセージ表示
        $("#js-form-step02 .required").each(function () {
            if ($(this).val() === "") {
                $(this).parent().append("<p class='error-massege'>必須項目です</p>");
            }
        });
        //エラーメッセージが存在していたら、最初のエラーメッセージへスクロール
        if ($('#js-form-step02 .error-massege').length) {
            $('html,body').animate({ scrollTop: $("#js-form-step02 .error-massege:first").offset().top - 80 });
        }
        //エラーがなければ、次のステップへ進む
        else {
            $("#js-form-step02").removeClass("is-step-show");
            $("#js-form-step03").addClass("is-step-show");
            pos_step04 = $("#js-form-step03").offset().top;
            $("html,body").animate({ scrollTop: pos_step04 }, '500');
        }
    });

});


//生理について

$(function () {

    //リアルタイムで入力内容をチェック
    /* $("#js-form-step04 .required").blur(function () {
        if ($(this).val() == "") {
            $(this).next().remove(".error-massege");
            $(this).parent().append("<p class='error-massege'>必須項目です</p>");

        } else {
            $(this).next().remove(".error-massege");
        }
    });
    //ラジオボタン版
    $("#js-form-step04 input[type='radio']").filter(".required").change(function () {
        if ($(":radio[name=" + $(this).attr("name") + "]:checked").size() == 0) {
            $(this).parent().prepend("<p class='error-massege'>選択してください</p>");
        }
        else {
            $(this).prev().remove(".error-massege");
        }
    }); */

    //送信ボタンのの必須項目入力チェック
    $("#js-to-step06").on('click', function () {
        //エラーの初期化
        $("#js-form-step03 .error-massege").remove();
        //選択または入力してなかったらエラーメッセージ表示
        $("#js-form-step03  .required").each(function () {
            if ($(this).val() === "") {
                $(this).parent().append("<p class='error-massege'>必須項目です</p>");
            }
        });

        //ラジオボタンのチェック
        $(":radio").filter("#js-form-step03 .required").each(function () {
            if ($("input[name=" + $(this).attr("name") + "]:checked").size() == 0) {
                $(this).parent().prepend("<p class='error-massege'>選択してください</p>")
            }
        });

        //エラーメッセージが存在していたら、最初のエラーメッセージへスクロール
        if ($('#js-form-step03 .error-massege').length) {
            $('html,body').animate({ scrollTop: $("#js-form-step03 .error-massege:first").offset().top - 80 });
        }
        //エラーがなければ、次のステップへ進む
        else {
            $("#js-form-step03").removeClass("is-step-show");
            $("#js-form-step04").addClass("is-step-show");
            pos_step05 = $("#js-form-step04").offset().top;
            $("html,body").animate({ scrollTop: pos_step05 }, '500');
        }
    });

});

/* END */

//結婚・家族について

$(function () {

    //リアルタイムで入力内容をチェック
    /* $("#js-form-step05 > .required").blur(function () {
        if ($(this).val() == "") {
            $(this).next().remove(".error-massege");
            $(this).parent().append("<p class='error-massege'>必須項目です</p>");

        } else {
            $(this).next().remove(".error-massege");
        }
    });
    //ラジオボタン版
    $("#js-form-step05 > input[type='radio']").filter(".required").change(function () {
        if ($(":radio[name=" + $(this).attr("name") + "]:checked").size() == 0) {
            $(this).parent().prepend("<p class='error-massege'>選択してください</p>");
        }
        else {
            $(this).prev().remove(".error-massege");
        }
    }); */

    //送信ボタンのの必須項目入力チェック
    $("#js-to-step07").on('click', function () {
        //エラーの初期化
        $("#js-form-step04 .error-massege").remove();
        //選択または入力してなかったらエラーメッセージ表示
        $("#js-form-step04 .required").each(function () {
            if ($(this).val() === "") {
                $(this).parent().append("<p class='error-massege'>必須項目です</p>");
            }
        });

        //ラジオボタンのチェック
        $("input[type='radio']").filter("#js-form-step04  .required").each(function () {
            if ($("input[name=" + $(this).attr("name") + "]:checked").size() == 0) {
                $(this).parent().prepend("<p class='error-massege'>選択してください</p>")
            }
        });

        //エラーメッセージが存在していたら、最初のエラーメッセージへスクロール
        if ($('#js-form-step04 .error-massege').length) {
            $('html,body').animate({ scrollTop: $("#js-form-step04 .error-massege:first").offset().top - 80 });
        }
        //エラーがなければ、次のステップへ進む
        else {
            $("#js-form-step04").removeClass("is-step-show");
            $("#js-form-step07").addClass("is-step-show");
            pos_step06 = $("#js-form-step07").offset().top;
            $("html,body").animate({ scrollTop: pos_step06 }, '500');
        }
    });

});

//出産について

$(function () {

    //リアルタイムで入力内容をチェック
    /*  $("#js-form-step06 > .required").blur(function () {
         if ($(this).val() == "") {
             $(this).next().remove(".error-massege");
             $(this).parent().append("<p class='error-massege'>必須項目です</p>");

         } else {
             $(this).next().remove(".error-massege");
         }
     });
     //ラジオボタン版
     $("#js-form-step06 > input[type='radio']").filter(".required").change(function () {
         if ($(":radio[name=" + $(this).attr("name") + "]:checked").size() == 0) {
             $(this).parent().prepend("<p class='error-massege'>選択してください</p>");
         }
         else {
             $(this).prev().remove(".error-massege");
         }
     }); */

    //送信ボタンのの必須項目入力チェック
    $("#js-to-step08").on('click', function () {
        //エラーの初期化
        $("#js-form-step05 .error-massege").remove();
        //選択または入力してなかったらエラーメッセージ表示
        $("#js-form-step05 .required").each(function () {
            if ($(this).val() === "") {
                $(this).parent().append("<p class='error-massege'>必須項目です</p>");
            }
        });

        //ラジオボタンのチェック
        $("input[type='radio']").filter("#js-form-step05  .required").each(function () {
            if ($("input[name=" + $(this).attr("name") + "]:checked").size() == 0) {
                $(this).parent().prepend("<p class='error-massege'>選択してください</p>")
            }
        });

        //エラーメッセージが存在していたら、最初のエラーメッセージへスクロール
        if ($('#js-form-step05 .error-massege').length) {
            $('html,body').animate({ scrollTop: $("#js-form-step05 .error-massege:first").offset().top - 45 });
        }
        //エラーがなければ、次のステップへ進む
        else {
            $("#js-form-step05").removeClass("is-step-show");
            $("#js-form-step07").addClass("is-step-show");
            pos_step07 = $("#js-form-step07").offset().top;
            $("html,body").animate({ scrollTop: pos_step07 }, '500');
        }
    });

});

//既住歴ついて

$(function () {

    //リアルタイムで入力内容をチェック
    /* $("#js-form-step07 .required").blur(function () {
        if ($(this).val() == "") {
            $(this).next().remove(".error-massege");
            $(this).parent().append("<p class='error-massege'>必須項目です</p>");

        } else {
            $(this).next().remove(".error-massege");
        }
    });
    //ラジオボタン版
    $("#js-form-step07 input[type='radio']").filter(".required").change(function () {
        if ($(":radio[name=" + $(this).attr("name") + "]:checked").size() == 0) {
            $(this).parent().prepend("<p class='error-massege'>選択してください</p>");
        }
        else {
            $(this).prev().remove(".error-massege");
        }
    }); */

    //送信ボタンのの必須項目入力チェック
    $("#js-to-confilm").on('click', function () {
        //エラーの初期化
        $("#js-form-step07 .error-massege").remove();
        //選択または入力してなかったらエラーメッセージ表示
        $("#js-form-step07 .required").each(function () {
            if ($(this).val() === "") {
                $(this).parent().append("<p class='error-massege'>必須項目です</p>");
            }
        });

        //ラジオボタンのチェック
        $("input[type='radio']").filter("#js-form-step07 .required").each(function () {
            if ($("input[name=" + $(this).attr("name") + "]:checked").size() == 0) {
                $(this).parent().prepend("<p class='error-massege'>選択してください</p>")
            }
        });

        //エラーメッセージが存在していたら、最初のエラーメッセージへスクロール
        if ($('#js-form-step07 .error-massege').length) {
            $('html,body').animate({ scrollTop: $("#js-form-step06 .error-massege:first").offset().top - 80 });
            return false;
        }
        //エラーがなければ、次のステップへ進む
        else {
            return true;
        }
    });

});



/* 戻るをクリックして前のステップを表示 */


/* $("#js-prev-step01").on("click", function () {
    $("#js-form-step02").removeClass("is-step-show");
    $("#js-form-step01").addClass("is-step-show");
});

$("#js-prev-step02").on("click", function () {
    $("#js-form-step03").removeClass("is-step-show");
    $("#js-form-step02").addClass("is-step-show");
});

$("#js-prev-step03").on("click", function () {
    $("#js-form-step04").removeClass("is-step-show");
    $("#js-form-step03").addClass("is-step-show");
}); */

/* フォームを閉じる */

$(".js-form-close").on("click", function () {
    $("#js-form").removeClass("is-form-show");
    $("body").removeClass("is-hidden");
});


/* 日付選択 */


$('#date').datepicker({
    dateFormat: 'yy年mm月dd日',
    minDate: 0,
    maxDate: 120,
    autoclose: true,
    showOtherMonths: true,
    selectOtherMonths: true
});




document.getElementById("visit-form").onkeypress = (e) => {
    // form1に入力されたキーを取得
    const key = e.keyCode || e.charCode || 0;
    // 13はEnterキーのキーコード
    if (key == 13) {
        // アクションを行わない
        e.preventDefault();
    }
}
