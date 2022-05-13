import { Splide } from "@splidejs/splide";
import { Video } from "@splidejs/splide-extension-video";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
import "../../css/slide.css";

export default function createSlide() {
  const slideOne = document.querySelector("#carousel-one");
  const slideTwo = document.querySelector("#carousel-two");
  const slideThree = document.querySelector("#carousel-three");

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

    const optionsTwo = {
      type: "false",
      autoplay: true,
      perMove: 1,
      speed: 300,
      interval: 2500,
      rewind: true,
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

    if (slideOne) {
      new Splide("#carousel-one", options).mount({ Video });
    }
    if (slideTwo) {
      new Splide("#carousel-two", options).mount();
    }
    if (slideThree) {
      new Splide("#carousel-three", optionsTwo).mount();
    }
  }

  window.addEventListener("load", showSlide);
}
