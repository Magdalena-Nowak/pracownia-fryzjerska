// gsap.registerPlugin(ScrollTrigger, TextPlugin);

// // NAVIGATION
// // Variables
// const navigation = document.querySelector(".navigation__menu-wrapper");
// const navWrapper = document.querySelector(".navigation__wrapper");
// const navItems = document.querySelectorAll(".navigation__menu-item");
// const sections = document.querySelectorAll("#home section");
// const navButton = document.querySelector(".navigation__btn");
// const buttonLine1 = document.querySelector(".navigation__btn-line--one");
// const buttonLine2 = document.querySelector(".navigation__btn-line--two");
// const buttonLine3 = document.querySelector(".navigation__btn-line--three");
// const menuNav = document.querySelector("#home");
// const navLogo = document.querySelector(".navigation__link");
// const footerContent = document.querySelector(".contact");
// const descriptionWrapper = document.querySelector(
//   ".about__description-wrapper"
// );
// const navigationContent = document.querySelector(".navigation");
// const photoWrapper = document.querySelector(".about__photo-wrapper");
// const openPriceBtns = document.querySelectorAll(".price-list__reveal");
// const hidePriceBtns = document.querySelectorAll(".price-list__hide");
// const cardsContainers = document.querySelectorAll(".price-list__container");
// const priceSection = document.querySelector("#prices");
// const gallery = document.querySelector("#gallery");
// const mainContent = document.querySelector("main");
// const headerContent = document.querySelector("header");
// const rightBtn = document.querySelector(".gallery__right-icon");
// const leftBtn = document.querySelector(".gallery__left-icon");
// const swipeImage = document.querySelector(".salon-gallery__image");
// const swipeSlides = [...document.querySelectorAll(".salon-gallery__slide")];

// const time = 3000;
// let active = 0;

// Showing go-up button
const goUpBtn = document.querySelector(".go-up");
let scrollPosition;

const checkScrollPosition = () => {
  scrollPosition = window.scrollY;
};

const scrollPositionInterval = setInterval(checkScrollPosition, 1000);

document.addEventListener("scroll", function () {
  let newScrollPosition = window.scrollY;
  if (scrollPosition < newScrollPosition) {
    goUpBtn.classList.add("active");
  } else {
    goUpBtn.classList.remove("active");
  }
});

goUpBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// //ABOUT
// //Text
// const optionsAboutText = {
//   rootMargin: "0px 0px 0px 0px",
//   treshold: 1,
// };

// let callback = (entries, aboutTextObserver) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const aboutText = entry.target.parentElement;
//       gsap.fromTo(
//         aboutText,
//         { x: "-150%" },
//         {
//           opacity: 1,
//           x: "0%",
//           duration: 1.5,
//         }
//       );
//     }
//     if (entry.isIntersecting) {
//       aboutTextObserver.unobserve(entry.target);
//     }
//   });
// };

// let aboutTextObserver = new IntersectionObserver(callback, optionsAboutText);
// let targetAbout = document.querySelectorAll(".about__description");
// aboutTextObserver.observe(targetAbout[0]);

// //Photo
// const optionsAboutPhoto = {
//   rootMargin: "0px 0px 0px 0px",
//   treshold: 1,
// };

// let callbackPhoto = (entries, aboutPhotoObserver) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       gsap.fromTo(
//         entry.target,
//         { x: "150%" },
//         { opacity: 1, x: "0%", duration: 1.5 }
//       );
//     }
//     if (entry.isIntersecting) {
//       aboutPhotoObserver.unobserve(entry.target);
//     }
//   });
// };

// let aboutPhotoObserver = new IntersectionObserver(
//   callbackPhoto,
//   optionsAboutPhoto
// );

// let targetAboutPhoto = document.querySelector(".about__photo-wrapper");
// aboutPhotoObserver.observe(targetAboutPhoto);

// gsap.fromTo(
//   ".price-list__card--woman",
//   { y: "50%", opacity: 0 },
//   {
//     y: "0%",
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".price-list__card--woman",
//       start: "-50% bottom",
//     },
//   }
// );

// gsap.fromTo(
//   ".price-list__card--man",
//   { y: "50%", opacity: 0 },
//   {
//     y: "0%",
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".price-list__card--man",
//       start: "-20% bottom",
//     },
//   }
// );

// gsap.fromTo(
//   ".price-list__card--children",
//   { y: "50%", opacity: 0 },
//   {
//     y: "0%",
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".price-list__card--children",
//       start: "-20% bottom",
//     },
//   }
// );

// //GALLERY
// const optionsGallery = {
//   rootMargin: "0px",
//   treshold: 0,
// };

// let galleryObserver = new IntersectionObserver((elements) => {
//   elements.forEach((element) => {
//     if (element.isIntersecting) {
//       let elementChildrens = element.target.querySelectorAll("img");
//       elementChildrens.forEach((img) => {
//         let imgData = img.getAttribute("data-src");
//         img.src = imgData;
//         gsap.to(img, {
//           duration: 1.5,
//           clipPath: "circle(150% at 10% 10%)",
//         });
//       });
//     }
//     if (element.isIntersecting) {
//       galleryObserver.unobserve(element.target);
//     }
//   });
// }, optionsGallery);

// const targets = document.querySelectorAll(".swiper-wrapper");
// targets.forEach((target) => {
//   galleryObserver.observe(target);
// });

// var swiper = new Swiper(".mySwiper", {
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1100: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//     1600: {
//       slidesPerView: 4,
//       spaceBetween: 50,
//     },
//     2000: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
//   slidesPerView: 1,
//   spaceBetween: 30,
//   slidesPerGroup: 1,
//   loop: false,
//   loopFillGroupWithBlank: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// openPriceBtns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     gsap.fromTo(
//       cardsContainers[index],
//       1,
//       { display: "none" },
//       { display: "flex" }
//     );
//     const cards = cardsContainers[index].querySelectorAll(".price-list__body");
//     gsap.fromTo(cards, { opacity: 0 }, { opacity: 1, duration: 2 });
//     openPriceBtns[index].style.display = "none";
//     hidePriceBtns[index].style.display = "flex";
//   });
// });
// hidePriceBtns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     const cards = cardsContainers[index].querySelectorAll(".price-list__body");
//     gsap.fromTo(cards, { opacity: 1 }, { opacity: 0 });
//     gsap.fromTo(
//       cardsContainers[index],
//       { display: "flex" },
//       { display: "none" }
//     );
//     openPriceBtns[index].style.display = "flex";
//     hidePriceBtns[index].style.display = "none";
//     priceSection.scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });
