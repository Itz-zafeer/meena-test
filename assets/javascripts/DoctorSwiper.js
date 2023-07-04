const doctorsSwiper = window.innerWidth>768? window.innerWidth /100 * 2.5 :window.innerWidth /100 * 4.10256410256
var swiper = new Swiper(".doctorsSwiper", {
  spaceBetween: doctorsSwiper,
  slidesPerView:window.innerWidth>768? 4 : 1.31,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });