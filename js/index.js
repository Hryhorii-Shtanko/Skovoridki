function init() {
  // import("./theme-toggle.js");
// import('https://unpkg.com/embla-carousel/embla-carousel.umd.js');
  // import("https://unpkg.com/embla-carousel@8.5.1/embla-carousel.umd.js");
    import("./header.partial.js");
    import("./index.embla-carousel_arrow-buttons.js");
    import("./index.embla-carousel_arrow-dot_button.js");
    import("./index.embla-carousel.js");

  }

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
  let loadedPartialsCount =0;
  document.body.addEventListener('htmx:afterOnLoad', ()=>{
    loadedPartialsCount++;
    if (loadedPartialsCount=== totalPartials) init();
  });
  const OPTIONS = { loop: true }

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = emblaNode.querySelector('.embla__button--next')
const dotsNode = emblaNode.querySelector('.embla__dots')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtnNode,
  nextBtnNode
)
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
emblaApi.on('destroy', removeDotBtnsAndClickHandlers)

