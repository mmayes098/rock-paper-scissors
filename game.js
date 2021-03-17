const choices = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;
let ties = 0;
var playerSelection;
function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        updateScore('tie');
        alert(`You tied! You both played ${playerSelection}!`);
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            updateScore('loss');
            alert(`You lose! Their ${computerSelection} covers your ${playerSelection}!`);
        } else if (computerSelection === "scissors") {
            updateScore('win');
            alert(`You win! Their ${computerSelection} were crushed by your ${playerSelection}!`);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            updateScore('win');
            alert(`You win! Their ${computerSelection} was covered by your ${playerSelection}!`);
        } else if (computerSelection === "scissors") {
            updateScore('loss');
            alert(`You lose! Their ${computerSelection} cut your ${playerSelection}!`);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            updateScore('win');
            alert(`You win! Their ${computerSelection} was cut by your ${playerSelection}!`);
        } else if (computerSelection === "rock") {
            updateScore('loss');
            alert(`You lose! Their ${computerSelection} crushed your ${playerSelection}!`);
        }
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.getAttribute('id');
        playRound(playerSelection, choices[randomChoice(0, 2)]);
    });
});

const score = document.querySelector('#score');

let currentScore = document.createElement('h1');
currentScore.textContent = 'The current score is:';
currentScore.textContent = 'Wins: ' + wins + ', Losses: ' + losses + ', and Ties: ' + ties + '.';

let winner = document.createElement('h1')

score.appendChild(currentScore);
score.appendChild(winner);


function updateScore(result) {
    if (result == 'win') {
        wins++
    } else if (result == 'loss') {
        losses++
    } else if (result == 'tie') {
        ties++
    };

    if (wins + losses + ties == 5) {
        if (wins > (losses || ties)) {
            winner.textContent = 'You Win!';
            wins = 0;
            losses = 0;
            ties = 0;
        } else if (losses > (wins || ties)) {
            winner.textContent = 'You lose.';
            wins = 0;
            losses = 0;
            ties = 0;
        } else {
            winner.textContent = "It's a draw.";
            wins = 0;
            losses = 0;
            ties = 0;
        }
    }

    currentScore.textContent = 'The current score is:';
    currentScore.textContent = 'Wins: ' + wins + ', Losses: ' + losses + ', and Ties: ' + ties + '.';
}