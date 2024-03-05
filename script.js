const observedIcons = document.querySelectorAll('.icon-div');
const observedslider = document.querySelectorAll('.tranding');
const observedbath = document.querySelectorAll('.div-baño');
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

/*
<section class="items-section" id="items-section">
        <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <h2>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </h2>
        <div class="icon-body">
            <div class="icon-div-big left">
                <div class="icon-div">
                    <img src="assets/shower-icon.png" alt="">
                    <p>Baño</p>
                </div>
                <div class="icon-div">
                    <img src="assets/kitchen.png" alt="">
                    <p>servicio de cocina</p>
                </div>
                <div class="icon-div">
                    <img src="assets/nevera.png" alt="">
                    <p>nevera</p>
                </div>
                <div class="icon-div">
                    <img src="assets/wash.png" alt="">
                    <p>lavadora</p>
                </div>
            </div>
            <div class="icon-div-big right">
                <div class="icon-div">
                    <img src="assets/wifi-icon.png" alt="">
                    <p>wifi</p>
                </div>
                <div class="icon-div">
                    <img src="assets/lock.png" alt="">
                    <p>control de acceso</p>
                </div>
                <div class="icon-div">
                    <img src="assets/security.png" alt="">
                    <p>seguridad</p>
                </div>
                <div class="icon-div">
                    <img src="assets/study.png" alt="">
                    <p>zona de estudio</p>
                </div>
            </div>
        </div>
    </section>
<section class="items-section" id="items-section">
        <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <h2>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </h2>
        <div class="icon-body">
            <div class="icon-div-big left">
                <div class="icon-div">
                    <img src="assets/shower-icon.png" alt="">
                    <p>Baño</p>
                </div>
                <div class="icon-div">
                    <img src="assets/kitchen.png" alt="">
                    <p>servicio de cocina</p>
                </div>
                <div class="icon-div">
                    <img src="assets/nevera.png" alt="">
                    <p>nevera</p>
                </div>
                <div class="icon-div">
                    <img src="assets/wash.png" alt="">
                    <p>lavadora</p>
                </div>
            </div>
            <div class="icon-div-big right">
                <div class="icon-div">
                    <img src="assets/wifi-icon.png" alt="">
                    <p>wifi</p>
                </div>
                <div class="icon-div">
                    <img src="assets/lock.png" alt="">
                    <p>control de acceso</p>
                </div>
                <div class="icon-div">
                    <img src="assets/security.png" alt="">
                    <p>seguridad</p>
                </div>
                <div class="icon-div">
                    <img src="assets/study.png" alt="">
                    <p>zona de estudio</p>
                </div>
            </div>
        </div>
    </section>
    <section class="cuartos-section" id="cuartos-section">
        <section id="tranding" class="tranding">
            <div class="cards-wall">
              <div class="swiper tranding-slider">
                <div class="swiper-wrapper">
                  <!-- Slide-start -->
                  <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                      <img src="assets/habitacion.jpg" alt="">
                    </div>
                  </div>
                  <!-- Slide-end -->
                  <!-- Slide-start -->
                  <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                      <img src="assets/habitacion.jpg" alt="">
                    </div>
                  </div>
                  <!-- Slide-end -->
                  <!-- Slide-start -->
                  <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                      <img src="assets/habitacion.jpg" alt="">
                    </div>
                  </div>
                  <!-- Slide-end -->
                  <!-- Slide-start -->
                  <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                      <img src="assets/habitacion.jpg" alt="">
                    </div>
                  </div>
                  <!-- Slide-end -->
                  <!-- Slide-start -->
                  <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                      <img src="assets/habitacion.jpg" alt="">
                    </div>
                  </div>
                  <!-- Slide-end -->
                </div>
      
                <div class="tranding-slider-control">
                  <div class="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                  </div>
                  <div class="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </div>
      
              </div>
            </div>
          </section>
        <div class="info-cuartos" id="info-cuartos">
            <h1>Habitaciones</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </div>
          
    </section>*/