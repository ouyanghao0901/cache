$(function () {
    $("#ckAll").click(function () {
        var flag = $(this).prop("checked");
        $(".ck").prop("checked", flag);
    });
    $(".ck").click(function () {
        $(this).each(function (index, item) {
            if (!$(item).prop("checked")) {
                $("#ckAll").prop("checked", false);
            } else {
                $("#ckAll").prop("checked", true);
            }
        });
    });

    $("[data-del]").click(function () {
        if (confirm("你确定要删除吗?")) {
            var id = $(this).data();
            $.get("/user_goods_car/removeDoods", { id }, function (data) {
                data == "ok" ? location.reload() : layer.msg("删除失败");
            });
        }
    });
    var zj = 0;
    $(".jg").each(function (index, item) {
        var jgstr = $(this)
            .text()
            .trim();
        var jg = Number(jgstr.substr(1));
        zj += jg;
    });
    $(".hj>span").text(zj);
});
