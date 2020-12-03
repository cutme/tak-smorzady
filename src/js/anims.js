import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);

    window.anims = function() {

        gsap.utils.toArray(".js-fadeIn").forEach(function(section) {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: '-50px bottom',
                    toggleActions: "restart pause resume pause"
                },
                opacity: 0, 
                duration: 1,
                y: 150
            });
        });  
        
        gsap.utils.toArray(".o-cols:not(.no-anim) > *").forEach(function(section) {

            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: '-50px bottom',
                    toggleActions: "restart pause resume pause"
                },
                opacity: 0, 
                duration: 1,
                y: 50
            });
        });
    }

    



}, false)
