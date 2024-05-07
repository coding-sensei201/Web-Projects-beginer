const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentSlide = 0; // Track the current slide index

// Function to change background image based on current slide
function changeBackgroundImage() {
  sliderContainer.style.backgroundImage = `url(${slides[currentSlide].src})`;
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
  thumbnails[currentSlide].classList.add('active');
}

// Function to show the next slide
function nextSlide() {
  console.log(slides[currentSlide]);
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide if at the end
  console.log(currentSlide);
  slides[currentSlide].classList.add('active');
  changeBackgroundImage();
}

// Function to show the previous slide
function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to last slide if at the beginning
  slides[currentSlide].classList.add('active');
  changeBackgroundImage();
}

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

