// scripts.js
$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a.nav-link').on('click', function(event) {
        // Close the navbar on mobile after clicking
        $('.navbar-collapse').collapse('hide');
    });
});

$(document).ready(function() {
    $('.description').each(function() {
        var text = $(this).text();
        var wordArray = text.split(' ');
        if (wordArray.length > 15) {
            var truncatedText = wordArray.slice(0, 10).join(' ') + '...';
            $(this).text(truncatedText);
        }
    });
});
