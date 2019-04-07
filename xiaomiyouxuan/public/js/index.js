$(function () {
    //banner的控制
    $(".bn_leftbox>li").hover(
        function () {
            var index = $(this).index();
            $(".bn_leftbox>li")
                .eq(index)
                .css("background-color", "#684B34")
                .siblings()
                .css("background-color", "#845f3f");
            $(".bn_rightbox>div")
                .eq(index)
                .stop()
                .fadeIn()
                .siblings()
                .stop()
                .fadeOut();
        },
        function () {
            var index = $(this).index();

            $(".bn_rightbox>div")
                .eq(index)
                .stop()
                .fadeOut();
        }
    );

    $(".bn_rightbox>div").hover(
        function () {
            var index = $(this).index();
            $(this)
                .stop()
                .fadeIn()
                .siblings()
                .stop()
                .fadeOut();
            $(".bn_leftbox>li")
                .eq(index)
                .css("background-color", "#684B34")
                .siblings()
                .css("background-color", "#845f3f");
        },
        function () { }
    );

    $(".bnbox").hover(
        function () { },
        function () {
            var length = $(".bn_rightbox>div").length;
            $(".bn_rightbox>div")
                .eq(length - 1)
                .stop()
                .fadeIn();
            $(".bn_leftbox>li").css("background-color", "#845f3f");
        }
    );

//轮播图
    var index = 0;
    $(".dir-left").click(function(){
        index--;
        if(index<0){
            index=4;
        }
        change(index);
    });
    $(".dir-right").click(function(){
        index++;
        if(index>4){
            index=0;
        }
        change(index);
    });

    $(".posi>li").click(function(){
        index = $(this).index();
        change(index);
    });

    function change(i){
        $(".rightbox_imgbox>img").eq(i).stop().fadeIn().siblings("img").stop().fadeOut();
        $(".posi>li").eq(i).css("background-color","#A7936E").css("border","3px solid #CCCCCC").siblings().css("background-color","white").css("border","0");
    }

    setInterval(function(){
        $(".dir-right").click();
    },2000);


    //搜索框获得焦点失去焦点行为
    $(".searchbox_box input").focus(function(){
        $(".searchbox_box").css("border-bottom","1px solid #684B34");
    });
    $(".searchbox_box input").blur(function(){
        $(".searchbox_box").css("border-bottom","1px solid #ebebeb");
    });





});
