$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	arrows: false,
	cssEase: 'linear'
});

$( document ).ready(function() {
	$open   = $('.open-nav');
	$hero   = $('.hero');
	$header = $('.header');
	$slider = $('.image-box');
	$open.click(function() {
		$header.toggleClass('header_open');
		$hero.toggleClass('hero_madgin');
	});
	if($(window).width() < 768){
		$slider.addClass('slider__carousel');
	}
	$('.slider__carousel').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	// mobile view

	$('.fruit-water-mobile__title').on('click', function() {
		$(this).siblings('.fruit-water-mobile__content').slideToggle();
		$(this).toggleClass('fruit-water-mobile__title_open');
	});


//anchor
	var anchor = $('.anchor');
	anchor.on('click', function (event) {
		$header.toggleClass('header_open');
		$hero.toggleClass('hero_madgin');
		event.preventDefault();

		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});