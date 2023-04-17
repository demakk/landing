// Toggle mobile menu
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML =
      "<i class = 'fa fa-solid fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML =
      "<i class = 'fa fa-solid fa-times'></i>";
  }
}

if (toggle) {
  toggle.addEventListener("click", toggleMenu, false);
}

//Submenu
const items = document.querySelectorAll(".item");

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
    console.log("First condition");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
    console.log("Second condition");
  } else {
    this.classList.add("submenu-active");
  }
}

for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
    item.addEventListener("keypress", toggleItem, false);
  }
}

//Close submenu from anywhere in the page

function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

document.addEventListener("click", closeSubmenu, false);

//Form js
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

//Registration window button

const formPopup = document.querySelector("#form_pop-up");
const closeBtn = document.querySelector("#form_pop-up .close-button");
const loginFromNavBtn = document.querySelector("#nav .cta-login");
const blackLayer = document.querySelector("#black-layer");

if (blackLayer) console.log("Hello");

closeBtn.onclick = () => {
  formPopup.classList.remove("active");
  blackLayer.classList.remove("active");
};

const clickableButtons = document.getElementsByClassName("clickable");

function makePopupLoginVisible() {
  console.log("Hello");
  formPopup.classList.add("active");
  blackLayer.classList.add("active");
  loginBtn.click();
}

function makePopupSignupVisible() {
  console.log("Hello");
  formPopup.classList.add("active");
  blackLayer.classList.add("active");
  signupBtn.click();
}

Array.from(clickableButtons).forEach((el) => {
  if (el.classList.contains("login")) {
    el.addEventListener("click", makePopupLoginVisible);
  } else if (el.classList.contains("signup")) {
    el.addEventListener("click", makePopupSignupVisible);
  }
});
