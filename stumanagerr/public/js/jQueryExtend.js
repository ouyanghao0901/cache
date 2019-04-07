+function ($) {
    $.fn.extend({
        //placeholder提示
        addTips: function () {
            $(this).each(function (index, item) {//eslint-disable-line
                var text = $(this).parent().prev("label").text().trim();
                if (text == "" || text == null || text == undefined) {
                    text = $(this).data("lable");
                }
                $(this).attr("placeholder", "请输入" + text);
            });
        }
    });

    //加载动画
    $(".btn-submit-loading").click(function () {
        layer.load({ shade: [0.4, "#000"] });//eslint-disable-line
    });

    //全选
    $("#ckAll").click(function () {
        var flag = $(this).prop("checked");
        $(this).parentsUntil("table").find("[name='ck']").prop("checked", flag);
    });
    //eslint-disable-next-line
}(jQuery);