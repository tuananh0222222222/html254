'use strict';

const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelector("[data-nav-toggler]");


navToggle.addEventListener('click', () => {
    navbar.classList.toggle("active")
    navToggle.classList.toggle("active")
  

})

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active")

})