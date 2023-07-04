const homeSwipersGap = window.innerWidth>768? window.innerWidth /100 * 2.5 :window.innerWidth /100 * 4.10256410256
var swiper = new Swiper(".homeSwipers", {
  spaceBetween: homeSwipersGap,
  slidesPerView:window.innerWidth>768? 3 : 1.30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });