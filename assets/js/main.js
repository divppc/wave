$(document).ready(function () {
	
	//mobile toggle function

  $(".mobile-menu").on("click", function (e) {
  	e.preventDefault();
    $(this).toggleClass('active');
    $('.menu-line').toggleClass('active');
  });

  //header bg
  var headerBg = function () {
  	if($(window).scrollTop() > 0 && !$('header').hasClass('scrolled')) {
  		$('header').addClass('scrolled');
  	} else if($(window).scrollTop() == 0){
  		$('header').removeClass('scrolled');
  	}
  };

  $(document).on('scroll', function () {
		headerBg();
	});

  //switch language
  $('.choosen-language').on('click', function () {
    $(this).toggleClass('active');
  });
});