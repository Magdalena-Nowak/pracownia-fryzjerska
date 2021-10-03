const headerVideo = document.querySelector("video");
const images = document.querySelectorAll("#gallery a");

headerVideo.addEventListener("loadeddata", () => {
  headerVideo.playbackRate = 0.5;
  headerVideo.play();
});

const options = {
  rootMargin: "0px",
  treshold: 1,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target.firstElementChild;
      const imageSrc = image.getAttribute("data-src");
      image.src = imageSrc;
      entry.target.classList.add("active");
      gsap.fromTo(
        image,
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 1 }
      );
    }
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(callback, options);

images.forEach((image) => {
  observer.observe(image);
});
