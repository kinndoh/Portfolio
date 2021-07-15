$(document).ready(function(){  		

	$("article").on("mouseover",function(){		
		var vid = $(this).find("img").get(0);
		$(this).stop().animate({"width":"23%"},400,function(){
			$(this).find("h3").stop().animate({"right":"10px"},400);
			$(this).find("p").stop().animate({"right":"10px"},400);	
		});
		$(this).find("img").stop().animate({"opacity":"0"}, 3000);		
	});
	
	$("article").on("mouseout",function(){		
		$(this).stop().animate({"width":"10%"}, 400);
		$(this).find("img").stop().animate({"opacity":"1"},2000);	
		$(this).find("h3").stop().animate({"right":"-310px"}, 400);
		$(this).find("p").stop().animate({"right":"-310px"}, 400);	
	});
});