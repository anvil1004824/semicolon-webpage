const video = document.getElementById("semicolon-video");
const cancel = document.getElementById("cancel");

function videoClicked() {
  video.classList.add("pop-up");
  video.classList.remove("pop-down");
  cancel.classList.add("cancel-appear");
}

function cancelClicked() {
  video.classList.remove("pop-up");
  video.classList.add("pop-down");
  cancel.classList.remove("cancel-appear");
  video.pause();
  video.currentTime = 0;
}

video.addEventListener("click", videoClicked);
cancel.addEventListener("click", cancelClicked);
