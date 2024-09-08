document.addEventListener('DOMContentLoaded', function() {
    var text = "I am Matthew Lebron Ponciano, currently pursuing a Bachelor of Science in Information Technology at the University of Northern Philippines. With a passion for technology and design, I am dedicated to expanding my knowledge and skills in the IT field, aiming to contribute meaningfully to the ever-evolving world of technology.";

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector('.typing-animation').innerHTML = text.substring(0, i+1) + ''; // Add caret
            setTimeout(function() {
                typeWriter(text, i+1, fnCallback);
            }, 20);
        }
        else {
            fnCallback();
        }
    }

    function startTypingAnimation() {
        if (text) {
            typeWriter(text, 0, function() {
                document.querySelector('.typing-animation').innerHTML = text; // Remove caret by resetting to text
            });
        }
    }

    startTypingAnimation();
});
