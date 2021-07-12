gsap.registerPlugin(ScrollTrigger, TextPlugin);

//VARIABLES

// const menuNav = document.querySelector("#home");
// const logoNav = document.querySelector(".navigation__link");
// const descriptionWrapper = document.querySelector(
//   ".about__description-wrapper"
// );
// const photoWrapper = document.querySelector(".about__photo-wrapper");
// const openPriceBtns = document.querySelectorAll(".price-list__reveal");
// const hidePriceBtns = document.querySelectorAll(".price-list__hide");
// const cardsContainers = document.querySelectorAll(".price-list__container");
// const priceSection = document.querySelector("#prices");
// const galleryContent = document.querySelector(".gallery__wrapper");
// const gallery = document.querySelector("#gallery");
// const gallerySlider = document.querySelector(".gallery__swiper");
// const smallImages = document.querySelectorAll(".gallery__thumb");
// const regularImages = document.getElementsByClassName("gallery__regular-image");
// const regularImagesArray = [];
// const closeBigGallery = document.querySelector(".gallery__close-icon");
// const bigImage = document.querySelector(".gallery__big-image");

// const rightBtn = document.querySelector(".gallery__right-icon");
// const leftBtn = document.querySelector(".gallery__left-icon");
// const sectionAbout = document.querySelector(".about");
// const allImages = regularImages.length - 1;
// const thumbsGallery = document.querySelector(".gallery__thumbs");
// let imageNr;
// let currentImageNr = 6;
// let more = 0;
// const swipeImage = document.querySelector(".swiper__image");
// const swipeSlides = [...document.querySelectorAll(".swiper__slide")];

// const time = 3000;
// let active = 0;

// NAVIGATION
// Variables
const navigation = document.querySelector(".navigation__wrapper");
const openNavBtn = document.querySelector(".navigation__open-btn");
const mainContent = document.querySelector("main");
const footerContent = document.querySelector("footer");
const headerContent = document.querySelector("header");
const sections = document.querySelectorAll("#home section");
const closeNavBtn = document.querySelector(".navigation__close-btn");
const navItems = document.querySelectorAll(".navigation__item");

function openingNavigation() {
  navigation.classList.add("active");
  navigation.style.backgroundColor = "#191919";
  mainContent.style.display = "none";
  footerContent.style.display = "flex";
}

function closingNavigation() {
  navigation.classList.remove("active");
  mainContent.style.display = "block";
  footerContent.style.display = "flex";
}

openNavBtn.addEventListener("click", openingNavigation);
closeNavBtn.addEventListener("click", closingNavigation);

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    navigation.classList.remove("active");
    mainContent.style.display = "block";
    footerContent.style.display = "flex";
    sections[index].scrollIntoView({
      behavior: "smooth",
    });
  });
});

//SLIDER GALLERY
const swipeList = [
    { img: "./img/pracownia_fryzjerska_wnetrze1-large.png" },
    { img: "./img/pracownia_fryzjerska_wnetrze2-large.png" },
    { img: "./img/pracownia_fryzjerska_wnetrze3-large.png" },
];

// console.log(swiper);
// console.log(window);

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
    e.target.classList.contains("swiper__left-icon") ||
    e.target.classList.contains("swiper__right-icon")
  ) {
    clearInterval(timeInterval);
    e.target.classList.contains("swiper__left-icon") ? active-- : active++;
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

gsap.fromTo(
  descriptionWrapper,
  { opacity: 0, x: "-100%" },
  {
    opacity: 1,
    x: "0%",
    scrollTrigger: {
      trigger: ".about",
      start: "top 50%",
    },
    duration: 3,
  }
);
gsap.fromTo(
  photoWrapper,
  { x: "100%" },
  {
    x: "0%",
    scrollTrigger: {
      trigger: photoWrapper,
      start: "top 50%",
    },
    duration: 3,
  }
);

gsap.fromTo(
  ".price-list__card--woman",
  { x: "-200%" },
  {
    x: "0%",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".price-list__card--woman",
      start: "top 70%",
    },
  }
);

