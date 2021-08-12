$(function(){
    $(".btn_top").on("click",function(){
        $("html, body").animate({scrollTop : 0},400);
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".btn_top").fadeIn();
        }else {
            $(".btn_top").fadeOut();
        }
    });
});