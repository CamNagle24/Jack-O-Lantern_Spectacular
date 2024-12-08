// Is the interval too fast?
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Splide
    const splide = new Splide('.splide', {
        type      : 'loop',     // Loop the slides
        perPage   : 3,          // Number of slides visible at once
        perMove   : 1,          // Number of slides to move with each arrow click
        gap       : '1rem',     // Space between slides
        pagination: false,      // Disable dots below the slider
        arrows    : false,      // Disable default navigation arrows
        autoplay  : true,       // Automatically play the slider
        interval  : 2000,       // Time between transitions in autoplay (in milliseconds)
        pauseOnHover: false,
    }).mount();

    // Custom button event listeners
    const leftArrow = document.querySelector('.leftArrow');
    const rightArrow = document.querySelector('.rightArrow');
    
    leftArrow.addEventListener('click', function () {
            splide.go('<');  // Go to the previous slide
        });

        rightArrow.addEventListener('click', function () {
            splide.go('>');  // Go to the next slide
        });
});