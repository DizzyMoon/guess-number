"use strict";

window.addEventListener("load", start)


let number;

function start() {
    console.log("Javascript is running");
    number = generateRandomNumber();
    document.querySelector("#guess-form")
        .addEventListener("submit", receiveGuess);
}

function generateRandomNumber() {
    return 42;
}

function receiveGuess(event) {
    event.preventDefault();

    const form = event.target;
    const value = form.guess.valueAsNumber;
    console.log("Received guess")
    console.log(value);

    compareGuess(value)

}

function compareGuess(guess) {
    if(guess === number) {
        guessIsCorrect();
    }
    if (guess < number) {
        guessTooLow(guess);
    } else {
        guessTooHigh(guess);
    }
}

function guessIsCorrect() {
    console.log("Correct")
    const list = document.querySelector("#guess.list");
    const html = `<li>You guessed ${guess} - That was correct!</li>`
}

function guessTooLow(guess) {
    console.log("Too Low")
    const list = document.querySelector("#guess.list");
    const html = `<li>You guessed ${guess} - that was too low! Try again</li>`
}

function guessTooHigh(guess) {
    console.log("Too High")
    const list = document.querySelector("#guess.list");
    const html = `<li>You guessed ${guess} - that was too high! Try again</li>`;
}