


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	if($('.transaction_main_tab')) {
		tabs('.tab_list--link>li', '.tabcontent');
	}
	showMoreText();
	modal();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})



async function maps(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/map.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
				myMapMobile.behaviors.disable('scrollZoom')
			}
		);
	}
	await ymaps.ready(init);

}



const swiperstra = new Swiper('.swiperstra', {
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 25,
			freeMode: false,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 25
    },
		1024: {
			slidesPerView: 2,
      spaceBetween: 50
		}
	},
	navigation: {
    nextEl: '.strategy_slider_btn_next',
    prevEl: '.strategy_slider_btn_previos',
  },
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});



const swiper = new Swiper('.swiper', {
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 25,
			freeMode: false,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 25
    },
		1024: {
			slidesPerView: 1,
      spaceBetween: 50
		}
	},
	navigation: {
    nextEl: '.transaction_slider_btn_next',
    prevEl: '.transaction_slider_btn_previos',
  }
});



// tabs
function tabs(link, block) {
	let linkSelector = $(link),
		blockSelector = $(block);

	$(linkSelector).on('click', function (e) {
		e.preventDefault();

		let $this = $(this),
			currentData = $(this).data('tab');

		$(blockSelector).removeClass('active_tab');
		$(linkSelector).removeClass('active_tab');

		$(block + '[data-tab="' + currentData + '"]').addClass('active_tab');
		$this.addClass('active_tab');

	});
}



const swiper_rev = new Swiper('.swiper_rev', {
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 50
    },
		1025: {
			slidesPerView: 3,
      spaceBetween: 50
		},
		1280: {
			slidesPerView: 3,
      spaceBetween: 50
		},
		1366: {
			slidesPerView: 3,
      spaceBetween: 50
		}
	},
	navigation: {
    nextEl: '.reviews_slider_btn_next',
  },
	pagination: {
    el: '.swiper_pagination',
    type: 'bullets',
  },
});



function showMoreText() {
  let showMoreBlock = document.querySelectorAll('.showMoreBlock')
  Array.from(showMoreBlock).map((item) => {
    let showMoreBtn = item.querySelector('.showMoreBtn')
    let showMoreTxt = item.querySelector('.showMoreTxt')

    showMoreBtn.addEventListener('click', function() {
      showMoreTxt.classList.toggle('visible')
      if (showMoreTxt.classList.contains('visible')) {
        this.innerHTML = `
					<div class="reviews_btn_more showMoreBtn active_more_btn"> 
						<p>Свернуть</p>
						<svg class="icon icon-arrowbottom ">
							<use xlink:href="i/sprite/sprite.svg#arrowbottom"></use>
						</svg>
					</div>
        `
      } else {
        this.innerHTML = `
        	<div class="reviews_btn_more showMoreBtn"> 
						<p>Показать больше</p>
						<svg class="icon icon-arrowbottom ">
							<use xlink:href="i/sprite/sprite.svg#arrowbottom"></use>
						</svg>
					</div>
        `;
      }
    })
  })
}



function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			
			popup.forEach((el) => {
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}




function hideForm() {
	const form = document.querySelector('.popup_form');
  const thanksBlock = document.getElementById('thank-you-message');
	 if(form) {
		 form.addEventListener('submit', function (event) {
	 
			 form.style.display = 'none'; // Скрываем форму
			 thanksBlock.style.display = 'block'; // Показываем блок "Спасибо"
		 });
	 } 
}

hideForm();
































