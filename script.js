const compChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = ['rock', 'paper', 'scissors'];

const choices = document.querySelectorAll('input[name="choice"]');
const playButton = document.getElementById('play');

choices.forEach((c) => {
    c.addEventListener('click', () => {
        playButton.disabled = false;
    });
});

playButton.addEventListener('click', (e) => {
    const selected = Array.from(choices).find((b) => b.checked);
    addTextToSpan(yourChoice, selected.id);
    const randChoice = generateComputerChoice();
    showResult(selected.id, randChoice);
    e.target.disabled = true;
    choices.forEach((b) => {
        b.checked = false;
    });
});

function addTextToSpan(spanControl, text) {
    spanControl.textContent = text;
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    const choice = possibleChoices[randomNumber];
    addTextToSpan(compChoice, choice);
    return choice;
}

function showResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        addTextToSpan(resultDisplay, 'It\'s a tie!');
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        addTextToSpan(resultDisplay, 'You won!');
    } else {
        addTextToSpan(resultDisplay, 'You lost!');
    }
}
