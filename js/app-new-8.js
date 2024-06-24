const textAnimation = document.querySelector(".heading-animation").children,
	textAnimationLength = textAnimation.length;
let index = 0;
const textInTimer = 3000,
	textOutTimer = 2700;

function animateText() {
	for (let i = 0; i < textAnimationLength; i++) {
		textAnimation[i].classList.remove("text-in", "text-out");
	}
	textAnimation[index].classList.add("text-in");

	setTimeout(function () {
		textAnimation[index].classList.add("text-out");
	}, textOutTimer)

	setTimeout(function () {
		if (index == textAnimationLength - 1) {
			index = 0;
		} else {
			index++;
		}
		animateText();
	}, textInTimer);
}

window.onload = animateText;

(() => {

	let slideTable = [];
	let indexTab;
	const handleSwiperPriceList = function () {
		if ($('#section-price-list .swiper').length) {
			let listSliderTable = $('#section-price-list .swiper');
			listSliderTable.each((index, sliderItem) => {
				indexTab = index;

				let sliderItemID = '#' + $(sliderItem).closest('.tab-pane').attr('id');
				let slideTemp = new Swiper(sliderItemID + ' .swiper', {
					slidesPerView: 1.2,
					spaceBetween: 20,
					speed: 1000,
					autoplay: {
						delay: 2000,
					},
					breakpoints: {
						576: {
							slidesPerView: 1.3
						},
						768: {
							slidesPerView: 2
						},
						992: {
							slidesPerView: 2
						},
						1024: {
							slidesPerView: 2,
						},
						1440: {
							slidesPerView: 3,
						},

					}
				});
				slideTable.push(slideTemp);
			});
		}
	}

	const handleTabpriceList = function () {
		let itemTabs = $("#price-list-tab .nav-item");
		itemTabs.each(function (index) {
			let itemTab = $(this);
			itemTab.on("click", function () {
				itemTabs.removeClass("active");

				itemTab.addClass("active");
				$("#price-list-tab .bg-tab").css({
					left: parseInt($(this)[0].offsetLeft) + "px",
					width: parseInt($(this)[0].offsetWidth) + "px",
				});
				$("#price-list-tab .nav").animate({
					scrollLeft: parseInt($(this)[0].offsetLeft) + "px",
				});

				slideTable[index].slideTo(0);
				slideTable[index].autoplay.start();
			});
		})
	}

	const handleHeaderSliderBlogs = function () {
		if ($('#section-blogs .swiper').length) {
			new Swiper('#section-blogs .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.2,
				speed: 1000,
				autoplay: {
					delay: 3500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#section-blogs .button-next",
					prevEl: "#section-blogs .button-prev",
				},
				breakpoints: {
					425: {
						slidesPerView: 1.6
					},
					768: {
						slidesPerView: 2.3
					},
					992: {
						slidesPerView: 2.5
					},
					1024: {
						slidesPerView: 2.6,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleSectionHtmlBlogs = function () {
		if ($('#section-html-blogs').length) {
			let elmDescription = $('#section-html-blogs');
			let scrollHeight = elmDescription.find('.content').get(0).scrollHeight;

			$('#section-html-blogs').css('--height', '400' + 'px');

			if (scrollHeight <= elmDescription.innerHeight()) {
				$('#expand-button').remove();
				$('#section-html-blogs').css('--height', 'auto');
			} else {
				$('#expand-button').click(function () {
					if (elmDescription.hasClass('is-show')) {
						elmDescription.removeClass('is-show');
						$(this).html('<span>Xem thêm</span><span><i class="fal fa-angle-down"></i></span>');
						$('#section-html-blogs').css('--height', '400' + 'px');
					} else {
						elmDescription.addClass('is-show');
						$(this).html('<span>Thu gọn </span><span><i class="fal fa-angle-up"></i></span>');
						$('#section-html-blogs').css('--height', 'auto');
					}
				});
			}
		}
	}

	const handleHeaderSliderIntroduce6 = function () {
		if ($('#section-introduce-6 .swiper').length) {
			new Swiper('#section-introduce-6 .swiper', {
				spaceBetween: 10,
				slidesPerView: 1.8,
				speed: 1000,
				autoplay: {
					delay: 6500,
					disableOnInteraction: true,
				},
				loop:true,
				navigation: {
					nextEl: ".introduce-6__button .button-next",
					prevEl: ".introduce-6__button .button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView: 2.1
					},
					425: {
						slidesPerView: 2.5
					},
					768: {
						slidesPerView: 4.2
					},
					992: {
						slidesPerView: 4.2
					},
					1024: {
						slidesPerView: 6,
					},
					1440: {
						slidesPerView: 7,
					},

				}
			});
		}
	}

	const handleHeaderSliderIntroduce = function () {
		if ($('#swiper-introduce .swiper').length) {
			new Swiper('#swiper-introduce .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.2,
				speed: 1000,
				autoplay: {
					delay: 6500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#swiper-introduce .button-next",
					prevEl: "#swiper-introduce .button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView: 1.3
					},
					425: {
						slidesPerView: 1.5
					},
					768: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleHeaderSliderIntroduce3 = function () {
		if ($('#swiper-introduce-3 .swiper').length) {
			new Swiper('#swiper-introduce-3 .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.1,
				speed: 1000,
				autoplay: {
					delay: 6500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#swiper-introduce-4 .button-next",
					prevEl: "#swiper-introduce-4.button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView: 1.2
					},
					425: {
						slidesPerView: 1.3
					},
					768: {
						slidesPerView: 1.6
					},
					992: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleHeaderSliderIntroduce4 = function () {
		if ($('#swiper-introduce-4 .swiper').length) {
			new Swiper('#swiper-introduce-4 .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.1,
				speed: 1000,
				autoplay: {
					delay: 6500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#swiper-introduce-4 .button-next",
					prevEl: "#swiper-introduce-4.button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView: 1.2
					},
					425: {
						slidesPerView: 1.3
					},
					768: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleHeaderSliderIntroduce5 = function () {
		if ($('#swiper-introduce-5 .swiper').length) {
			new Swiper('#swiper-introduce-5 .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.1,
				speed: 1000,
				autoplay: {
					delay: 7500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#swiper-introduce-5 .button-next",
					prevEl: "#swiper-introduce-5 .button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView: 1.2
					},
					425: {
						slidesPerView: 1.5
					},
					768: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleAnimationProdure2 = function () {
		if ($(".section-procedure .nav-link").length) {
			let numItem = $("#blockStep .nav-link").length;
			// mặc định lấy phần tử đầu tiên active
			let itemActive = $("#blockStep .nav-link:first-child");
			if ($("#blockStep .nav-link.active").length > 0) { // nếu có item active rồi thì lấy cái đang active
				itemActive = $("#blockStep .nav-link.active");
			}
			setInterval(function () {
				$('#blockStep .nav-link.active').removeClass("bg-active");
				itemActive.trigger('click');
				$('#blockStep .nav-link:before').css('display', 'none');
				if (itemActive.attr("data-step") == numItem) { // check nếu item cuối cùng thì set lại là phần tử đầu tiên
					itemActive = $("#blockStep .nav-link:first-child");
				} else { // ngược lại thì lấy bạn kế tiếp
					itemActive = itemActive.next();
				}
			}, 6500);
		}
	}

	const handleTabProjectMobile = function () {
		let itemTab = $(".project-tab .nav-link");
		itemTab.on("click", function () {
			$(".project-tab .nav").animate({
				scrollLeft: parseInt($(this)[0].offsetLeft) + "px",
			});
		});
	}

	const handleTabProcedureMobile = function () {
		let tabProcedure = $(".section-procedure__tab .nav-link");
		tabProcedure.on("click", function (e) {

			$(".section-procedure__tab .nav").animate({
				scrollLeft: parseInt($(this)[0].offsetLeft) + "px",
			});
		});
	}

	const handleRegisterForm = function(){
		let btnRegister = $('.btn-register-website');

		btnRegister.each(function(){
			let btnRes = $(this);
			btnRes.click(function(){
				let getImage = btnRes.data('bg');
				let getText = btnRes.data('text');

				$('#frm-lp_message').val(getText);
				$('#frm-lp_image').attr('src',getImage);
			})

		})
	}

	$(function () {
		$(window).on("load", function () {
			$(".section-loader-2").delay(2800).fadeOut(1900);
		})
		handleSwiperPriceList();
		handleTabpriceList();

		handleAnimationProdure2();
		handleHeaderSliderBlogs();
		handleSectionHtmlBlogs();
		handleHeaderSliderIntroduce6();
		handleHeaderSliderIntroduce();
		handleHeaderSliderIntroduce3();
		handleHeaderSliderIntroduce4();
		handleHeaderSliderIntroduce5();
		handleTabProjectMobile();
		handleTabProcedureMobile();
		handleRegisterForm();
	});

})();




