function handleVideo() {
  const video = document.querySelector(".hero-video");
  if (window.innerWidth < 768) {
    video.pause();
  } else {
    video.play();
  }
}

window.addEventListener("resize", handleVideo);
document.addEventListener("DOMContentLoaded", handleVideo);
