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
        interval  : 5000,       // Time between transitions in autoplay (in milliseconds)
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

let score1 = 115;
function mclick1(change) {
    score1 += change;
    document.getElementById("rslt1").textContent = score1 + " votes";
}

let score2 = 500;
function mclick2(change) {
    score2 += change;
    document.getElementById("rslt2").textContent = score2 + " votes";
}

let score3 = 255;
function mclick3(change) {
    score3 += change;
    document.getElementById("rslt3").textContent = score3 + " votes";
}

let score4 = 600;
function mclick4(change) {
    score4 += change;
    document.getElementById("rslt4").textContent = score4 + " votes";
}

let score5 = 900;
function mclick5(change) {
    score5 += change;
    document.getElementById("rslt5").textContent = score5 + " votes";
}

let score6 = 120;
function mclick6(change) {
    score6 += change;
    document.getElementById("rslt6").textContent = score6 + " votes";
}

let score7 = 800;
function mclick7(change) {
    score7 += change;
    document.getElementById("rslt7").textContent = score7 + " votes";
}

let score8 = 500;
function mclick8(change) {
    score8 += change;
    document.getElementById("rslt8").textContent = score8 + " votes";
}

let score9 = 800;
function mclick9(change) {
    score9 += change;
    document.getElementById("rslt9").textContent = score9 + " votes";
}

let score10 = 400;
function mclick10(change) {
    score10 += change;
    document.getElementById("rslt10").textContent = score10 + " votes";
}

let score11 = 200;
function mclick11(change) {
    score11 += change;
    document.getElementById("rslt11").textContent = score11 + " votes";
}

let score12 = 300;
function mclick12(change) {
    score12 += change;
    document.getElementById("rslt12").textContent = score12 + " votes";
}

let score13 = 800;
function mclick13(change) {
    score13 += change;
    document.getElementById("rslt13").textContent = score13 + " votes";
}

let score14 = 600;
function mclick14(change) {
    score14 += change;
    document.getElementById("rslt14").textContent = score14 + " votes";
}

let score15 = 220;
function mclick15(change) {
    score15 += change;
    document.getElementById("rslt15").textContent = score15 + " votes";
}

document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.grid'); // Select the grid container
    var iso = new Isotope(elem, {
      itemSelector: '.grid-item', // Specify each grid item
      layoutMode: 'fitRows', // Layout mode
    });
  
    // Example: Add filtering logic
    document.querySelectorAll('.filter span').forEach(function (filterButton) {
      filterButton.addEventListener('click', function () {
        var filterValue = this.textContent.toLowerCase(); // Use button text as filter (example)
        if (filterValue === 'all') {
          iso.arrange({ filter: '*' }); // Show all items
        } else {
          iso.arrange({ filter: '.' + filterValue }); // Filter by class (needs proper setup in HTML)
        }
      });
    });
  });