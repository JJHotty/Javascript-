window.onscroll = function() {
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollPercentage = (scrollPosition / scrollHeight) * 98.5;

    var box = document.querySelector('.box');
    box.style.left = scrollPercentage + '%';

    var redDot = document.querySelector('#redDot');
    var redDotPercentage = (scrollPercentage * 5) % 98.5;
    redDot.style.right = redDotPercentage + '%';

    if (scrollPercentage + 2 >= (100 - redDotPercentage)) {
        // If the box has collided with the red dot, move the red dot back to the right
        redDot.style.right = '200%';
    }
}
