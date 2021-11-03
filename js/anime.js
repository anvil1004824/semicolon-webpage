const title = document.querySelector(".anime__title");
const subtitle = document.querySelector(".anime__subtitle");
backFixed();
setTimeout(() => {
  title.classList.remove("hidden");
  subtitle.classList.remove("hidden");
}, 2500);
setTimeout(() => {
  backFlow();
}, 3500);
