document.addEventListener('DOMContentLoaded',function() {

    const nav = document.getElementsByClassName('js-nav')[0],
          hamburger = document.getElementsByClassName('js-hamburger'),
          overlay = document.getElementsByClassName('js-overlay')[0];
          
        console.log(overlay);

    const init = function() {

        const hideMenu = function() {
            nav.classList.remove('is-visible');
            
            document.removeEventListener('click', clickOutside);
            
            setTimeout(function() {
                overlay.classList.remove('is-visible');
            }, 100);
        };

        const showMenu = function() {
            overlay.classList.add('is-visible');
            
            setTimeout(function() {
                nav.classList.add('is-visible');
                document.addEventListener('click', clickOutside);
            }, 100);
        };

        const menu = function(e) {
            nav.classList.contains('is-visible') ? hideMenu() : showMenu();
        };
        
        for (let i = 0; i < hamburger.length; i ++) {
            hamburger[i].addEventListener('click', menu);
        }
        
        const clickOutside = function(e) {
            
            console.log(e.target.classList);

            if (!e.target.closest('.js-nav')) {
                hideMenu();
        	}
        };
        


        // Hide menu on ESC

        document.addEventListener('keydown', function(evt) {
            // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideMenu();
            }
        });

    };

    nav ? init() : false;

}, false);