export default function buttonDelay() {
  window.addEventListener("load", () => {
    const cta = document.querySelector("#showButton_cta");
    if (cta) {
      setTimeout(
        () => {
          cta.style.display = "block";
        },
        733333,
        33
      );
    }
  });
}
