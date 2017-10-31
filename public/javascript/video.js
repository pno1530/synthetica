$( document ).ready(function() {
	var duration;
	var remainingTime;


	$(".collective-vedio_player img").click(function() {
		if($("#myvideo").get(0).paused) {
			$("#myvideo").get(0).play();
		}
		else {
			$("#myvideo").get(0).pause();
		}
		return false;
	});

	$("#myvideo").on('loadedmetadata', function() {
		duration = $("#myvideo").get(0).duration;
	});

	//update HTML5 video current play time
	$("#myvideo").on('timeupdate', function() {
	var actualCurrentTime = $("#myvideo").get(0).currentTime;
	var currentTime = (1/duration)*actualCurrentTime;
	remainingTime = -(1-currentTime);
	$('.current').text(currentTime.toFixed(2));
	$('.duration').text(remainingTime.toFixed(2));
	});

});
