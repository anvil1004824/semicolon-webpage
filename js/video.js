const video = document.getElementById("semicolon-video");
const cancel = document.getElementById("cancel");
const videoCover = document.getElementById("video-cover");
const all = document.querySelector(".all");

function videoClicked() {
  video.classList.add("pop-up");
  video.classList.remove("pop-down");
  videoCover.classList.add("fadein");
  videoCover.classList.remove("fadeout");
  cancel.classList.add("cancel-appear");
  videoCover.classList.remove("hidden");
  all.classList.add("overflow-hidden");
  all.classList.remove("all-scroll");
}

function cancelClicked() {
  video.classList.remove("pop-up");
  video.classList.add("pop-down");
  videoCover.classList.remove("fadein");
  videoCover.classList.add("fadeout");
  cancel.classList.remove("cancel-appear");
  all.classList.remove("overflow-hidden");
  all.classList.add("all-scroll");
  video.pause();
  video.currentTime = 0;
  setTimeout(() => {
    videoCover.classList.add("hidden");
  }, 500);
}

video.addEventListener("click", videoClicked);
videoCover.addEventListener("click", cancelClicked);
cancel.addEventListener("click", cancelClicked);
