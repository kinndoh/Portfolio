$(function(){

    // 스와이프
    window.swipe = $(".swipe").Swipe({
        startSlide: 0,                              // 초기 첫 배너 노출
        auto: 3000,                                 // 초 이후 자동으로 이동
        continuous: true,                           // 배너 반복 롤링
        stopPropagation: true,                      // 하위 요소에 이벤트 전달 차단
        disableScroll: true,                        // 슬라이드 배너 스크롤바 생성 차단
        callback: function(index, element){},       // 이벤트 완료 시, 콜백 함수 실행
        transitionEnd: function(index, element) {}  // 화면 전환 시, 익명 함수 실행
    }).data("Swipe");

    // 버튼 실행
    $(".prev").on("click", function(){              // 이전 버튼 클릭 시, 이전 배너로 이동
        swipe.prev();
    });
    $(".next").on("click", function(){              // 다음 버튼 클릭 시, 다음 배너로 이동
        swipe.next();
    });

    // 메뉴
    $(function(){
        $("nav>ul>li").mouseenter(function(){
            $(".submenu").stop().slideDown();
        });
        $("nav>ul>li").mouseleave(function(){
            $(".submenu").stop().slideUp();
        });
    });

    // 퀵메뉴
    $(window).scroll(function(){
        var scrollTopNum = $(document).scrollTop()+100;
        $("#quickmenu").stop().animate({top: scrollTopNum}, 500);
    });
    
});