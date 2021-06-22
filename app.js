// NAVIGATION
//Zmienne
const navigation = document.querySelector(".navigation__wrapper");
const navItems = document.querySelectorAll(".navigation__item");
const sections = document.querySelectorAll("#home section");
const openNavBtn = document.querySelector(".navigation__open-btn");
const closeNavBtn = document.querySelector(".navigation__close-btn");
const menuNav = document.querySelector("#home");
const logoNav = document.querySelector(".navigation__link");

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

const swipeList = [
  { img: "./img/image1-large.png" },
  { img: "./img/image2-large.png" },
  { img: "./img/image3-large.png" },
];
const swipeImage = document.querySelector(".swiper__image");
const swipeSlides = document.querySelectorAll(".swiper__slide");
//Interfejs

const time = 2000;
let active = 0;

//Implementacje

const autoChangeSlides = () => {
  swipeSlides.forEach((swipe) => swipe.classList.remove("active"));
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

const changeSlides = () => {
  swipeSlides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      swipeBelts.forEach((swipe) => {
        swipe.classList.remove("active");
      });
      swipeSlides[index].classList.add("active");
      swipeImage.src = swipeList[index].img;
    });
  });
};

changeSlides();

// Prices
// Zmienne
const openPriceBtns = document.querySelectorAll(".price-list__reveal");
const hidePriceBtns = document.querySelectorAll(".price-list__hide");
const cardsContainers = document.querySelectorAll(".price-list__container");
const priceCards = document.querySelectorAll(".price-list__card");
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

//Gallery

// Zmienne
const moreBtn = document.querySelector(".gallery__more");
const galleryContent = document.querySelector(".gallery__wrapper");
const allImages = 48;

//Big image implementation
const gallerySlider = document.querySelector(".gallery__swiper");
const smallImages = document.querySelectorAll(".gallery__thumb");
const regularImages = document.querySelectorAll(".gallery__regular-image ");
const closeRegularGallery = document.querySelector(".gallery_close-icon");
const bigImage = document.querySelector(".gallery__big-wrapper");
const mainContent = document.querySelector("main");
const footerContent = document.querySelector("footer");
const headerContent = document.querySelector("header");
const rightBtn = document.querySelector(".gallery__right-icon");
const leftBtn = document.querySelector(".gallery__left-icon");
let imageNr;

//Implementacja
moreBtn.addEventListener("click", addElements);
let currentImageNr = 13;
function addElements() {
  let allButtons = document.querySelectorAll(".gallery__more");
  if (currentImageNr > allImages) return;
  let currentMax = currentImageNr + 12;
  for (let i = currentImageNr; i < currentMax; i++) {
    if (i > allImages) {
      break;
    }
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("gallery__regular-wrapper");
    galleryContent.appendChild(imageDiv);
    imageDiv.innerHTML = `<img class="gallery__regular-image" src="./img//img${i}.jpg" alt="Zdjęcie fryzury">`;
    allButtons.forEach((btn) => {
      btn.style.display = "none";
    });
    clickableRegularImages();
  }
  currentImageNr = currentMax;
  console.log(currentImageNr);
  if (currentImageNr === allImages + 1) {
    const btnMore = document.createElement("div");
    btnMore.classList.add("gallery__more");
    const textMore = document.createElement("p");
    textMore.classList.add("gallery__more-txt");
    btnMore.appendChild(textMore);
    textMore.innerText = "Zapraszam do kontaktu";
    galleryContent.appendChild(btnMore);
  } else {
    const btnMore = document.createElement("div");
    btnMore.classList.add("gallery__more");
    const textMore = document.createElement("p");
    textMore.classList.add("gallery__more-txt");
    btnMore.appendChild(textMore);
    textMore.innerText = "Więcej";
    galleryContent.appendChild(btnMore);
    btnMore.addEventListener("click", addElements);
  }
}

closeRegularGallery.addEventListener("click", function () {
  gallerySlider.classList.remove("active");
  mainContent.style.display = "block";
  footerContent.style.display = "flex";
  headerContent.style.display = "block";
  galleryContent.scrollIntoView({
    behavior: "smooth",
  });
});
function clickableRegularImages() {
  regularImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      imageNr = index;
      gallerySlider.classList.add("active");
      mainContent.style.display = "none";
      footerContent.style.display = "none";
      headerContent.style.display = "none";
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
      dynamicChangeImages();
      handlingArrows();
    });
  });
}
function dynamicChangeImages() {
  smallImages.forEach((image, index) => {
    image.addEventListener("click", function () {
      imageNr = index;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
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
  });
  leftBtn.addEventListener("click", function () {
    if (imageNr <= 0) {
      imageNr = smallImages.length - 1;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
    } else {
      imageNr--;
      bigImage.setAttribute("src", `./img/img${imageNr + 1}.jpg`);
    }
  });
}
clickableRegularImages();
