// JavaScript Document





/* フリガナ自動入力 */

//フリガナ自動入力
$(function () {
    $.fn.autoKana('#name', '#namekana', {
        katakana: true  //true：カタカナ、false：ひらがな（デフォルト）
    });

});





/* クリックして次のステップを表示 */




$("input:radio[name='ご希望のピル']").on("change", function () {

    var checked_val = $("input:radio[name='ご希望のピル']:checked").val();

    $("#js-form-step01").removeClass("is-step-show");
    $("#js-form-step02").addClass("is-step-show");
    $("#js-value-pill").text(checked_val);


});


$("#js-to-step03").on("click", function () {
    let isEmpty = false;
    var zip_val = $("#zip").val();
    var address_val = $("#address").val();
    var name_val = $("#name").val();
    var namekana_val = $("#namekana").val();
    var tel_val = $("#tel").val();
    var mail_val = $("#mail").val();
    var line_val = $("#line_id").val();
    var year_val = $("#year").val();
    var month_val = $("[name='生年月日(月)'] option:selected").val();
    var day_val = $("[name='生年月日(日)'] option:selected").val();
    var sex_val = $("[name='性別'] option:selected").val();
    var date_val = $("#date").val();
    var time1_val = $("[name='希望時間(時)'] option:selected").val();
    var time2_val = $("[name='希望時間(分)'] option:selected").val();

    var sc_pos = $("#js-form-step03").offset().top;



    $('input,select').each(function () {
        var input_name = $(this).attr("name");
        if ($(this).val() === '') {
            $(this).focus();
            isEmpty = true;
            return false;
        }
    });
    if (isEmpty)
        return false;

    else
        $("#js-form-step02").removeClass("is-step-show");
    $("#js-form-step03").addClass("is-step-show");

    sc_pos = $("#js-form-step03").offset().top;
    $("html,body").animate({ scrollTop: sc_pos }, '500');

    $("#js-value-zip").text(zip_val);
    $("#js-value-address").text(address_val);
    $("#js-value-name").text(name_val);
    $(".js-value-namekana").text(namekana_val);
    $("#js-value-tel").text(tel_val);
    $("#js-value-mail").text(mail_val);
    $("#js-value-sex").text(sex_val);
    $("#js-value-date").text(date_val);
    $("#js-value-time01").text(time1_val);
    $("#js-value-time02").text(time2_val);
    $("#js-value-year").text(year_val);
    $("#js-value-month").text(month_val);
    $("#js-value-day").text(day_val);
    $("#js-value-lineID").text(line_val);
});

/* フォームバリデーションサンプル */


$(function () {
    $("#js-to-step03").on("click", function () {


        //エラーの初期化
        $("p.error-massege").remove();
        //必須項目のチェック
        $("input").each(function () {
            if ($(this).val() == "") {
                $(this).parent().append("<p class='error-massege'>必須項目です</p>")
            }
        })

        $("select").each(function () {
            if ($(this).val() == "") {
                $(this).parent().append("<p class='error-massege'>選択してください</p>")
            }
        })
        //エラーの際の処理
        if ($("p.error").size() > 0) {
            $("p.error-massege").parent().addClass("error");
            $('html,body').animate({ scrollTop: $("p.error-massege:first").offset().top - 40 }, 'slow');
            return false;
        }


    })
})



/* 生年月日を選択したら年齢自動入力 */

$(function () {
    $("select").change(BDcal);
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
        $('#age').val(myYear + "歳");
    }
});




$("#js-to-step04").on("click", function () {
    $("#js-form-step03").removeClass("is-step-show");
    $("#js-form-step04").addClass("is-step-show");

});


/* 戻るをクリックして前のステップを表示 */


$("#js-prev-step01").on("click", function () {
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
});

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

document.getElementById("form").onkeypress = (e) => {
    // form1に入力されたキーを取得
    const key = e.keyCode || e.charCode || 0;
    // 13はEnterキーのキーコード
    if (key == 13) {
        // アクションを行わない
        e.preventDefault();
    }
}
