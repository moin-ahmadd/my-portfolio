let themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
} else {
    localStorage.setItem("theme", "dark");
}
});
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

let menuBtn = document.querySelector("#menuBtn");
let navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});
let menuLinks = document.querySelectorAll("nav ul li a");

menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });
});