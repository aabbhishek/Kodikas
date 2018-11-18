$(document).ready(function() {
	$(".sidebar-open").on("click",function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".sidebar").removeClass('active');
		}else {
			$(this).addClass("active");
			$(".sidebar").addClass('active');
		}
	});
	$(".voice-open").on("click",function() {
		$("#speak-modal").modal();
	});


	//$(".scroll-next").on("click",function() {
		// if($(this).hasClass("active")) {
		// 	$(this).removeClass("active");
		// 	$(".action-con").removeClass('active');
		// }else {
		//	$(this).addClass("active");
			//$(".action-con").addClass('active');
		// }
	//});
	//$(".scroll-prev").on("click",function() {
		// if($(this).hasClass("active")) {
		// 	$(this).removeClass("active");
		//	$(".action-con,.scroll-next").removeClass('active');
		// }else {
		// 	$(this).addClass("active");
		// 	$(".action-con").addClass('active');
		// }
	//});
	$(".action-button").on("click",function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).parents('.partcon').find(".det-sec").removeClass('active');
		}else {
			$(this).addClass("active");
			$(this).parents('.partcon').find(".det-sec").addClass('active');
		}
	});
	/*var body = $(".container").get(0);
    if (body.addEventListener) {
        body.addEventListener('mousewheel', MouseWheelHandler(), false);
        body.addEventListener("DOMMouseScroll", MouseWheelHandler(), false);
    } else {
        body.attachEvent("onmousewheel", mousewheel);
    }
    function MouseWheelHandler() {
	    return function (e) {
	        // cross-browser wheel delta
	        var e = window.event || e;
	        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	        if (delta < 0) {
	        	$(".scroll-next").trigger('click');
	        }
	        else {
	        	$(".scroll-prev").trigger('click');
	        }

	        return false;
	    }
	}*/

	$(".click_to_speak").click(function(){
		$("#speak-modal").modal();
		$(".listenedText p").html('Speak...');
		s='';
		recognition.start();
	});

	$(".stop-speech").click(function(){
		recognition.stop();
		$(".get-text").val(s);
		$.ajax({
	        url: 'scripts/speechAnalysis.py',
	        type:'post',
	        data:{
	          speech:s,
	        },
	        success:function(data) {
	          // alert(data);
	          	$(".processedText p").html(data);
	          	setTimeout(function() {
					$("#processed-modal").modal();
			    },2000);
	        }
	    });
		// setTimeout(function() {
		// 	$(".processedText p").html(s);
		// },3000);
	});

	$(".reset-speech").click(function(){
		$(".listenedText p").html('Listening ...');
		s='';
	});

	$(".mic-speak").click(function(){
		$("#model_speak_open").modal();
		$(".listenedText p").html('Listening ...');
		s='';
		recognition.start();
	});
	$(".stop-speech").click(function(){
		recognition.stop();
		$(".wysiwyg-editor").html(s);
	});

});
