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
const moreBtn = document.querySelector(".more");
const galleryContent = document.querySelector(".gallery__wrapper");
const allImages = 48;

//Implementacja
moreBtn.addEventListener("click", addElements);
let currentImageNr = 13;


function addElements() {
  let allButtons = document.querySelectorAll('.more');
  if(currentImageNr > allImages)
    return;
  let currentMax = currentImageNr + 12;
  for (let i = currentImageNr ; i < currentMax; i++) {
    if (i > allImages) {
      break;
    }
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("regular-image");
    galleryContent.appendChild(imageDiv);
    imageDiv.innerHTML = `<img src="./img//img${i}.jpg" alt="Zdjęcie fryzury">`;
    allButtons.forEach(btn => {
      btn.style.display = "none";
    })
  }
  currentImageNr = currentMax;
  const btnMore = document.createElement('div');
  btnMore.classList.add('more');
  const textMore = document.createElement('p');
  btnMore.appendChild(textMore);
  textMore.innerText = "Więcej";
  galleryContent.appendChild(btnMore);
  btnMore.addEventListener('click', addElements);
  allButtons = document.querySelectorAll('.more');
  allButtons[3].style.display = "none";
}

//Big image implementation
const gallerySlider = document.querySelector('.gallery__slider');
const galleryImage = document.querySelector('.gallery-image');
const regularImages = document.querySelectorAll('.regular-image');


// smallImages.forEach((image, index) => {
//   image.addEventListener("click", function () {
//     bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
//   });
// });

// closeRegularGallery.addEventListener("click", function () {
//   gallery.classList.remove("active");
//   reguarGallery.style.display = "block";
// });

regularImages.forEach((img,index) => {
  img.addEventListener('click', () => {
    gallerySlider.style.display = "flex";
    console.log(gallerySlider);
    mainContent.style.display = "none";
    footerContent.style.display = "none";
  })
})