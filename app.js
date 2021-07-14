gsap.registerPlugin(ScrollTrigger, TextPlugin);

// NAVIGATION
// Variables
const navigation = document.querySelector(".navigation__wrapper");
const navItems = document.querySelectorAll(".navigation__item");
const sections = document.querySelectorAll("#home section");
const navButton = document.querySelector(".navigation__btn");
const buttonLine1 = document.querySelector(".navigation__btn-line--one");
const buttonLine2 = document.querySelector(".navigation__btn-line--two");
const buttonLine3 = document.querySelector(".navigation__btn-line--three");
const menuNav = document.querySelector("#home");
const logoNav = document.querySelector(".navigation__link");
const footerContent = document.querySelector(".contact");
const descriptionWrapper = document.querySelector(
  ".about__description-wrapper"
);
const navigationContent = document.querySelector(".navigation");
const photoWrapper = document.querySelector(".about__photo-wrapper");
const openPriceBtns = document.querySelectorAll(".price-list__reveal");
const hidePriceBtns = document.querySelectorAll(".price-list__hide");
const cardsContainers = document.querySelectorAll(".price-list__container");
const priceSection = document.querySelector("#prices");
const galleryContent = document.querySelector(".gallery__wrapper");
const gallery = document.querySelector("#gallery");
const gallerySlider = document.querySelector(".gallery__swiper");
const smallImages = document.querySelectorAll(".gallery__thumb");
const regularImages = document.getElementsByClassName("gallery__regular-image");
const regularImagesArray = [];
const closeBigGallery = document.querySelector(".gallery__close-icon");
const bigImage = document.querySelector(".gallery__big-image");
const mainContent = document.querySelector("main");

const headerContent = document.querySelector("header");
const rightBtn = document.querySelector(".gallery__right-icon");
const leftBtn = document.querySelector(".gallery__left-icon");
const sectionAbout = document.querySelector(".about");
const allImages = regularImages.length - 1;
const thumbsGallery = document.querySelector(".gallery__thumbs");
let imageNr;
let currentImageNr = 6;
let more = 0;
const swipeImage = document.querySelector(".salon-gallery__image");
const swipeSlides = [...document.querySelectorAll(".salon-gallery__slide")];

const time = 3000;
let active = 0;

// NAVIGATION
function openingNavigation() {
  navigation.classList.toggle("active");
  menuNav.scrollIntoView({
    behavior: "smooth",
  });
  mainContent.classList.toggle("inactive");
  footerContent.classList.toggle("inactive");
  buttonLine1.classList.toggle("active");
  buttonLine2.classList.toggle("active");
  buttonLine3.classList.toggle("active");
}

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    navigation.classList.remove("active");
    mainContent.classList.remove("inactive");
    footerContent.classList.remove("inactive");
    buttonLine1.classList.toggle("active");
    buttonLine2.classList.toggle("active");
    buttonLine3.classList.toggle("active");
    sections[index].scrollIntoView({
      behavior: "smooth",
    });
  });
});

logoNav.addEventListener("click", () => {
  menuNav.scrollIntoView({
    behavior: "smooth",
  });
});

navButton.addEventListener("click", openingNavigation);

//SLIDER GALLERY
const swipeList = [
  { img: "./img/pracownia_fryzjerska_wnetrze1-large.png" },
  { img: "./img/pracownia_fryzjerska_wnetrze2-large.png" },
  { img: "./img/pracownia_fryzjerska_wnetrze3-large.png" },
];

const autoChangeSlides = () => {
  const activeSlide = swipeSlides.findIndex((slide) =>
    slide.classList.contains("active")
  );
  swipeSlides[activeSlide].classList.remove("active");
  swipeSlides[active].classList.add("active");
};

const changeSwipe = () => {
  active++;
  if (active === swipeList.length) {
    active = 0;
  }
  swipeImage.src = swipeList[active].img;
  autoChangeSlides();
};

let timeInterval = setInterval(changeSwipe, time);

const changeSlides = (e) => {
  if (
    e.target.classList.contains("salon-gallery__left-icon") ||
    e.target.classList.contains("salon-gallery__right-icon")
  ) {
    clearInterval(timeInterval);
    e.target.classList.contains("salon-gallery__left-icon")
      ? active--
      : active++;
    if (active === swipeList.length) {
      active = 0;
    } else if (active < 0) {
      active = swipeList.length - 1;
    }
    swipeImage.src = swipeList[active].img;
    autoChangeSlides();
    timeInterval = setInterval(changeSwipe, time);
  }
};

window.addEventListener("click", changeSlides);

changeSwipe();

//ABOUT
//Text
const optionsAboutText = {
  rootMargin: "0px 0px 0px 0px",
  treshold: 1,
};

