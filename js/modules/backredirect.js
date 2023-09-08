export default function backRedirect() {
  const url = window.location.href;
  const redirectURL =
    "https://tiowill.com.br/setup-zeus-pv29-of2/?src=9639f68efeb944ad881226297847b2fb&utm_source=pv18&utm_medium=back_trial";

  window.history.pushState(null, document.title, url);
  window.addEventListener("popstate", () => {
    window.location.href = redirectURL;
  });
}

window.addEventListener("load", backRedirect);
