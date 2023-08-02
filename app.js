const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_PLAYER_CHOISE = ROCK;
let gameIsRunning = false;

const getUserChoice = () => {
    let userChoice = prompt(
        `Enter your choice: ${ROCK}, ${PAPER}, ${SCISSORS}`,
        ""
    ).toUpperCase();
    if (
        userChoice !== ROCK &&
        userChoice !== PAPER &&
        userChoice !== SCISSORS
    ) {
        alert(`Invalid choice! We chose a ${DEFAULT_PLAYER_CHOISE} for you!`);
        return (userChoice = DEFAULT_PLAYER_CHOISE);
    }
    return userChoice;
};

const getComputerChoice = () => {
    let array = [ROCK, PAPER, SCISSORS];
    const randomChoice = array[Math.floor(Math.random() * array.length)];
    return randomChoice;
};

const getWinner = (cChoice, pChoice) => {
    if (cChoice === pChoice) {
        alert(
            `It's a DRAW! You chose ${pChoice} and Computer chose ${cChoice}!`
        );
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ) {
        alert(`You WON! You chose ${pChoice} and Computer chose ${cChoice}`);
    } else {
        alert(`You LOST! You chose ${pChoice} and Computer chose ${cChoice}`);
    }
};

const startGame = () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("The game is starting...");
    getWinner(getComputerChoice(), getUserChoice());
    gameIsRunning = false;
};

startGameBtn.addEventListener("click", startGame);