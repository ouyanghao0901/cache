$(function () {
    $(".jian").click(function () {
        var s = Number($(".spsl").val());
        if (s > 1) {
            s--;
            $(".spsl").val(s);
            $(".num").text(s);
            var dj = $(".dj").text();
            var num = $(".num").text();
            $(".zj").text("￥" + dj * num);
        }
    });
    $(".jia").click(function () {
        var s = Number($(".spsl").val());
        s++;
        if (s > 10) {
            layer.msg("商品数量已达上限");
            return;
        }
        $(".spsl").val(s);
        $(".num").text(s);
        var dj = $(".dj").text();
        var num = $(".num").text();
        $(".zj").text("￥" + dj * num);
    });
    $(".addressbox").click(function () {
        $(".tipimg")
            .stop()
            .fadeIn();
        $(".zz").css("display", "block");
    });
    $(".zz").click(function () {
        $(".tipimg")
            .stop()
            .fadeOut();
        $(this).css("display", "none");
    });
});
