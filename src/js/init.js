document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        
        
        setTimeout(function() {
            cover.remove();
            window.anims();
            document.documentElement.classList.add('is-loaded');
        }, 250);
        
        document.getElementsByClassName('js-carousel')[0] ? window.carousel() : false;        	    

    };
    
    window.addEventListener('load', init);

}, false);