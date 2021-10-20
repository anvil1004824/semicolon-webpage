const video = document.querySelector(".semicolon-video");
const cancel = document.querySelector(".cancel");
const videoCover = document.querySelector(".video-cover");

function videoClicked() {
  video.classList.add("pop-up");
  video.classList.remove("pop-down");
  videoCover.classList.add("fadein");
  videoCover.classList.remove("fadeout");
  cancel.classList.add("cancel-appear");
  videoCover.classList.remove("hidden");
  backFixed();
}

function cancelClicked() {
  video.classList.remove("pop-up");
  video.classList.add("pop-down");
  videoCover.classList.remove("fadein");
  videoCover.classList.add("fadeout");
  cancel.classList.remove("cancel-appear");
  backFlow();
  video.pause();
  video.currentTime = 0;
  setTimeout(() => {
    videoCover.classList.add("hidden");
  }, 500);
}

video.addEventListener("play", videoClicked);
videoCover.addEventListener("click", cancelClicked);
cancel.addEventListener("click", cancelClicked);
