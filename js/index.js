const showcaseCarousel = document.getElementById('showcase-carousel-container');
var showcaseDirection = -1;

document.getElementById('showcaseCarouselLeft').addEventListener('click', () => {
    showcaseDirection = -1;
    showcaseCarousel.style.transition = 'none';
    showcaseCarousel.prepend(showcaseCarousel.lastElementChild);
    showcaseCarousel.style.transform = 'translate(-102%, 0)';
    setTimeout(() => {
        showcaseCarousel.style.transition = 'transform 0.6s ease';
        showcaseCarousel.style.transform = 'translate(0, 0)';
    });
})

document.getElementById('showcaseCarouselRight').addEventListener('click', () => {
    showcaseDirection = 1;
    showcaseCarousel.style.transform = 'translate(-102%, 0)';
})

showcaseCarousel.addEventListener('transitionend', function() {
    if (showcaseDirection === 1) {
        showcaseCarousel.style.transition = 'none';
        showcaseCarousel.appendChild(showcaseCarousel.firstElementChild);
        showcaseCarousel.style.transform = 'translate(0, 0)';
        setTimeout(() => {
            showcaseCarousel.style.transition = 'transform 0.6s ease';
        });
    }
})
