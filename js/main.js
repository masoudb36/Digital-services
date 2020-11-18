$(document).ready(function () {
	let items = $('.sliders__item');
	let indexSlider = 0;
	let testimonial = $('.testimonials__item');
	let lines = $('.line span');

	displayShow(items, indexSlider);
	$('.prev').click(function (event) {
		event.preventDefault();
		displayNone(items);
		indexSlider = indexSlider - 1;

		if (indexSlider < 0) {
			indexSlider = items.length - 1;
		}
		displayShow(items, indexSlider);
	});

	$('.next').click(function (event) {
		event.preventDefault();
		displayNone(items);
		indexSlider = indexSlider + 1;
		console.log(indexSlider);
		if (indexSlider >= items.length) {
			indexSlider = 0;
		}
		displayShow(items, indexSlider);
	});

	$('.line span').click(function (env) {
		env.preventDefault();
		let index = $(this).data('index');
		for (let i = 0; i < testimonial.length; i++) {
			lines[i].style.opacity = '0.6';
			testimonial[i].classList.remove('scale');
		}
		lines[index].style.opacity = '1';
		testimonial[index].classList.add('scale');
		// console.log(testimonial);
	});

	$('.menu__responsive').click(function (e) {
		e.preventDefault();
		let $this = $(this);
		$this.toggleClass('menu__responsive--click');
		if (!$this.data('click')) {
			$('.menu__items div').animate(
				{
					right: 0,
				},
				300
			);
			$this.data('click', 1);
		} else {
			$('.menu__items div').animate(
				{
					right: '-60rem',
				},
				300
			);
			$this.data('click', 0);
		}
	});
	$('.menu__items li>a').on('click', function (ev) {
		if (this.hash !== '') {
			ev.preventDefault();
			const hash = this.hash;
			console.log($(hash).offset().top);
			$('html , body').animate(
				{
					scrollTop: $(hash).offset().top-75,
				},
				800
			);
		}
	});
	
});

function displayNone(items) {
	items.css('display', 'none');
}

function displayShow(items, index) {
	items[index].style.display = 'grid';
	items[index].classList.add('sliders__show');
}

function displayTestimonial(testimonial, index) {}
