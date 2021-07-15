$(function(){

    // CON2
    var mySlider=$(".thum").bxSlider({
        mode:"horizontal", // 가로 수평으로 슬라이딩됨
        speed: 500, // 이동속도설정
        pager: false, // 페이징 표시 여부 설정
        moveSlides: 1, // 이동시 갯수 설정 
        slideWidth: 1132, // 각 슬라이드 너비값 설정 
        minSlides: 7, // 최소 노출 갯수 설정 
        maxSlides: 7, // 최대 노출 갯수 설정 
        slideMargin: 0, // 슬라이드간의 간격 설정 
        auto: true, // 자동으로 흐를지 설정 
        autoHover: true, // 마우스 올렸을때 정지시킬지 설정
        controls: false // 이전, 다음 버튼 누출 여부 설정
    });

    // 이전, 다음버튼 설정 
    // 이전 버튼 클릭시 이전 슬라이드로 전환 
    $(".prevbtn").on("click",function(){
        mySlider.goToPrevSlide(); // 이전 슬라이드로 이동
        return false; // <a> 링크 차단
    });
    // 다음 버튼 클릭시 다음 슬라이드로 전환 
    $(".nextbtn").on("click",function(){
        mySlider.goToNextSlide(); // 다음 슬라이드로 이동
        return false; // <a> 링크 차단
    });


	/*".con2 .thum li" 위치에서 rel 속성을 추가하여 0~7으로 번호를 적용*/
	$(document).on("click", ".con2 .thum li", function(){
		const $rel = Number($(this).attr("rel"));
		console.log($rel);
		$(".photo li").css("z-index", "0.7").hide();
		$(".photo li").eq($rel).fadeIn().css("z-index", "1");
		$(".description > .inside > div").hide();
		$(".description > .inside > div").eq($rel).fadeIn();
		return false;
	});

/*

    // .has() - 선택한 요소 중 지정한 태그를 포함하는 요소만 선택
    // .not() - 선택한 요소 중 지정한 요소만 제외하고 선택 
    // photo_wrap 의 하위 요소인 li 전체 선택
    var pw_li = $(".photo li");
    // 위의 li중 첫번째 요소에만 class="on" 생성
    $(pw_li).filter(":first").addClass("on"); 
    // thum_wrap의 a 클릭시 이벤트 실행
    $(".thum a").on("click",function(){
        // 클릭한 a의 하위 태그 img 의 alt 속성 가져오기
        var alt = $("img",this).attr("alt");
        $(pw_li).has($("img[alt="+alt+"]")).not(".on").css({
            opacity: 0, // 완전투명하게
            "z-index":2 // z-index : 2이므로 최상단 배치
        })

        // z-index : auto (기본값)
        .stop().animate({opacity:1},400,function(){
            // 애니메이션 완료시 li에 포함된 on 클래스 제거 후 z-index : auto 로 설정(아래로 내림)
            $(pw_li).filter(".on").removeClass("on").css("z-index","auto");
            // animate()가 적용된 요소에 on 클래스 생성 후 z-index : 1 로 설정 (상위노출)
            $(this).addClass("on").css("z-index",1);
        }); return false;

    });
/*
    $(".thum01").on("click", function(){
        $(".description01").fadeIn();
        $(".description02").fadeOut();
        $(".description03").fadeOut();
        $(".description04").fadeOut();
        $(".description05").fadeOut();
        $(".description06").fadeOut();
        $(".description07").fadeOut();
        $(".description08").fadeOut();
    });
    $(".thum02").on("click", function(){
        $(".description01").fadeOut();
        $(".description02").fadeIn();
        $(".description03").fadeOut();
        $(".description04").fadeOut();
        $(".description05").fadeOut();
        $(".description06").fadeOut();
        $(".description07").fadeOut();
        $(".description08").fadeOut();
    });
    $(".thum03").on("click", function(){
        $(".description01").fadeOut();
        $(".description02").fadeOut();
        $(".description03").fadeIn();
        $(".description04").fadeOut();
        $(".description05").fadeOut();
        $(".description06").fadeOut();
        $(".description07").fadeOut();
        $(".description08").fadeOut();
    });
    $(".thum04").on("click", function(){
        $(".description01").fadeOut();
        $(".description02").fadeOut();
        $(".description03").fadeOut();
        $(".description04").fadeIn();
        $(".description05").fadeOut();
        $(".description06").fadeOut();
        $(".description07").fadeOut();
        $(".description08").fadeOut();
    });
    $(".thum05").on("click", function(){
        $(".description01").fadeOut();
        $(".description02").fadeOut();
        $(".description03").fadeOut();
        $(".description04").fadeOut();
        $(".description05").fadeIn();
        $(".description06").fadeOut();
        $(".description07").fadeOut();
        $(".description08").fadeOut();
    });
    $(".thum06").on("click", function(){
        $(".description01").fadeOut();
        $(".description02").fadeOut();
        $(".description03").fadeOut();
        $(".description04").fadeOut();
        $(".description05").fadeOut();
        $(".description06").fadeIn();
        $(".description07").fadeOut();
        $(".description08").fadeOut();
    });
    $(".thum07").on("click", function(){
        $(".description01").fadeOut();
        $(".description02").fadeOut();
        $(".description03").fadeOut();
        $(".description04").fadeOut();
        $(".description05").fadeOut();
        $(".description06").fadeOut();
        $(".description07").fadeIn();
        $(".description08").fadeOut();
    });
    $(".thum08").on("click", function(){
        $(".description01").fadeOut();
        $(".description02").fadeOut();
        $(".description03").fadeOut();
        $(".description04").fadeOut();
        $(".description05").fadeOut();
        $(".description06").fadeOut();
        $(".description07").fadeOut();
        $(".description08").fadeIn();
    });
*/


});