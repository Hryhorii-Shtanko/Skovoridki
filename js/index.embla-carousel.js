
// import EmblaCarousel from "embla-carousel";
// <script src="https://cdn.jsdelivr.net/npm/embla-carousel/embla-carousel.umd.min.js"></script>

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

// const totalPartials = document.querySelectorAll(
//   '[hx-trigger="load"], [data-hx-trigger="load"]'
// ).length;
// let loadedPartialsCount = 0;

// document.body.addEventListener("htmx:afterOnLoad", () => {
//   loadedPartialsCount++;
//   if (loadedPartialsCount === totalPartials) init();
// });


