let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates random 'secret' number from 0 to 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

// function to calculate absolute difference for human and computer scores
const getAbsoluteDistance = (valueOne,valueTwo) => {
    let valueReturn;

    if (valueOne > valueTwo) {
        valueReturn = valueOne - valueTwo;
    } else if (valueOne < valueTwo) {
        valueReturn = valueTwo - valueOne;
    } else {
        valueReturn = 0;
    }

    return valueReturn;
}

// Returns 'true' if human wins and 'false' is computer wins
// Human wins in case of tie game
// The winner is defined as being CLOSEST guess to 'secret'
const compareGuesses = (human,computer,secret) => {
    let winnerReturn;
    
    let humanPoints = getAbsoluteDistance(human,secret);
    let computerPoints = getAbsoluteDistance(computer,secret);

    ((humanPoints < computerPoints) || (humanPoints == computerPoints)) ? winnerReturn = true : winnerReturn = false;

    return winnerReturn;
}

const updateScore = winnerString => {

    switch (winnerString) {

        case 'human' :
            humanScore += 1;
            break;
        case 'computer' :
            computerScore += 1;
            break;
        default :
            break;
    }

}

const advanceRound = () => {
    currentRoundNumber += 1;
}