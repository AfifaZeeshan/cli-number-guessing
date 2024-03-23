import inquirer from "inquirer";
// computer will generate a random number
// user input for guessing number
// compare user input 
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations, you guessed right number");
}
else {
    console.log("You guessed wrong number");
}
