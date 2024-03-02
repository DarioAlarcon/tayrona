var TrandingSlider = new Swiper('.tranding-slider', {
    grabCursor: true,
    autoplay:{
      delay: 2000,
      disableOnInteraction: false
    },
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });