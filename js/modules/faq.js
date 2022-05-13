export default function faq() {
  const faq_question = document.querySelectorAll(".pv28_question");
  console.log(faq_question);

  if (faq_question) {
    function runFaq() {
      function clean(e) {
        const question = e.currentTarget;
        question.nextElementSibling.style.height = "0px";
        question.removeEventListener("click", clean);
      }

      function showRes(e) {
        const question = e.currentTarget;
        const res = question.nextElementSibling;
        res.classList.toggle("open");
        let size = res.scrollHeight + 20;
        res.style.height = `${size}px`;
        question.addEventListener("click", clean);
      }

      faq_question.forEach((faq) => {
        faq.addEventListener("click", showRes);
      });
    }

    // function updateFaq() {
    //   const opened = document.querySelectorAll(".pv28_question_res.open");
    //   opened.forEach((res) => {
    //     res.style.height = `${res.scrollHeight + 20}px`;
    //   });
    // }

    // window.addEventListener("resize", updateFaq);
    window.addEventListener("load", runFaq);
  }
}
