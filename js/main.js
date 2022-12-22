$(function () {
	$('.slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// fade: true,
		// centerMode: true,
		asNavFor: '.slider-thumb'
	});

	$('.slider-thumb').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		// fade: true,
		// centerMode: false,
		asNavFor: '.slider-big'
	});
});