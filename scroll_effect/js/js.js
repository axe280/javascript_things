'use strict';

document.addEventListener('scroll', scrollAppear);

const introBlocks = document.querySelectorAll('.intro-block');
const screenPosition = window.innerHeight / 2;

function scrollAppear() {
  introBlocks.forEach(element => {
    const introPosition = element.getBoundingClientRect().top;

    if (introPosition < screenPosition) {
      element.classList.add('intro_appear');
    }
  });
}

