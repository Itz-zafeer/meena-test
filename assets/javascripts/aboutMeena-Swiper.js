//   Initialize Swiper 
const aboutMeenaSwiperGap = window.innerWidth>768? window.innerWidth /100 * 2.91666666667 : window.innerWidth /100 * 6.66666666667
const aboutMeenaSwiperPerView = window.innerWidth>768? 4.7: 3.6
var swiper = new Swiper(".aboutMeenaSwiper", {
    spaceBetween: aboutMeenaSwiperGap,
    slidesPerView:aboutMeenaSwiperPerView,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });