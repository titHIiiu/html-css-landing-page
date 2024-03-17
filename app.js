
let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");
let mobileMenu = document.getElementById("mobile-menu");


hamburger.addEventListener("click", function() {
    mobileMenu.classList.add("show-menu");
})


close.addEventListener("click", function() {
    mobileMenu.classList.remove("show-menu");
})





