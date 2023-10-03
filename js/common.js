const navbar = document.querySelector("ul.navbar");

// Toggle the header menu on mobile
const toggleMenu = () => {
  navbar.classList.toggle("show");
}

// Owl Carousel logic
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    dots: true,
    navText: ["Prev", "Next"]
  });
});
