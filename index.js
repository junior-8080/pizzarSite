const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const slides = document.querySelectorAll('.slide-item');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next')

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
})