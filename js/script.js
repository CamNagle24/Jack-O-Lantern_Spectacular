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

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all vote buttons
    document.querySelectorAll('.voteButton').forEach(function (button) {
        button.addEventListener('click', function () {
            // Find the closest grid item and its corresponding `.result` element
            const gridItem = button.closest('.grid-item'); // Find the parent grid item
            const resultElement = gridItem.querySelector('.result'); // Locate the `.result` within the grid item

            // Extract the current vote count and increment it
            let currentVotes = parseInt(resultElement.textContent.match(/\d+/)[0], 10);
            currentVotes += 1; // Increment the vote count

            // Update the `.result` element text
            resultElement.textContent = `${currentVotes} votes`;
        });
    });
});

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

// Custom filter functions
var filterFns = {
    // Show items with top votes (greater than 500)
    'top-voted': function() {
        var votes = $(this).find('.result1, .result2, .result3, .result4, .result5, .result6, .result7, .result8, .result9, .result10, .result11, .result12, .result13, .result14, .result15').text();
        return parseInt(votes, 10) > 500; // Only show items with votes greater than 500
    },
    // A-Z sorting
    'a-z': function(a, b) {
        var nameA = $(a).find('div[class^="name"]').text().toLowerCase();
        var nameB = $(b).find('div[class^="name"]').text().toLowerCase();
        return nameA.localeCompare(nameB);
    },
    // Z-A sorting
    'z-a': function(a, b) {
        var nameA = $(a).find('div[class^="name"]').text().toLowerCase();
        var nameB = $(b).find('div[class^="name"]').text().toLowerCase();
        return nameB.localeCompare(nameA);
    }
};

// Initialize Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});

// Handle button clicks
$('.filter').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');

    // Handle custom filters
    if (filterFns[filterValue]) {
        if (filterValue === 'a-z' || filterValue === 'z-a') {
            // Sorting requires using Isotope's sort function
            $grid.isotope({
                sortBy: 'original-order',
                sortAscending: filterValue === 'a-z'
            });
        } else {
            // Apply custom filter functions
            $grid.isotope({
                filter: filterFns[filterValue]
            });
        }
    } else {
        // Default behavior for CSS selectors
        $grid.isotope({ filter: filterValue });
    }
});