let callback = (entries, aboutTextObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const aboutText = entry.target.parentElement;
      gsap.fromTo(
        aboutText,
        { x: "-150%" },
        {
          opacity: 1,
          x: "0%",
          duration: 1.5,
        }
      );
    }
    if (entry.isIntersecting) {
      aboutTextObserver.unobserve(entry.target);
    }
  });
};

let aboutTextObserver = new IntersectionObserver(callback, optionsAboutText);

let targetAbout = document.querySelectorAll(".about__description");
aboutTextObserver.observe(targetAbout[0]);

//Photo
const optionsAboutPhoto = {
  rootMargin: "0px 0px 0px 0px",
  treshold: 1,
};

let callbackPhoto = (entries, aboutPhotoObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.fromTo(
        entry.target,
        { x: "150%" },
        { opacity: 1, x: "0%", duration: 1.5 }
      );
    }
    if (entry.isIntersecting) {
      aboutPhotoObserver.unobserve(entry.target);
    }
  });
};

let aboutPhotoObserver = new IntersectionObserver(
  callbackPhoto,
  optionsAboutPhoto
);

let targetAboutPhoto = document.querySelector(".about__photo-wrapper");
aboutPhotoObserver.observe(targetAboutPhoto);

// gsap.fromTo(
//   ".price-list__card--woman",
//   { x: "-200%" },
//   {
//     x: "0%",
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: ".price-list__card--woman",
//       start: "top 70%",
//     },
//   }
// );

// gsap.fromTo(
//   ".price-list__card--man",
//   { x: "200%" },
//   {
//     x: "0%",
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: ".price-list__card--man",
//       start: "top 70%",
//     },
//   }
// );

// gsap.fromTo(
//   ".price-list__card--children",
//   { x: "-200%" },
//   {
//     x: "0%",
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: ".price-list__card--children",
//       start: "top 70%",
//       // markers: true,
//     },
//   }
// );

//GALLERY

const optionsGallery = {
  rootMargin: "0px",
  treshold: 0,
};

let galleryObserver = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      let elementChildrens = element.target.querySelectorAll("img");
      elementChildrens.forEach((img) => {
        let imgData = img.getAttribute("data-src");
        img.src = imgData;
        gsap.to(img, {
          duration: 1.5,
          clipPath: "circle(150% at 10% 10%)",
        });
      });
    }
    if (element.isIntersecting) {
      galleryObserver.unobserve(element.target);
    }
  });
}, optionsGallery);

const targets = document.querySelectorAll(".swiper-wrapper");
targets.forEach((target) => {
  galleryObserver.observe(target);
});

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        2000: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});


function hideNavigation() {
  navigationContent.style.position = "static";
  console.log(navigationContent);
}
// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
//   observer: true,
//   observeParents: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
//   observer: true,
//   observeParents: true,
// });

// const imagesSwiper = document.querySelectorAll(".gallery__regular-wrapper");
// const swiperContent = document.querySelector(".gallery_swiper");
// const bigSwiper = document.querySelector(".mySwiper2");
// const smallSwiper = document.querySelector(".mySwiper");
// const bigImagesSwiper = document.querySelectorAll(".swiper-slide__big");
// const smallSwiperSlides = document.querySelectorAll(".swiper-slide__small");
// // const bigSwiperSlides = document.querySelectorAll(".swiper-wrapper__big div");
// console.log(smallSwiperSlides);
// imagesSwiper.forEach((image, index) => {
//   image.addEventListener("click", function () {
//     openingSwiper(image, index);
//   });
// });

// // console.log(swiperContent);

// function openingSwiper(image, index) {
//   swiperContent.classList.add("active");
//   mainContent.classList.add("inactive");
//   footerContent.classList.add("inactive");
//   document.querySelector("body").classList.add("active");
//   document.querySelector(".navigation").style.display = "none";
//   bigSwiper.style.display = "block";
//   smallSwiper.style.display = "flex";
//   let imageDataSrc = image.firstChild.getAttribute("data-src");
//   smallImagesSwiper[index].src = imageDataSrc;
//   smallSwiperSlides[index].style.order = "1";
//   console.log(imageDataSrc);
// }

// swiper.centeredSlides(true);

// const imagesNormal = document.querySelectorAll('[data-src]');
// imagesNormal.forEach(img => {
//   observer.observe(img);
// });