gsap.fromTo(
  ".price-list__card--man",
  { x: "200%" },
  {
    x: "0%",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".price-list__card--man",
      start: "top 70%",
    },
  }
);

gsap.fromTo(
  ".price-list__card--children",
  { x: "-200%" },
  {
    x: "0%",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".price-list__card--children",
      start: "top 70%",
      // markers: true,
    },
  }
);

//GALLERY

const options = {
  rootMargin: "0px 0px 0px 0px",
  treshold: 0,
}

let observer = new IntersectionObserver((elements) => {
  elements.forEach(element => {
    if (element.isIntersecting) {
    element.target.src = element.target.getAttribute("data-src");
    gsap.to(element.target, { duration: 3, clipPath: "circle(150% at 10% 10%)"});
    const coverImage = element.target.nextElementSibling;
    // gsap.to(coverImage, { duration: 3, delay: 0.5, clipPath: "circle(100%)"});
    }
    if (element.isIntersecting) {
      observer.unobserve(element.target);
    }
  })
}, options)

const targets = document.querySelectorAll(".gallery__regular-image");
targets.forEach(target => {
  observer.observe(target);
})

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

closeBigGallery.addEventListener("click", function () {
  gallerySlider.classList.remove("active");
  gallerySlider.style.display = "none";
  mainContent.style.display = "block";
  footerContent.style.display = "flex";
  headerContent.style.display = "flex";
  galleryContent.scrollIntoView({
    behavior: "smooth",
  });
});

function clickableRegularImages() {
  regularImagesArray.forEach((img, index) => {
    img.addEventListener("click", () => {
      imageNr = index;
      gallerySlider.classList.add("active");
      gallerySlider.style.display = "flex";
      // gallerySlider.style.zIndex = 100;
      mainContent.style.display = "none";
      footerContent.style.display = "none";
      headerContent.style.display = "none";
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
      bigImage.setAttribute('alt', "fryzura, loki, fale, proste włosy");
      bigImage.setAttribute("thumbindex", "0");
      dynamicChangeImages();
      // handlingArrows();
      creatingSwiper();
    });
  });
}

//console.log(regularImagesArray);

const thumbImages = [];

function dynamicChangeImages() {
  thumbImages.forEach((image, index) => {
    image.addEventListener("click", function () {
      bigImage.setAttribute("src", `./img/img${index + 1}.jpg`);
      bigImage.setAttribute('alt', "fryzura, loki, fale, proste włosy");
      bigImage.setAttribute("thumbindex", "0");
    });
  });
}

function handlingArrows() {
  rightBtn.addEventListener("click", function () {
    if (imageNr >= smallImages.length - 1) {
      imageNr = 0;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
      bigImage.setAttribute('alt', "fryzura, loki, fale, proste włosy");
      bigImage.setAttribute("thumbindex", "0");
    } else {
      imageNr++;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
      bigImage.setAttribute('alt', "fryzura, loki, fale, proste włosy");
      bigImage.setAttribute("thumbindex", "0");
    }
    // changingPhotoOrder();
  });
  leftBtn.addEventListener("click", function () {
    if (imageNr <= 0) {
      imageNr = smallImages.length - 1;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
    bigImage.setAttribute('alt', "fryzura, loki, fale, proste włosy");
    bigImage.setAttribute("thumbindex", "0");  
  } else {
      imageNr--;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
      bigImage.setAttribute('alt', "fryzura, loki, fale, proste włosy");
      bigImage.setAttribute("thumbindex", "0");
    }
    // changingPhotoOrder();
  });
}

function creatingSwiper() {
  regularImagesArray.forEach((image, index) => {
    let thumbImage = document.createElement("img");
    thumbImage.classList.add("gallery__thumb");
    thumbImage.setAttribute("src", `./img/img${index + 1}.jpg`);
    thumbImage.setAttribute("alt", "fryzura, loki, fale, proste włosy");
    thumbImage.setAttribute("thumbindex", "0");
    thumbsGallery.appendChild(thumbImage);
    thumbImages.push(thumbImage);
  });
}

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
