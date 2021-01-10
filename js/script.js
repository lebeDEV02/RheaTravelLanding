$(function () {
	$(".menu__list").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});
	$('.places__slider').slick({
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		infinite: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/left-arrow.svg" alt=""></button>',
		initialSlide: 1,
		variableWidth: true,
	})
	$('.categories__slider').slick({
		cssEase: 'ease-out',
		prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/left-arrow.svg" alt=""></button>',
		centerMode: true,
		variableWidth: true,
		speed: 350,
		slidesToShow: 1,
		slidesToScroll: 1,
	})
	$('.experiences__slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/left-arrow.svg" alt=""></button>',
		infinite: false,
	})
	$('.menu__burger').on('click', function () {
		$('.menu__list').toggleClass('menu__list-active');
	});
});