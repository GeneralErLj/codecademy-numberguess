let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    const humanDif = Math.abs(targetNumber - userGuess);
    const computerDif = Math.abs(targetNumber - computerGuess);
    return humanDif <= computerDif;
}

const updateScore = winner => {

    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;


