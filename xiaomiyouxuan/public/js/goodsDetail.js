$(function () {
    //获取某个商品加入购物车的数量
    var s = $(".spsl").val();
    $("input[name='goods_num']").val(s);
    $(".jian").click(function () {
        var s = Number($(".spsl").val());
        if (s > 1) {
            s--;
            $(".spsl").val(s);
            $("input[name='goods_num']").val(s);
        }
    });
    $(".jia").click(function () {
        var s = Number($(".spsl").val());
        s++;
        if(s>10){
            layer.msg("商品数量已达上限");
            return;
        }
        $(".spsl").val(s);
        $("input[name='goods_num']").val(s);
    });
    //获取某个商品加入购物车的规格
    $(".guige_box>div").click(function () {
        $(this)
            .css("color", "#845F3F")
            .siblings()
            .css("color", "");
        $(this)
            .css("border-color", "#845F3f")
            .siblings()
            .css("border-color", "");
            $("input[name='goods_guige']").val($(this).text().trim());
    });
    //左侧图片的切换
    $(".imgs_box>img").click(function () {
        var index = $(this).index();
        $(".left_box>img")
            .eq(index)
            .stop()
            .fadeIn()
            .siblings("img")
            .stop()
            .fadeOut();
    });
    //立即购买
    $(".pay_now").click(function(){
        if($("input[name='goods_guige']").val().length>0){
            $(".btn1").click();
        }else{
            layer.msg("请选择商品信息");
            return false;
        }
    });
    $(".shoucang").click(function () {
        $(this).toggleClass("sc");
    });
    $(".kf").click(function () {
        layer.msg("客服MM 正在赶来的路上...");
    });


    $(".addgoods").click(function () {
        let goodInfo_arr = [];
        $(".form1>input").each(function (index, item) {
            if ($("#inpguige").val().length<=0) {
                layer.msg("请选择商品规格");
                return false;
            } else {
                goodInfo_arr.push($(item).val());
            }
        });

        if (goodInfo_arr.length == 6) {
            $.get("/user_goods_car/addgoods?goodsinfo=" + goodInfo_arr.join("-"), function (data) {
                if(data=="noLogin"){
                    location.href="/user_info/login";
                }else if(data=='ok'){
                    layer.msg("加入购物车成功");
                }else{
                    layer.msg("加入购物车是失败");
                }
            });
        }
    });
});