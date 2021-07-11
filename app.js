gsap.registerPlugin(ScrollTrigger, TextPlugin);

//VARIABLES
const navigation = document.querySelector(".navigation__wrapper");
const navItems = document.querySelectorAll(".navigation__item");
const sections = document.querySelectorAll("#home section");
const openNavBtn = document.querySelector(".navigation__open-btn");
const closeNavBtn = document.querySelector(".navigation__close-btn");
const menuNav = document.querySelector("#home");
const logoNav = document.querySelector(".navigation__link");
const descriptionWrapper = document.querySelector(
  ".about__description-wrapper"
);
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
const footerContent = document.querySelector("footer");
const headerContent = document.querySelector("header");
const rightBtn = document.querySelector(".gallery__right-icon");
const leftBtn = document.querySelector(".gallery__left-icon");
const sectionAbout = document.querySelector(".about");
const allImages = regularImages.length - 1;
const thumbsGallery = document.querySelector(".gallery__thumbs");
let imageNr;
let currentImageNr = 6;
let more = 0;
const swipeImage = document.querySelector(".swiper__image");
const swipeSlides = [...document.querySelectorAll(".swiper__slide")];

const time = 3000;
let active = 0;

// NAVIGATION
openNavBtn.addEventListener("click", openingNavigation);
closeNavBtn.addEventListener("click", closingNavigation);

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

logoNav.addEventListener("click", () => {
  menuNav.scrollIntoView({
    behavior: "smooth",
  });
});

//SLIDER GALLERY
const swipeList = [
  { img: "./img/image1-large.png" },
  { img: "./img/image2-large.png" },
  { img: "./img/image3-large.png" },
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
ScrollTrigger.matchMedia({
  "(max-width: 991px)": function () {
    gsap.fromTo(
      descriptionWrapper,
      { opacity: 0, x: "-100%" },
      {
        opacity: 1,
        x: "0%",
        scrollTrigger: {
          trigger: sectionAbout,
          start: "top top",
          markers: true,
        },
        duration: 2,
      }
    );

    gsap.fromTo(
      photoWrapper,
      { x: "100%" },
      {
        x: "0%",
        scrollTrigger: {
          trigger: photoWrapper,
          start: "-20% 70%",
        },
        duration: 5,
      }
      // "-=3"
    );
  },
  "(min-width: 992px)": function () {
    gsap.fromTo(
      descriptionWrapper,
      3,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".about",
          start: "top 40%",
        },
        duration: 3,
      }
    );
    gsap.fromTo(
      photoWrapper,
      4,
      { x: "100%" },
      {
        x: "0%",
        scrollTrigger: {
          trigger: ".about",
          start: "top 40%",
        },
        duration: 3,
      },
      "-=1"
    );
  },
  "(max-width: 1199px)": function () {
    openPriceBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        gsap.fromTo(
          cardsContainers[index],
          1,
          { display: "none" },
          { display: "flex" }
        );
        const cards =
          cardsContainers[index].querySelectorAll(".price-list__body");
        gsap.fromTo(cards, 2, { x: "-150%" }, { x: "0%", ease: "back" });
        openPriceBtns[index].style.display = "none";
        hidePriceBtns[index].style.display = "flex";
      });
    });
    hidePriceBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        const cards =
          cardsContainers[index].querySelectorAll(".price-list__body");
        gsap.fromTo(cards, 2, { x: "0%" }, { x: "-150%" });
        gsap.fromTo(
          cardsContainers[index],
          1,
          { display: "flex" },
          { display: "none", delay: 0.8 }
        );
        openPriceBtns[index].style.display = "flex";
        hidePriceBtns[index].style.display = "none";
        priceSection.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  },
});

//GALLERY

function galleryExtend() {
  for (let i = 0; i < 48; i++) {
    const div = document.createElement("div");
    div.classList.add("gallery__regular-wrapper");
    // let parent = gallery.querySelector(".gallery__wrapper");
    // let parentLastChild = parent.lastElementChild;
    // parent.insertBefore(div, parentLastChild);
    galleryContent.appendChild(div);
    gsap.fromTo(
      div,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: div,
          start: "top 30%",
        },
      }
    );
    const image = document.createElement("img");
    image.setAttribute("src", `./img//img${i + 1}.jpg`);
    image.classList.add("gallery__regular-image");
    div.appendChild(image);
    // more += 1;
    regularImagesArray.push(div);
    // }
    clickableRegularImages();
  }
}

galleryExtend();

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
    });
  });
}

function handlingArrows() {
  rightBtn.addEventListener("click", function () {
    if (imageNr >= smallImages.length - 1) {
      imageNr = 0;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
    } else {
      imageNr++;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
    }
    // changingPhotoOrder();
  });
  leftBtn.addEventListener("click", function () {
    if (imageNr <= 0) {
      imageNr = smallImages.length - 1;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
    } else {
      imageNr--;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
    }
    // changingPhotoOrder();
  });
}

function creatingSwiper() {
  regularImagesArray.forEach((image, index) => {
    let thumbImage = document.createElement("img");
    thumbImage.classList.add("gallery__thumb");
    thumbImage.setAttribute("src", `./img/img${index + 1}.jpg`);
    thumbsGallery.appendChild(thumbImage);
    thumbImages.push(thumbImage);
  });
}
