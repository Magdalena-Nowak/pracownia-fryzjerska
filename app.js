const mainContent = document.querySelector("main");
const footerContent = document.querySelector("footer");

// NAVIGATION
//Zmienne
const navigation = document.querySelector(".navigation__wrapper");
const navItems = document.querySelectorAll(".navigation__list li");
const sections = document.querySelectorAll("#home section");
const openNavBtn = document.querySelector(".appBar");
const closeNavBtn = document.querySelector(".navigation__list--close");
const menuNav = document.querySelector("#home");
const logoNav = document.querySelector(".navigation__logo");

//Implementacja
openNavBtn.addEventListener("click", openingNavigation);
closeNavBtn.addEventListener("click", closingNavigation);

function openingNavigation() {
  navigation.classList.add("active");
  navigation.style.backgroundColor = "#191919";
  mainContent.style.display = "none";
  footerContent.style.display = "none";
}

function closingNavigation() {
  navigation.classList.remove("active");
  mainContent.style.display = "block";
  footerContent.style.display = "block";
}

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    navigation.classList.remove("active");
    mainContent.style.display = "block";
    footerContent.style.display = "block";
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

//Zmienne

const slideList = [
  { img: "./img/image1-large.png" },
  { img: "./img/image2-large.png" },
  { img: "./img/image3-large.png" },
];
const slideImage = document.querySelector(".slider__wrapper img");
const slideBelts = document.querySelectorAll(".belt");
//Interfejs

const time = 2000;
let active = 0;

//Implementacje

const autoChangeBelt = () => {
  slideBelts.forEach((slide) => slide.classList.remove("active"));
  slideBelts[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  slideImage.src = slideList[active].img;
  autoChangeBelt();
};

let timeInterval = setInterval(changeSlide, time);

const changeBelt = () => {
  slideBelts.forEach((belt, index) => {
    belt.addEventListener("click", () => {
      slideBelts.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideBelts[index].classList.add("active");
      slideImage.src = slideList[index].img;
    });
  });
};

changeBelt();

// Prices
// Zmienne
const openPriceBtns = document.querySelectorAll(".body--uncover");
const hidePriceBtns = document.querySelectorAll(".body--hide");
const cardsContainers = document.querySelectorAll(".container");
const priceCards = document.querySelectorAll(".priceList__card");
const priceSection = document.querySelector("#prices");
// console.log(priceHeaders);

//Implementacja
openPriceBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    cardsContainers[index].classList.add("open");
    cardsContainers[index].classList.add("opening");
    openPriceBtns[index].style.display = "none";
    hidePriceBtns[index].style.display = "flex";
  });
});
// function openingPrices(index) {
//   cardsContainers[index].classList.add("open");
//   cardsContainers[index].classList.remove("conditionalClose");
// }

hidePriceBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    cardsContainers[index].classList.remove("open");
    openPriceBtns[index].style.display = "flex";
    hidePriceBtns[index].style.display = "none";
    priceSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
// function closingPrices(index) {
//   cardsContainers[index].classList.remove("open");
//   cardsContainers[index].classList.remove("conditionalOpen");
//   cardsContainers[index].classList.add("conditionalClose");
//   openPriceBtns[index].style.display = "block";
//   hidePriceBtns[index].style.display = "none";
// }
// openPriceBtns.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     openingPrices(index);
//   });
// });

// hidePriceBtns.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     closingPrices(index);
//   });
// });

// console.log(navItems);

const moreBtn = document.querySelector(".more");
const allImages = document.querySelectorAll(".regular-image");
const hideImages = document.querySelectorAll("[data-type='hide']");
const hideMoreImages = document.querySelectorAll("[data-type='hide1']");
const gallery = document.querySelector(".gallery__slider");
const regularImages = document.querySelectorAll(".regular-image");
const reguarGallery = document.querySelector(".container");
let galleryImage = document.querySelector(".gallery-image");
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
const closeRegularGallery = document.querySelector(".fa-times");
const smallImages = document.querySelectorAll(".small-image");
const bigImage = document.querySelector(".big-image");
let index;

// console.log(allImages);

// function openGallery() {
// allImages.forEach((image) => {
// if (image.dataset.type === "show") {
// hideImages.forEach((img) => {
// img.classList.remove("hide");
// img.classList.add("active");
// img.classList.add("show");
// console.log(img);
// });
// }
// if (image.classList.contains === "active") {
//   hideMoreImages.forEach((img) => {
//     img.classList.remove("hide1");
//     img.classList.add("active");
//   });
// }
// });
// }

// moreBtn.addEventListener("click", openGallery);

regularImages.forEach((image, index) => {
  image.addEventListener("click", function () {
    gallery.classList.add("active");
    reguarGallery.style.display = "none";
    bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
    rightBtn.addEventListener("click", function () {
      if (index >= smallImages.length - 1) {
        index = 0;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      } else {
        index++;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      }
    });
    leftBtn.addEventListener("click", function () {
      if (index <= 0) {
        index = smallImages.length - 1;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      } else {
        index--;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      }
    });
  });
});

smallImages.forEach((image, index) => {
  image.addEventListener("click", function () {
    bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
  });
});

closeRegularGallery.addEventListener("click", function () {
  gallery.classList.remove("active");
  reguarGallery.style.display = "block";
});
