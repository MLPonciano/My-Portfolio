// Ensure the script runs after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the button element by its ID
    const scrollButton = document.getElementById('scrollButton');

    // Add an event listener to the button for the 'click' event
    scrollButton.addEventListener('click', function() {
        // Scroll smoothly to the target section
        document.getElementById('skills-content').scrollIntoView({
            behavior: 'smooth'
        });
    });
});


