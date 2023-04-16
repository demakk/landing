// Toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');


function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class = 'fa fa-solid fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class = 'fa fa-solid fa-times'></i>";
    }
}

if (toggle) {
    toggle.addEventListener('click', toggleMenu, false);
}


//Submenu
const items = document.querySelectorAll('.item');

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
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', toggleItem, false);
        item.addEventListener('keypress', toggleItem, false);
    }
}

//Close submenu from anywhere in the page

function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove('submenu-active');

    }
}

document.addEventListener('click', closeSubmenu, false)

const loginText = document.querySelector("#form .title-text .login");
const loginForm = document.querySelector("#form form.login");
const loginBtn = document.querySelector("#form label.login");
const signupBtn = document.querySelector("#form label.signup");
const signupLink = document.querySelector("#form form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});