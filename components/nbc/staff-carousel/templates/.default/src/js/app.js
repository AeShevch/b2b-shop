import Glide, { Controls, Swipe } from "@glidejs/glide/dist/glide.modular.esm";

const CAROUSEL_SELECTOR = `.js-staff-carousel`;

const sliderConfig = {
  type: "carousel",
  perView: 2,
  gap: 0,
};

document.addEventListener(`DOMContentLoaded`, function () {
  new Glide(CAROUSEL_SELECTOR, sliderConfig).mount({
    Controls,
    Swipe,
  });
});
