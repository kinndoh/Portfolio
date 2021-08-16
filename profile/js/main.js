$(function(){

    // 클릭 시 최상단으로 올라가게 하기
    $(".btn_top").on("click",function(){
        $("html, body").animate({scrollTop : 0},400);
    });

    // 500픽셀 도달시 나타나게 하기
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".btn_top").fadeIn();
        }else {
            $(".btn_top").fadeOut();
        }
    });

    // 각 메뉴 클릭시 컨텐츠 영역의 아이디값을 가진 곳으로 이동
    // ABOUT
    $(".header_main>ul>li:nth-child(1)").on("click",function(){
        var about = $("#skill").position(); 
        // skill의 위치값을 about에 저장
        $("html, body").animate({
            scrollTop: about.top - 80
        },400);
    });

    // PORTFOLIO
    $(".header_main>ul>li:nth-child(2)").on("click",function(){
        var about = $("#portfolio").position(); 
        // skill의 위치값을 about에 저장
        $("html, body").animate({
            scrollTop: about.top - 70
        },400);
    });

    // ETC
    $(".header_main>ul>li:nth-child(3)").on("click",function(){
        var about = $("#etc").position(); 
        // skill의 위치값을 about에 저장
        $("html, body").animate({
            scrollTop: about.top - 40
        },400);
    });

    // 4. 스크롤 이동시 메뉴색과 라인색 변경 
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        // 560 ~ 1144px 
        if (height >= 560 && height <= 1144){
            $(".header_main>ul>li").removeClass("on on2"); 
            $(".header_main>ul>li:nth-child(1)").addClass("on on2");
        // 1145 ~ 4549     
        }else if (height >= 1145 && height <= 4549){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(2)").addClass("on on2");
        // 4550 ~ end 
        }else if (height >= 4550){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(3)").addClass("on on2");
        }else {
            $(".header_main>ul>li").removeClass("on on2");
        }
    });

});