let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('slider__slide');
  const dots = document.getElementsByClassName('slider__point');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('slider__point_active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' slider__point_active';
}

showSlides(slideIndex);

const prev = document.querySelector('.slider__button_prev');
const next = document.querySelector('.slider__button_next');
const allImages = document.querySelectorAll('.slider__img');

prev.addEventListener('click', () => {
  showSlides(slideIndex -= 1);
});

next.addEventListener('click', () => {
  showSlides(slideIndex += 1);
});

allImages.forEach((img) => (
  img.addEventListener('click', () => {
    showSlides(slideIndex += 1);
  })
));
