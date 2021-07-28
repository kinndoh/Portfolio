// scroll 이벤트와 scrollTop()을 이용한 원페이지 구현

$(function(){
    var $topmenu=$(".gnb>li>a");
    var gapH=0; // 가로폭에 따른 탑메뉴 높이값 저장 변수

    //
    // 1단계-메인슬라이딩과 article의 탑 값을 배열에 저장
    //
    var arrContH=new Array(); // 빈 배열 선언
    function setPosArticle(){
        arrContH=[]; // 배열 비우기 
        arrContH.push($("header+hr+section").offset().top); // 메인 배너의 높이값 추가
        $("#mainsrv>article").each(function(idx){
            arrContH.push($(this).offset().top);
        });
       // article이 시작하는 y좌표값을 동적으로 배열에 저장
       // article의 높이가 변하더라도 정확하게 시작점으로 스크롤한다.
    }

    //
    // 2단계-스크롤 높이값에 따른 메뉴의 롤오버 색상 변화 
    //
    $(window).on("scroll",function(){
       var scrollH=$(this).scrollTop(); // 현재 스크롤 탑값
        for(var i=0;i<$topmenu.size();i++){
            if(scrollH>=arrContH[i+1]-gapH){
                $topmenu.eq(i).parent().addClass("on").siblings().removeClass("on");
            } else if(scrollH<arrContH[1]-gapH){
                $topmenu.parent().removeClass("on");
            }
        }
    });
    
    //
    // 3단계-메뉴 클릭시 article 영역 애니메이션으로 올라감
    //
    $topmenu.on("click",function(evt){
    var nowIdx=$topmenu.index($(this));
    $("html,body").stop().animate({
        scrollTop : arrContH[nowIdx+1]-gapH+1
    }, 400,"easeInOutCubic");
    if ($(window).width()<=640){
        $btnGnb.trigger("click");
    }
    evt.preventDefault();
    });
    // .scrollTop() : 스크롤바가 수직 수평으로 이동한 위치값 불러오기

    //
    // 4단계-로고 클릭시 최상단으로 이동 
    //
    $(".logo").on("click",function(evt){
        $("html,body").stop().animate({
            scrollTop : 0
        },400,"easeInOutCubic");
        evt.preventDefault();
    });

    // PC + Mobile 버젼의 article 제목과 본문 출력 
    var $msgH3=$("#mainsrv>.linemsg>div>.explain>h3");
    var $telH3=$("#mainsrv>.linetel>div>.explain>h3");
    var $stickerH3=$("#mainsrv>.linesticker>div>.explain>h3");
    var $shareH3=$("#mainsrv>.lineshare>div>.explain>h3");
    var $couponH3=$("#mainsrv>.linecoupon>div>.explain>h3");
    
    // PC 버젼의 메인 서비스 제목
    var msgH3_PC=$msgH3.html();
    var telH3_PC=$telH3.html();
    var stickerH3_PC=$stickerH3.html();
    var shareH3_PC=$shareH3.html();
    var couponH3_PC=$couponH3.html();

    // PC 버젼의 메인 서비스 내용
    var msgText_PC=$msgH3.next().html();
    var telText_PC=$telH3.next().html();
    var stickerText_PC=$stickerH3.next().html();
    var shareText_PC=$shareH3.next().html();
    var couponText_PC=$couponH3.next().html();

    // Mobile 버젼의 메인 서비스 제목
    var msgH3_MO="무료메시지";
    var telH3_MO="무료영상/음성통화";
    var stickerH3_MO="스티커로 더 즐거운 대화";
    var shareH3_MO="무엇이든 공유";
    var couponH3_MO="인기브랜드 쿠폰";

    // Mobile 버젼의 메인 서비스 내용
    var msgText_MO="1:1 대화는 물론 그룹 대화까지<br /> 무제한 무료로 즐겨보세요.";
    var telText_MO="듣고싶은 목소리, 보고싶은 얼굴이 있다면 <br /> 망설이지 마세요";
    var stickerText_MO="10,000개가 넘는 스티커와 이모티콘으로 <br /> 미묘한 감정까지 표현해보세요. ";
    var shareText_MO="사진, 동영상은 물론 음성메시지와 연락처, <br /> 위치 정보까지 손쉽게 보낼 수 있습니다.";
    var couponText_MO="인기 아티스트, 브랜드의 최신 소식과 <br /> 쿠폰이 기다리고 있습니다.";

    //
    // 5단계-브라우저의 가로폭에 따른 설정 (PC모드)
    //
    $(window).on("load resize",function(){
    if($(this).width()>640){ // PC모드
        gapH=70;
        $nav.show();

        // 제목 
        $msgH3.html(msgH3_PC);
        $telH3.html(telH3_PC);
        $stickerH3.html(stickerH3_PC);
        $shareH3.html(shareH3_PC);
        $couponH3.html(couponH3_PC);

        // 내용 
        $msgH3.next().html(msgText_PC);
        $telH3.next().html(telText_PC);
        $stickerH3.next().html(stickerText_PC);
        $shareH3.next().html(shareText_PC);
        $couponH3.next().html(couponText_PC);

    }else { // 모바일모드
        gapH=50;
        $btnGnb.removeClass("close").next().hide();
    
        // 제목 
        $msgH3.html(msgH3_MO);
        $telH3.html(telH3_MO);
        $stickerH3.html(stickerH3_MO);
        $shareH3.html(shareH3_MO);
        $couponH3.html(couponH3_MO);
    
        // 내용 
        $msgH3.next().html(msgText_MO);
        $telH3.next().html(telText_MO);
        $stickerH3.next().html(stickerText_MO);
        $shareH3.next().html(shareText_MO);
        $couponH3.next().html(couponText_MO);
    }
    setPosArticle();
    });
    var $btnGnb=$("header>.container>.btngnb");
    var $nav=$("header>.container>nav");

    $btnGnb.on("click",function(){
        $(this).toggleClass("close");
        $nav.toggle();
    }); // 모바일 메뉴 클릭이벤트

    // 640px 이하에서만 나타나는 header 영역의 메뉴 버튼
});