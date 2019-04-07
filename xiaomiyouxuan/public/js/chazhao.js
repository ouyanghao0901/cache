window.onscroll=function(){
    if(scrollY>300){
        $(".searchbox").addClass("s");
    }else{
        $(".searchbox").removeClass("s");
    }
};