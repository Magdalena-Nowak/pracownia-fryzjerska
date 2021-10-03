const headerVideo = document.querySelector("video");
const imageBoxes = document.querySelectorAll(".image-box");
const header = document.querySelector("header");
const gallery = document.querySelector("#gallery");
const footer = document.querySelector("footer");
const fullSizeGallery = document.querySelector(".full-size-gallery");
const previewGallery = document.querySelector(
  ".full-size-gallery .container-fluid"
);
const closeGalleryBtn = document.querySelector(
  ".full-size-gallery__icon--close"
);

headerVideo.addEventListener("loadeddata", () => {
  headerVideo.playbackRate = 0.5;
  headerVideo.play();
});


// const options = {
//   rootMargin: "0px",
//   treshold: 1,
// };

// let callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const image = entry.target.firstElementChild;
//       const imageSrc = image.getAttribute("data-src");
//       image.src = imageSrc;
//       entry.target.classList.add("active");
//       gsap.fromTo(
//         image,
//         { opacity: 0, y: "100%" },
//         { opacity: 1, y: "0%", duration: 1 }
//       );
//     }
//     if (entry.isIntersecting) {
//       observer.unobserve(entry.target);
//     }
//   });
// };

// let observer = new IntersectionObserver(callback, options);

// imageBoxes.forEach((image) => {
//   observer.observe(image);
// });

// imageBoxes.forEach((image) => {
//   image.addEventListener("click", (e) => {
//     header.classList.add("inactive");
//     footer.classList.add("inactive");
//     gallery.classList.add("inactive");
//     fullSizeGallery.classList.add("active");
//     fullSizeGallery.firstElementChild.appendChild(e.target);
//     fullSizeGallery.firstElementChild.appendChild(e.target);
//     const fullSizeImage = e.target;
//     fullSizeImage.classList.remove(
//       "image-box",
//       "col-5",
//       "col-sm-3",
//       "col-lg-2"
//     );
//     fullSizeImage.classList.add("col-11", "col-md-8", "col-lg-6");
//     fullSizeImage.firstElementChild.classList.add("image-height");
//     imageBoxes.forEach((image) => {
//       previewGallery.appendChild(image);
//       image.classList.remove(
//         "image-box",
//         "col-11",
//         "col-md-8",
//         "col-lg-6",
//         "active"
//       );
//       image.classList.add("col-1");
//       image.style.padding = "0px";
//       image.style.margin = "0px";
//     });
//   });
// });

// const closingGallery = () => {
//   header.classList.remove("inactive");
//   footer.classList.remove("inactive");
//   gallery.classList.remove("inactive");
//   fullSizeGallery.classList.remove("active");
// }

// closeGalleryBtn.addEventListener('click', closingGallery);
