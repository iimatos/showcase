export default function scrollSmooth() {
  window.addEventListener("load", () => {
    const hrefButton = document.querySelectorAll("a[href^='#']");
    if (hrefButton) {
      hrefButton.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const href = btn.getAttribute("href");
          const section = document.querySelector(href);
          console.log(section);
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }
  });
}
