(() => {
	const handleNav = function(){
		let btnCallMenu = $('#callNav');
		let btnCloseMenu = $('#closeNav');
		if(btnCallMenu.length){
			btnCallMenu.click(function(){
				$('body').addClass('show-nav show-overlay');
			})
		}
		if(btnCloseMenu.length){
			btnCloseMenu.click(function(){
				$('body').removeClass('show-nav show-overlay');
			})
		}
		$(document).on('click', function (event) {
			if (!event.target.closest('.header-nav') && !event.target.closest('#callNav')) {
				$('body').removeClass('show-nav show-overlay');
			}
		});

	}
	const handleInitHeader = function (){
		let headerPosition = $('header').offset().top;
		$(window).scroll(function () {
			var scrollValue = $(window).scrollTop();

			if (scrollValue > 600) {
				$('header').addClass('is-scroll');
			} else {
				$('header').removeClass('is-scroll');
			}
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

		})

	});

})();
