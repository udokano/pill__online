var Cnt = jQuery('#ContactInput'), //入力部分
    Cfm = jQuery('#ContactConfirm'), //確認部分
    BtCfm = jQuery('#BtConfirm'), //確認ボタン
    BtSnd = jQuery('#BtSend input'),//送信ボタン
    BtCsl = jQuery('#BtCancel'),//キャンセルボタン
    CntItem = jQuery('#ContactInput .CntItem'),//入力の包容タグ
    CfmItem = jQuery('#ContactConfirm .CfmItem');//確認の包容タグ

Cfm.css("display", "none");

/* 確認ボタン
------------------------------------------------------------------*/
BtCfm.click(function () {//確認ボタンを押したとき、
    CfmItem.text(' '); //確認の中身をリセット
    $Error = ''; //エラーのリセット
    CntItem.ConfirmInput(); //.CntItemを対象として確認の関数を実行


    $("#js-form-step07 .error-massege").remove();
    //選択または入力してなかったらエラーメッセージ表示
    $("#js-form-step07 .required").each(function () {
        if ($(this).val() === "") {
            $(this).parent().append("<p class='error-massege'>必須項目です</p>");
        }
    });
    //ラジオボタンのチェック
    $(":radio").filter("#js-form-step07 .required").each(function () {
        if ($("input[name=" + $(this).attr("name") + "]:checked").size() == 0) {
            $(this).parent().prepend("<p class='error-massege'>選択してください</p>")
        }
    });
    //チェックボタンのチェック
    $(":checkbox").filter("#js-form-step07 .required").each(function () {
        if ($("input[name=" + $(this).attr("name") + "]:checked").size() == 0) {
            $(this).parent().prepend("<p class='error-massege'>選択してください</p>")
        }
    });
    //エラーメッセージが存在していたら、最初のエラーメッセージへスクロール
    if ($('#js-form-step07 .error-massege').length) {
        $('html,body').animate({ scrollTop: $("#js-form-step07 .error-massege:first").offset().top - 80 });
    }
    //エラーがなければ、次のステップへ進む
    else {
        $("#js-form-step07").removeClass("is-step-show");
        Cnt.css("display", "none"); //入力部分と確認部分を切り替え
        Cfm.css("display", "block");
        //Cfm.addClass("is-confilm-show");
        pos_step_conf = Cfm.offset().top;
        $("html,body").animate({ scrollTop: pos_step_conf }, '500');

    }

    sddd();
});
/* キャンセルボタン
------------------------------------------------------------------*/
BtCsl.click(function () { //キャンセルボタンを押したとき、
    Cnt.css("display", "block"); //入力部分と確認部分を切り替え
    Cfm.css("display", "none");
    pos_form = $("#js-form-step07").offset().top;
    $("html,body").animate({ scrollTop: pos_form }, '500');
});
/* 戻るボタンの動き
------------------------------------------------------------------*/

$("#js-prev-form").on("click", function () {
    Cnt.css("display", "block");
    Cfm.css("display", "none");
    $("#js-form-step07").addClass("is-step-show");
    Cfm.removeClass("is-confilm-show");
    pos_form = Cnt.offset().top;
    $("html,body").animate({ scrollTop: pos_form }, '500');
});
/* 確認画面へ反映させる関数
------------------------------------------------------------------*/
jQuery.fn.ConfirmInput = function (config) {
    return this.each(function (i, elem) { //.CntItemを一つずつ実行
        /*
        入力されたものを変数「CntVal」に代入
        ------------------------------------------------------------*/
        //<input type="text">の場合
        if ($(this).hasClass('CntInput')) {
            TargetForm = $(this).find('input');
            CntVal = TargetForm.val();
            //<input type="radio">の場合
        } else if ($(this).hasClass('CntRadio')) {
            TargetForm = $(this).find('input:checked');
            CntVal = TargetForm.val();
            //<input type="checkbox">の場合
        } else if ($(this).hasClass('CntCheck')) {
            TargetForm = $(this).find('input:checked');
            CntCheck = '';
            for (var i = 0; i < TargetForm.length; i++) {
                if (i != 0) { CntCheck += '、'; }
                CntCheck += '「' + TargetForm.eq(i).val() + '」';
            }
            CntVal = CntCheck;
            //<textarea>の場合
        } else if ($(this).hasClass('CntText')) {
            TargetForm = $(this).find('textarea');
            CntVal = TargetForm.val();
        }

        else if ($(this).hasClass('CntSelect')) {
            TargetForm = $(this).find('select option:selected').val();
            CntVal = TargetForm
        }
        /*
        入力部分のIDから関連する確認部分のIDへ「CntVal」を挿入
        ------------------------------------------------------------*/
        CntNum = $(this).attr('id').replace(/Cnt/g, ''); //IDを取得後「Cnt」をカット
        $('#Cfm' + CntNum).text(CntVal);


        /*
        メールアドレスの欄の場合(.CntMailの場合)、形式をチェック
        ------------------------------------------------------------*/
        if ($(this).hasClass('CntMail') && !CntVal.match(/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/)) {
            alert('メールアドレスの形式が正しくありません。');
            $Error = 'error'; //$Errorに中身を入れる
            return false;
        }
        /*
        必須(.Require)に中身が入っていない場合
        ------------------------------------------------------------*/
        else if ($(this).hasClass('Require') && CntVal == '') {
            alert('必須項目が入力されていません。');
            $Error = 'error';
            return false;
        }
    });


};



sddd = function () {

    //確認画面の中で、選択または入力されてない項目のランを非表示

    $(".CfmItem").each(function () {

        var textlength = $(this).text().length;
        console.log(textlength);

        if (textlength === 0) {
            $(this).parents(".conf__row").css("display", "none");
        }

        else if (textlength === 1) {
            $(this).parents(".conf__row").css("display", "none");
        }

        else {
            $(this).parents(".conf__row").css("display", "table-row");
        }
    });
};
