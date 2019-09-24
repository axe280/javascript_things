'use strict';

(function () {
  function clickTab(wrapper, tab) {
    let tabDataTarget = tab.dataset.target;

    wrapper.querySelectorAll('.tabs_active')
      .forEach(activeItem => {
        activeItem.classList.remove('tabs_active');
      });

    tab.classList.add('tabs_active');
    wrapper.querySelector(`.${tabDataTarget}`).classList.add('tabs_active');
  }


  function searchTab(e) {
    let wrapper = e.currentTarget;
    let tab = e.target.closest('.tabs-header__tab');

    if (!tab) return;
    if (!wrapper.contains(tab)) return;

    clickTab(wrapper, tab);
  }


  document.querySelectorAll('.tabs-wrapper')
    .forEach(tabComponent => {
      tabComponent.addEventListener('click', searchTab);
    });

}());

