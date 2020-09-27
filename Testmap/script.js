/* show or hide sidebar: click on hamburger-icon */

const sidebar = document.querySelector(".menusidebar");

const hamburger = document.querySelector(".menutoggle");

const showSidebar = () => {
    sidebar.classList.toggle("expanded");
};

hamburger.addEventListener("click", showSidebar);

/* hide sidebar after click on menu-item */

const clickSidebar = document.querySelector(".menusidebar");

const hideSidebar = () => {
    sidebar.classList.toggle("expanded");
};

clickSidebar.addEventListener("click", hideSidebar);

/* change text and color of background: click on menu-item */

const menuColors = ["white-background", "blue-background", "green-background", "purple-background", "orange-background"];

const colorChange = document.querySelector(".body-background");

const textChange = document.querySelector(".colortext");

const colorchangeWhite = document.getElementById("changeto-white");

colorchangeWhite.addEventListener("click", function () {
    menuColors.forEach(item => colorChange.classList.remove(item));
    colorChange.classList.add("white-background");
    textChange.innerHTML = "De kleur van de achtergrond is wit.";
});

const colorchangeBlue = document.getElementById("changeto-blue");

colorchangeBlue.addEventListener("click", function () {
    menuColors.forEach(item => colorChange.classList.remove(item));
    colorChange.classList.add("blue-background");
    textChange.innerHTML = "De kleur van de achtergrond is blauw.";
});

const colorchangeGreen = document.getElementById("changeto-green");

colorchangeGreen.addEventListener("click", function () {
    menuColors.forEach(item => colorChange.classList.remove(item));
    colorChange.classList.add("green-background");
    textChange.innerHTML = "De kleur van de achtergrond is groen.";
});

const colorchangePurple = document.getElementById("changeto-purple");

colorchangePurple.addEventListener("click", function () {
    menuColors.forEach(item => colorChange.classList.remove(item));
    colorChange.classList.add("purple-background");
    textChange.innerHTML = "De kleur van de achtergrond is paars.";
});

const colorchangeOrange = document.getElementById("changeto-orange");

colorchangeOrange.addEventListener("click", function () {
    menuColors.forEach(item => colorChange.classList.remove(item));
    colorChange.classList.add("orange-background");
    textChange.innerHTML = "De kleur van de achtergrond is oranje.";
});