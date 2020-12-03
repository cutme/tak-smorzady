document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.documentElement.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
            window.anims();
        }, 250);
        
        document.getElementsByClassName('js-carousel')[0] ? window.carousel() : false;        	    

    };
    
    window.addEventListener('load', init);

}, false);