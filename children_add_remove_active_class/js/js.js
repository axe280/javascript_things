'use strict';

(function () {
  class AccordionActiveClassNameChildren {
    constructor(options) {
      this.wrapper = options.wrapper;
    }

    addActiveClass(clickItemName) {
      this.wrapper.addEventListener('click', addClass);

      function addClass(e) {
        let targetElement = e.target.closest(clickItemName);

        if (!targetElement) return;

        this.querySelectorAll(clickItemName).forEach(item => {
          item.classList.remove('active');
        });

        targetElement.classList.add('active');
      }
    }
  }

  const menuActive = new AccordionActiveClassNameChildren({
    wrapper: document.querySelector('.menu_js')
  });

  menuActive.addActiveClass('.menu__link');


  const menuActive2 = new AccordionActiveClassNameChildren({
    wrapper: document.querySelector('.menu_js-2')
  });

  menuActive2.addActiveClass('.menu__link');

  

}());

