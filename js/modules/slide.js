import { Splide } from "@splidejs/splide";
import { Video } from "@splidejs/splide-extension-video";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
import "../../css/slide.css";

export default function createSlide() {
  function showSlide() {
    const options = {
      type: "false",
      perPage: 3,
      gap: 30,
      pagination: false,
      lazyLoad: "nearby",
      breakpoints: {
        760: {
          perPage: 2,
          gap: 30,
          lazyLoad: "nearby",
        },
        580: {
          perPage: 1,
          gap: 30,
          lazyLoad: "nearby",
        },
      },
    };
    new Splide("#carousel-one", options).mount({ Video });
    new Splide("#carousel-two", options).mount();
  }

  window.addEventListener("load", showSlide);
}