// console.log(imagesNormal);
// function galleryExtend() {
//   for (let i = 0; i < 48; i++) {
//     const div = document.createElement("div");
//     div.classList.add("gallery__regular-wrapper");
//     // let parent = gallery.querySelector(".gallery__wrapper");
//     // let parentLastChild = parent.lastElementChild;
//     // parent.insertBefore(div, parentLastChild);
//     galleryContent.appendChild(div);
//     gsap.fromTo(
//       div,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: div,
//           start: "top 30%",
//         },
//       }
//     );
//     const image = document.createElement("img");
//     image.setAttribute("src", `./img//img${i + 1}.jpg`);
//     image.setAttribute('alt', "fryzura, loki, fale, proste włosy");
//     image.setAttribute("thumbindex", "0");
//     image.classList.add("gallery__regular-image");
//     div.appendChild(image);
//     // more += 1;
//     regularImagesArray.push(div);
//     // }
//     clickableRegularImages();
//   }
// }

// galleryExtend();

//Small implementation

// closeBigGallery.addEventListener("click", function () {
//   gallerySlider.classList.remove("active");
//   gallerySlider.style.display = "none";
//   mainContent.style.display = "block";
//   footerContent.style.display = "flex";
//   headerContent.style.display = "flex";
//   galleryContent.scrollIntoView({
//     behavior: "smooth",
//   });
// });

// function clickableRegularImages() {
//   regularImagesArray.forEach((img, index) => {
//     img.addEventListener("click", () => {
//       imageNr = index;
//       gallerySlider.classList.add("active");
//       gallerySlider.style.display = "flex";
//       // gallerySlider.style.zIndex = 100;
//       mainContent.style.display = "none";
//       footerContent.style.display = "none";
//       headerContent.style.display = "none";
//       bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
//       bigImage.setAttribute("alt", "fryzura, loki, fale, proste włosy");
//       bigImage.setAttribute("thumbindex", "0");
//       dynamicChangeImages();
//       // handlingArrows();
//       creatingSwiper();
//     });
//   });
// }

//console.log(regularImagesArray);

// const thumbImages = [];

// function dynamicChangeImages() {
//   thumbImages.forEach((image, index) => {
//     image.addEventListener("click", function () {
//       bigImage.setAttribute("src", `./img/img${index + 1}.jpg`);
//       bigImage.setAttribute("alt", "fryzura, loki, fale, proste włosy");
//       bigImage.setAttribute("thumbindex", "0");
//     });
//   });
// }

// function handlingArrows() {
//   rightBtn.addEventListener("click", function () {
//     if (imageNr >= smallImages.length - 1) {
//       imageNr = 0;
//       bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
//       bigImage.setAttribute("alt", "fryzura, loki, fale, proste włosy");
//       bigImage.setAttribute("thumbindex", "0");
//     } else {
//       imageNr++;
//       bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
//       bigImage.setAttribute("alt", "fryzura, loki, fale, proste włosy");
//       bigImage.setAttribute("thumbindex", "0");
//     }
//     // changingPhotoOrder();
//   });
//   leftBtn.addEventListener("click", function () {
//     if (imageNr <= 0) {
//       imageNr = smallImages.length - 1;
//       bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
//       bigImage.setAttribute("alt", "fryzura, loki, fale, proste włosy");
//       bigImage.setAttribute("thumbindex", "0");
//     } else {
//       imageNr--;
//       bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
//       bigImage.setAttribute("alt", "fryzura, loki, fale, proste włosy");
//       bigImage.setAttribute("thumbindex", "0");
//     }
//     // changingPhotoOrder();
//   });
// }

// function creatingSwiper() {
//   regularImagesArray.forEach((image, index) => {
//     let thumbImage = document.createElement("img");
//     thumbImage.classList.add("gallery__thumb");
//     thumbImage.setAttribute("src", `./img/img${index + 1}.jpg`);
//     thumbImage.setAttribute("alt", "fryzura, loki, fale, proste włosy");
//     thumbImage.setAttribute("thumbindex", "0");
//     thumbsGallery.appendChild(thumbImage);
//     thumbImages.push(thumbImage);
//   });
// }

openPriceBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.fromTo(
      cardsContainers[index],
      1,
      { display: "none" },
      { display: "flex" }
    );
    const cards = cardsContainers[index].querySelectorAll(".price-list__body");
    gsap.fromTo(cards, { opacity: 0 }, { opacity: 1, duration: 2 });
    openPriceBtns[index].style.display = "none";
    hidePriceBtns[index].style.display = "flex";
  });
});
hidePriceBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const cards = cardsContainers[index].querySelectorAll(".price-list__body");
    gsap.fromTo(cards, { opacity: 1 }, { opacity: 0 });
    gsap.fromTo(
      cardsContainers[index],
      { display: "flex" },
      { display: "none" }
    );
    openPriceBtns[index].style.display = "flex";
    hidePriceBtns[index].style.display = "none";
    priceSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
