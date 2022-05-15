'use strict';

let slideIndex = 0;
let slides = document.getElementsByClassName('slider__img-wrapper');
let buttons = document.querySelectorAll('.controls button');
let descs = document.querySelectorAll('.slider__desc-item');
let i = 0;

slides[slideIndex].classList.remove('fade');
slides[slideIndex].style.display = `block`;
descs[slideIndex].classList.remove('fade');
descs[slideIndex].style.display = `block`;
buttons[slideIndex].classList.add('active');

function showSlide(e) {
  let prev = slideIndex;
  let arr = Array.from(buttons);
  let n = arr.indexOf(e.currentTarget);
  if (n === -1) {
    return;
  }
  slideIndex = n;
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  if (n !== prev) {
    if (i === 0) {
      slides[0].classList.add('fade');
      descs[0].classList.add('fade');
      i++;
    }
  }
}

for (let button of buttons) {
  button.addEventListener(`click`, showSlide);
}
