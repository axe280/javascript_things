'use strict';

class Carousel {
  constructor (wrapper) {
    this.wrapper = wrapper;
    this.carouselSlide = this.wrapper.querySelector('.carousel-slide');
    this.carouselImages = Array.from(this.wrapper.querySelectorAll('.carousel-slide img'));
    this.prevBtn = this.wrapper.querySelector('.prev-btn');
    this.nextBtn = this.wrapper.querySelector('.next-btn');

    this.counter = 1;
    this.slideSize = this.carouselImages[0].clientWidth;

    this.moveSlide();

    this.nextBtn.addEventListener('click', this.clickNextSlide.bind(this));
    this.prevBtn.addEventListener('click', this.clickPrevSlide.bind(this));

    this.carouselSlide.addEventListener('transitionend', slideTransitionend.bind(this));


    function slideTransitionend(event) {
      if (this.carouselImages[this.counter].id === 'lastClone') {
        this.carouselSlide.classList.remove('transition');
        this.counter = this.carouselImages.length - 2;
        this.moveSlide();
      }

      if (this.carouselImages[this.counter].id === 'firstClone') {
        this.carouselSlide.classList.remove('transition');
        this.counter = this.carouselImages.length - this.counter;
        this.moveSlide();
      }
    }
  }

  moveSlide() {
    this.carouselSlide.style.transform = `translateX(${-this.slideSize * this.counter}px`;
  }

  clickNextSlide(event) {
    if (this.counter >= this.carouselImages.length - 1) {
      return;
    }

    this.carouselSlide.classList.add('transition');
    this.counter++;

    this.moveSlide();
  }

  clickPrevSlide(event) {
    if (this.counter <= 0) {
      return;
    }

    this.carouselSlide.classList.add('transition');
    this.counter--;

    this.moveSlide();
  }
}

document.querySelectorAll('.carousel-wrapper')
  .forEach(carousel => {
    new Carousel(carousel);
  });