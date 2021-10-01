const headerVideo = document.querySelector("video");

headerVideo.addEventListener("loadeddata", () => {
  headerVideo.playbackRate = 0.5;
  headerVideo.play();
});