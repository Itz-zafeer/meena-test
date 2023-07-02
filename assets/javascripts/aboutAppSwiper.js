//   Initialize Swiper 
const aboutAppSwiperGap = window.innerWidth>768? window.innerWidth /100 * 20.8333333333 : window.innerWidth /100 * 6.66666666667
const aboutAppSwiperPerView = window.innerWidth>768? 1: 1
var swiper = new Swiper(".aboutAppSwiper", {
    spaceBetween: aboutAppSwiperGap,
    slidesPerView:aboutAppSwiperPerView,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });