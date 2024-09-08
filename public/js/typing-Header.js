document.addEventListener('DOMContentLoaded', function () {
    // Default text for the header
    var text = "Welcome!";

    // Check if the current page is projects.html
    if (window.location.pathname.includes('projects.html')) {
        text = "Projects";
    }

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector('.typing-Header').innerHTML = text.substring(0, i + 1); // Add caret
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 500);
        } else {
            fnCallback();
        }
    }

    function startTypingAnimation() {
        if (text) {
            typeWriter(text, 0, function () {
                document.querySelector('.typing-Header').innerHTML = text; // Remove caret by resetting to text
            });
        }
    }

    startTypingAnimation();
});
