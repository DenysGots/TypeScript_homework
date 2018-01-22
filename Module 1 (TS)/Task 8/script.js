/* TASK 8 */
var game = function () {
    var rangeStart = parseInt(prompt("Enter range starting number"));
    var rangeEnd = parseInt(prompt("Enter range ending number"));
    var randomNumber = Math.round(Math.random() * (rangeEnd - rangeStart));
    var guessNumber;
    if (rangeEnd <= rangeStart) {
        alert("Range ending number must be greater then starting one. Please try again!");
        game();
    }
    ;
    if (isNaN(rangeStart) || isNaN(rangeEnd)) {
        alert("Please enter numbers as start and end of the range!");
        game();
    }
    ;
    for (; guessNumber !== randomNumber;) {
        guessNumber = parseInt(prompt("Enter random integer number in the range from " + rangeStart + " to " + rangeEnd));
        if (guessNumber === randomNumber) {
            alert("You guessed correctly, the number was " + randomNumber);
            return;
        }
        else {
            alert("Try again");
        }
        ;
    }
    ;
};
game();
