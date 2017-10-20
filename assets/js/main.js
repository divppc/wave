$(document).ready(function () {
	
	//mobile toggle function start

  $(".mobile-menu").on("click", function () {
    $(this).toggleClass('active');
    $('.menu-line').toggleClass('active');
  });

  // function mobileToggle(e) {
  //   if ($(e).hasClass("active") == true) {
  //     $(e).animate({maxHeight: "0"}, 300).removeClass("active");
  //   } else {
  //     $(e).animate({maxHeight: "100vh"}, 300).addClass("active");
  //   }
  // };  
  //mobile toggle function end
});