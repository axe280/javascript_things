'use strict';

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

moveSlide();


// button listeners
nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) {
    return;
  }

  carouselSlide.classList.add('transition');
  counter++;

  moveSlide();
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    return;
  }

  carouselSlide.classList.add('transition');
  counter--;
  moveSlide();
});

// transition listener
carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.classList.remove('transition');
    counter = carouselImages.length - 2;
    moveSlide();
  }

  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.classList.remove('transition');
    counter = carouselImages.length - counter;
    moveSlide();
  }
});


function moveSlide() {
  carouselSlide.style.transform = `translateX(${-size * counter}px`;
}