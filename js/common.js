$(function() {

	$(".toggle-menu").click(function() {
        $(this).toggleClass("on");
        $(".navbar-menu").slideToggle();
  });

	// Type Image Zoom - картинка с анимацией
	$('.image-popup-zoom').magnificPopup({
		type: 'image',
		zoom: {
		   enabled: true,
		   duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		}
	});
    
    $(window).scroll(function(){
      var docscroll=$(document).scrollTop();
      if(docscroll>$(window).height()){
        $('.navbar').addClass('fixed');
      }else{
        $('.navbar').removeClass('fixed');
      }
    });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
