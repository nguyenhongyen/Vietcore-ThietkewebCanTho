(() => {
	const handleNav = function () {
		let btnCallMenu = $('#callNav');
		let btnCloseMenu = $('#closeNav');
		if (btnCallMenu.length) {
			btnCallMenu.click(function () {
				$('body').addClass('show-nav show-overlay');
			})
		}
		if (btnCloseMenu.length) {
			btnCloseMenu.click(function () {
				$('body').removeClass('show-nav show-overlay');
			})
		}
		$(document).on('click', function (event) {
			if (!event.target.closest('.header-nav') && !event.target.closest('#callNav')) {
				$('body').removeClass('show-nav show-overlay');
			}
		});

	}
	const handleInitHeader = function () {
		let scrollTop = $(document).scrollTop();

		$(window).scroll(function () {
			let currentScroll = $(document).scrollTop();

			if (currentScroll > 300 && currentScroll > scrollTop) {
				$('header').removeClass('is-scroll');
			} else {
				$('header').addClass('is-scroll');

			}
			if (currentScroll < 300){
				$('header').removeClass('is-scroll');
			}

			scrollTop = currentScroll;
		});
	}


	$(function () {
		handleNav();
		handleInitHeader();

		$(window).on("load", function () {
			if ($('body').hasClass('load-banner')) {
				$('body').removeClass('load-banner');
			} else {
				$('body').addClass('load-banner');
			}

			setTimeout(function () {
				$('.loader-transform.logo-decor-1').removeClass('loader-transform').addClass('loader-banner');
				$('.loader-transform.logo-decor-2').removeClass('loader-transform').addClass('loader-banner');

			}, 5400);

		})

	});

})();
