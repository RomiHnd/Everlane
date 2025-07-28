window.addEventListener("DOMContentLoaded", () => {

let currentIndex = 0;

function showSlide(index) {
  const slideGroup = document.getElementById("slideGroup");
  const totalSlides = slideGroup.children.length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const slideWidth = slideGroup.children[0].offsetWidth;
  slideGroup.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

window.addEventListener("load", () => {
  showSlide(currentIndex);
});





 const track = document.querySelector('.gallery-track');
  const leftBtn = document.querySelector('.arrow.left');
  const rightBtn = document.querySelector('.arrow.right');

  let scrollIndex = 0;
  const step = 310;

  rightBtn.addEventListener('click', () => {
    scrollIndex++;
    const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
    const scrollAmount = scrollIndex * step;

    if (scrollAmount >= maxScroll) {
      scrollIndex--;
      return;
    }

    track.style.transform = `translateX(-${scrollAmount}px)`;
  });

  leftBtn.addEventListener('click', () => {
    if (scrollIndex > 0) {
      scrollIndex--;
      const scrollAmount = scrollIndex * step;
      track.style.transform = `translateX(-${scrollAmount}px)`;
    }
  });})
