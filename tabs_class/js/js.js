'use strict';

class Tabs {
  constructor(wrapper, ) {
    this.wrapper = wrapper;

    this.wrapper.addEventListener('click', this.clickTab.bind(this));
  }

  clickTab(event) {
    let tab = event.target.closest('.tabs-header__tab');

    if (!tab) return;
    if (!this.wrapper.contains(tab)) return;

    let tabDataTarget = tab.dataset.target;

    this.wrapper.querySelectorAll('.tabs_active')
      .forEach(activeItem => {
        activeItem.classList.remove('tabs_active');
      });

    tab.classList.add('tabs_active');
    this.wrapper.querySelector(`.${tabDataTarget}`).classList.add('tabs_active');
  }
}

document.querySelectorAll('.tabs-wrapper')
  .forEach(tabComponent => {
    const tab = new Tabs(tabComponent);
  });


