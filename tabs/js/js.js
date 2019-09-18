'use strict';

(function () {
  function searchClickTab(e) {
    let targetTab = e.target.closest('.tabs-header__tab');

    if (!targetTab) return;

    let dataTarget = targetTab.dataset.target;

    console.dir(targetTab);

    this.querySelectorAll('.tabs-active')
      .forEach(activeTabItem => {
        activeTabItem.classList.remove('tabs-active');
      });

    targetTab.classList.add('tabs-active');
    this.querySelector(`.${dataTarget}`).classList.add('tabs-active');
  }


  document.querySelectorAll('.tabs-wrapper')
    .forEach(tabComponent => {
      tabComponent.addEventListener('click', searchClickTab);

      tabComponent.querySelector('.tabs-header__tab').classList.add('tabs-active');
      tabComponent.querySelector('.tabs-panel').classList.add('tabs-active');
    });

}());

