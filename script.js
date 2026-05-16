let SecretNumber = Math.floor(Math.random() * 100) + 1;
console.log(SecretNumber);
let GameOver = false;
let lastGuess = null;
let Attempts = 0;

function guessNumber() {
    if (GameOver) {
        document.getElementById("Answer").textContent = "Game Over! Press Reset.";
        return;
    }
    let UserInput = document.getElementById("GuessInput").value.trim();

    if (UserInput === "") {
        document.getElementById("Answer").textContent = "Enter A Number";
        return;
    }

    let Guess = Number(UserInput);

    if (Guess === lastGuess) {
        document.getElementById("Answer").textContent = "You already guessed that number!";
        return;
    }
    lastGuess = Guess;

    Attempts++;


    document.getElementById("Attempts").textContent = `Attempts: ${Attempts}`

    if (Guess > SecretNumber) {
        document.getElementById("Answer").textContent = "Too high!";


    }
    else if (Guess < SecretNumber) {
        document.getElementById("Answer").textContent = "Too low!";
    }
    else if (Guess === SecretNumber) {
        document.getElementById("Answer").textContent = 'Correct!';
        GameOver = true;
    }
}

function RestartGame() {
    SecretNumber = Math.floor(Math.random() * 100) + 1;
    Attempts = 0;
    GameOver = false;
    document.getElementById("GuessInput").value = " ";
    document.getElementById("Attempts").textContent = `Attempts: ${Attempts}`
    document.getElementById("Answer").textContent = " "
}