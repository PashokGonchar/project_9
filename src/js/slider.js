new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
  pagination: {
    el: '.reviews-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2.5,
  },
});
