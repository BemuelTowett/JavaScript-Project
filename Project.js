// Deposit some money.
// Determine number of lines to bet on
// Collect a bet amount
// Spin the slot machine
// Check if the user won
// Give the user their winnings
// Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true){
        const depositAmount = prompt("Enter deposit amount : ");
    const numberDepositNumber = parseFloat(depositAmount);

    if (isNaN(numberDepositNumber) || numberDepositNumber <= 0) {
        return "Invalid deposit amount, try again."
    };
  }
};

deposit();