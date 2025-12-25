// ELEMENTS
var $ = document;

const lists = $.querySelectorAll(".list__Item");
const acardionItems = $.querySelectorAll(".item__Text");
const mainTitle = $.querySelector(".title__Value");
const acardionLists = $.querySelectorAll(".acardion__Items");
const formTitle = $.querySelector(".form-title");
const headerButtons = $.querySelectorAll(".header-btn");
const loginButton = $.querySelector(".login-btn");
const registerButton = $.querySelector(".register-btn");
const navigateLinks = $.querySelectorAll(".navigate-link");
const loginForm = $.querySelector(".login-form");
const registerForm = $.querySelector(".register-form");
const eyeButtons = $.querySelectorAll(".eye-btn");
const alertTexts = $.querySelectorAll(".alert-text");
const body = $.querySelector(".body");
const LoginWrapper = $.querySelector(".Login__Wrapper");
const informationLoginbtn = $.querySelector(".information__Login__btn");

// ACARDION MENU
lists.forEach((item) => {
  item.addEventListener("click", () => {
    const acardionItem = item.querySelector(".item__Text");
    const acardionLists = item.querySelector(".acardion__Menu");
    const acardionHight = acardionLists.getBoundingClientRect().height;
    if (item.classList.contains("showItems")) {
      resetMenu();
    } else {
      resetMenu();
      item.classList.add("showItems");
      acardionItem.style.height = acardionHight + "px";
    }
  });
});

// RESET ACARDION MENU
const resetMenu = () =>
  acardionItems.forEach((item) => {
    const list = item.parentElement;
    list.classList.remove("showItems");
    item.style.height = 0;
  });

// INFORMATION
acardionLists.forEach((item) => {
  item.addEventListener("click", () => {
    let mainTitlevalue = item.innerHTML;
    mainTitle.innerHTML = mainTitlevalue;
  });
});
// LOGIN PAGE
informationLoginbtn.addEventListener("click", () => {
  LoginWrapper.style.display = "block";
  body.style.display = "none";
});
// TOGGLE FORMS
navigateLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const dataLink = link.dataset.link;
    if (dataLink === "login") {
      loginButton.click();
    } else if (dataLink === "register") {
      registerButton.click();
    }
  });
});
