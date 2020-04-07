(function ($) {
"use strict";

// opening menubar

const openBtn = document.querySelector('.open-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.mainmenu');
const links = document.querySelectorAll('.mainmenu ul li')

openBtn.addEventListener('click', () => {
	menu.classList.toggle('menuActive');
	openBtn.classList.toggle('goimgToCross');
	overlay.classList.toggle('ovelayActive');

	links.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = '';
		} else {
			link.style.animation = `comeIn 1s forwards ${index / 7 + .2}s`;
		}
	})
})
overlay.addEventListener('click', () => {
	menu.classList.remove('menuActive');
	openBtn.classList.remove('goimgToCross');
	overlay.classList.remove('ovelayActive')
})






// tab-active
const tabs = document.querySelectorAll('.feature-tab > div');
const featureContent = document.querySelectorAll('.feature-content')
tabs.forEach((tab, index) => {
	tab.addEventListener('click',() => {

		for (let i = 0; i < featureContent.length; i++) {
			tabs[i].classList.remove('tabActive');
		};
		tab.classList.add('tabActive');

		for (let i = 0; i < featureContent.length; i++) {
			featureContent[i].classList.remove('contentActive');
		};
		featureContent[index].classList.add('contentActive');

	})
});


// user-testimony

const userImgs = document.querySelectorAll('.testimony-single-slider img');
const userspeechs = document.querySelectorAll('.user-speech > div');
const barAfter = document.querySelector('.active-slide');

userImgs.forEach((user, index) => {

	let parentWidth = user.parentElement.clientWidth;
	
	barAfter.style.transform = `translateX(${parentWidth * 2}px)`;


	user.addEventListener('click', function(){
		// activeSpeech
		for (let i = 0; i < userspeechs.length; i++) {
			userspeechs[i].classList.remove('activeSpeech');
		};
		userspeechs[index].classList.add('activeSpeech');

		// activeImg
		for (let i = 0; i < userImgs.length; i++) {
			userImgs[i].parentElement.classList.remove('activeImg');
		};
		user.parentElement.classList.add('activeImg');


		// sliding to active
				barAfter.style.transform = `translateX(${parentWidth * index}px)`;
	})
})


// counterUp


// speaker-slider
$('.speaker-slider').owlCarousel({
    loop:true,
    margin:0,
	items:4,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:3
        },
        1500:{
            items:4
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



})(jQuery);	