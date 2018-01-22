/* TASK 8 */

const game = function(): void {
    const rangeStart: number = parseInt(prompt(`Enter range starting number`));
    const rangeEnd: number = parseInt(prompt(`Enter range ending number`));

    let randomNumber: number = Math.round(Math.random() * (rangeEnd - rangeStart));
    let guessNumber: number;

    if (rangeEnd <= rangeStart) {
      alert(`Range ending number must be greater then starting one. Please try again!`);

      game();
    };

    if (isNaN(rangeStart) || isNaN(rangeEnd)) {
        alert(`Please enter numbers as start and end of the range!`);

        game();
    };

    for (; guessNumber !== randomNumber;) {
        guessNumber = parseInt(prompt(`Enter random integer number in the range from ${rangeStart} to ${rangeEnd}`));

        if (guessNumber === randomNumber) {
            alert(`You guessed correctly, the number was ${randomNumber}`);
            return;
        } else {
            alert(`Try again`);
        };
    };
};

game();