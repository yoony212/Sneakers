const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
    delay: 4000,
  },

  loop: true,
  slidesPerView:4,
});

mySwiper.on('slideChange', function () {
  console.log('9' + (mySwiper.realIndex + 1));
});