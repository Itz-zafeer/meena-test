const homeSwipersGap = window.innerWidth>768? window.innerWidth /100 * 2.5 : 20
var swiper = new Swiper(".homeSwipers", {
  spaceBetween: homeSwipersGap,
  slidesPerView:4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });