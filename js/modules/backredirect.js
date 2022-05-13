export default function backRedirect() {
  const url = window.location.href;
  const urlRedirect =
    "https://go.tiowill.com.br/campaign/zeus-pv29-trial?utm_source=pv18&utm_medium=back_trial";

  window.history.pushState(null, document.title, url);
  window.addEventListener("popstate", () => {
    window.location.href = urlRedirect;
  });
}

window.addEventListener("load", backRedirect);
