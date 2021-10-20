const whoBtn = document.querySelector(".who__title");
const whoImg = document.querySelectorAll(".who__img");

whoBtn.addEventListener("click", () => {
  whoBtn.classList.add("btnClicked");
  whoImg.forEach((img, index) => {
    if (index % 2 === 1) {
      img.classList.add("rightIn");
    } else {
      img.classList.add("leftIn");
    }
  });
});
