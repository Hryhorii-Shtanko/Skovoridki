function init() {
  // import("./theme-toggle.js");

  // import("https://unpkg.com/embla-carousel@8.5.1/embla-carousel.umd.js");
  import("./header.partial.js");
    
  }
  
  // import EmblaCarousel from 'embla-carousel';

  // document.addEventListener("DOMContentLoaded", () => {
  //   // Знаходимо контейнер каруселі
  //   const emblaNode = document.querySelector(".embla");
    
  //   // Ініціалізуємо Embla
  //   const embla = EmblaCarousel(emblaNode, {
  //     loop: true, // Зациклення
  //     draggable: true, // Перетягування мишкою/пальцем
  //   });
  
  //   // Опціонально: додай кнопки для управління
  //   const prevButton = document.querySelector(".embla__button--prev");
  //   const nextButton = document.querySelector(".embla__button--next");
  
  //   prevButton?.addEventListener("click", () => embla.scrollPrev());
  //   nextButton?.addEventListener("click", () => embla.scrollNext());
  // });
  import EmblaCarousel from "embla-carousel";

document.addEventListener("DOMContentLoaded", () => {
  const emblaNode = document.querySelector(".embla");
  const options = { loop: false, align: "start", slidesToScroll: 1 };
  const embla = EmblaCarousel(emblaNode, options);

  // Додаємо обробники подій для кнопок "Next" і "Prev"
  const prevBtn = document.querySelector(".embla__prev");
  const nextBtn = document.querySelector(".embla__next");

  prevBtn.addEventListener("click", embla.scrollPrev);
  nextBtn.addEventListener("click", embla.scrollNext);
});


  const totalPartials = document.querySelectorAll(
    '[hx-trigger="load"], [data-hx-trigger="load"]'
  ).length;
  let loadedPartialsCount = 0;
  
  document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
  });
  
  