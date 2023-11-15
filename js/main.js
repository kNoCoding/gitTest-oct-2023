'use strict'

// doesnt grow by 50, no idea why, wasted too much time on this little shit
function onBallClick() {
    var ball = document.querySelector('.ball');


    // Get the current width and height as integers (initialized to 0 if not set)
    var currentWidth = parseInt(ball.style.width) || 100;
    var currentHeight = parseInt(ball.style.height) || 100;

    // // Increase the width and height by exactly 50 pixels in total (25 pixels each)
    // currentWidth += 25;
    // currentHeight += 25;

    // .Change onBallClick() to increment the ball’s diameter by a random amount
    // between 20px and 60px. ⇩

    var randomIncrement = getRandomInt(20, 60)

    currentWidth += randomIncrement
    currentHeight += randomIncrement


    // Set the updated width and height for the ball
    ball.style.width = currentWidth + 'px';
    ball.style.height = currentHeight + 'px';

    // Calculate the updated diameter (sum of width and height)
    var updatedDiameter = currentWidth + currentHeight;

    if (updatedDiameter > 400) {
        updatedDiameter = 100

        ball.style.width = updatedDiameter + 'px';
        ball.style.height = updatedDiameter + 'px';
    }

    // Display the updated diameter inside the ball
    ball.innerHTML = updatedDiameter + 'px';
}
