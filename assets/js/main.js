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

  //charts

  var commonStyles = {
    startAngle: 4.7,
    thickness: 10,
    animation: {duration: 3000},
    emptyFill: 'transparent'
  }

  var charts = $('.video-stats li');

  var countChartValue = function (item) {
    var oldValue = $(item).find('.old-value').html(),
        newValue = $(item).find('.new-value').html(),
        itemResult = parseInt(newValue/oldValue * 100 - 100),
        resultHolder = $(item).find('.chart-status');

    resultHolder.html('+' +itemResult+ '%');
  };

  var offsetTop = $('section.videos').offset().top,
      trigger;

  for (var i = 0, len = charts.length; i < len; i++) {
    countChartValue(charts[i]);
  }

  $(window).on('scroll', function() {
    
    var scrollTop = $(window).scrollTop();
      
    if (scrollTop+300 >= offsetTop && trigger !== 1) {
      initCharts();
      trigger = 1;
    }
  });

  function initCharts() {
    $('.grey-chart').circleProgress($.extend(commonStyles, {
        size: 130,
        fill: {color: '#d0d7e2'},
    }));

    $('.reach-chart').circleProgress($.extend(commonStyles, {
      size: 160,
      fill: {gradient: ["#ffab00", "#ffce00"]},
    }));

    $('.click-chart').circleProgress($.extend(commonStyles, {
      size: 160,
      fill: {gradient: ["#98e0ff", "#64caff"]},
    }));

    $('.likes-chart').circleProgress($.extend(commonStyles, {
      size: 160,
      fill: {gradient: ["#29d5bb", "#acfeb4"]},
    }));
  }  
});