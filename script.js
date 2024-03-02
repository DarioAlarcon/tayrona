const observedIcons = document.querySelectorAll('.icon-div');
const observedslider = document.querySelectorAll('.tranding');
const observedbath = document.querySelectorAll('.div-baño');
    const mainImg = document.getElementById('main-div-left');
    const info = document.getElementById('info-cuartos');
    const infor = document.getElementById('info-cocina');
    const loadPhrase = (entries, observer)=>{
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              console.log(entry.target.classList)
          }
      });
    }
    const observer = new IntersectionObserver(loadPhrase,{
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.5
    },
    )
    const observar = new IntersectionObserver(loadPhrase,{
      root: null,
      rootMargin: "0px 0px -10px 0px",
      threshold: 0.2
    },
    )
    observedIcons.forEach(element => {
        observer.observe(element);
    });
    observedslider.forEach(element => {
        observer.observe(element);
    });
    observedbath.forEach(element => {
        observar.observe(element);
    });
    observer.observe(mainImg);
    observer.observe(info);
    observer.observe(infor);



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

