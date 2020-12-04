import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded',function() {

    window.carousel = function() {
	    
	   const swiper = new Swiper(document.getElementsByClassName('js-carousel')[0], {
            spaceBetween: 0,
            slidesPerView: 1,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                  slidesPerView: 3,
                },
                
                501: {
                  slidesPerView: 2,
                },
            },
            speed: 600,
        })
    };

    
    

}, false)
