import { gsap, TweenMax, Power1 } from "gsap";


document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-accordion');
    
    const init = function(obj) {

        const item = obj.getElementsByClassName('js-item');
        
        const toggle = function(ev, section, op) {
            TweenMax.to(section, 0.4, {
                height: ev,
                opacity: op,
                immediateRender: false,
                ease: Power1.easeOut
            });
        }
        
        
        const action = function(e) {
            
            const _that = e.currentTarget,
                  _height = 0;
                        
            if (_that.classList.contains('is-rollout')) {
                _that.classList.remove('is-rollout');
                toggle(_height, _that.getElementsByClassName('js-section')[0], 0);
                
            } else {
            
                for (let i = 0; i < item.length; i ++) {
                    item[i].classList.remove('is-rollout');
                    toggle(_height, item[i].getElementsByClassName('js-section')[0], 0);
                }   
    
                _that.classList.add('is-rollout');
                toggle('auto', _that.getElementsByClassName('js-section')[0], 1);
            }

        };
        
        for( let i = 0; i < item.length; i ++ ) {
            item[i].addEventListener('click', action);
            
            if (item[i].classList.contains('is-rollout')) {
                toggle('auto', item[i].getElementsByClassName('js-section')[0], 1);
            }
        }
        
    };

    if (el.length > 0) {
        for (let i = 0; i < el.length; i++) {
            init(el[i]);
        }
    }
    
    
    
}, false);
