import Glide, {
  Controls,
  Autoplay,
  Swipe,
} from "@glidejs/glide/dist/glide.modular.esm";

const sliderConfig = {
  type: "carousel",
  perView: 1,
  autoplay: 5000,
};

document.addEventListener(`DOMContentLoaded`, function () {
  new Glide(`.js-main-slider`, sliderConfig).mount({
    Controls,
    Autoplay,
    Swipe,
  });
});
