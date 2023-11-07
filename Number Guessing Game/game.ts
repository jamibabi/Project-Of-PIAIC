//here import
import inquirer from "inquirer";

//here generate random number
let randomNumber: number = Math.round(Math.random() * 9 + 1)

let tries: number = 3
let tryAgain: boolean = true;

//here start main function
async function userInput() {
    while (tryAgain) {
        while (tries > 0) {

            const userValue = await inquirer.prompt({
                name: "UserNumber",
                type: "number",
                message: "Guess a number between 1 to 10"
            })

            if (userValue.UserNumber === randomNumber) {
                console.log("You are a winner");
                tries = 0
            } else if (userValue.UserNumber < randomNumber) {
                console.log("Guess a higher");
                tries--
                console.log(`You have ${tries} Tries`);

            } else if (userValue.UserNumber > randomNumber) {
                console.log("Guess a lower");
                tries--
                console.log(`You have ${tries} Tries`);
            }
            if (tries === 0 && userValue.UserNumber != randomNumber) {
                console.log("You loss this game, better luck next time!");

            }
        }
        //here define try again method
        const try_again = await inquirer.prompt({
            name: "TryAgain",
            type: "confirm",
            message: "Do you want to play again",
            default: false
        })
        if (try_again.TryAgain) {
            tryAgain = true
            tries = 3
            randomNumber = Math.round(Math.random() * 9 + 1)
        } else {
            tryAgain = false
            console.log("Good bye");

        }
    }

}

userInput()



















