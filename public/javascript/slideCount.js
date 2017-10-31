$( document ).ready(function() {
	
	// $(".sliderContainer-dots .slide0").addClass("active");
	console.log($(".slide0"))

	for(var i = 0; i < $(".slides li").length;i++){
		$(".sliderContainer-dots").append("<li class='slide"+i+"'></li>");
	}

	$(".slider-sliderContainer").find(".sliderContainer-dots").find("li").first().addClass("active");
	
	$(".sliderContainer-dots li").click(function(){
		var lists = $(".sliderContainer-dots li");
		lists.each(function(li){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
		var index = $(this).index();
		slider(index);
	});

	function slider(index){
		var marginLeft = parseInt($(".slider ul").css("margin-left")); //margin-left of prev selected list
		var prevIndex = Math.abs(marginLeft/100);	//prevIndex
		var presentMarginLeft = marginLeft + (index-prevIndex) * (-100); //-100 for -ve margin left in %	
		$(".slider ul").animate({
				marginLeft: presentMarginLeft+"%"
			},400);	
	}

	// function slider(index){
	// 	var marginLeft = parseInt($(".slider ul").css("margin-left"));
	// 	var prevIndex = Math.abs(marginLeft/907);  //907 is li width
	// 	var y = marginLeft + (index-prevIndex) * (-907);	
	// 	$(".slider ul").animate({
	// 			marginLeft: y+"px"
	// 		},400);	
	// }
	
});