import inquirer from "inquirer";
let userArray: string[] = ["+", "-", "/", "*"]
async function calculator() {
    let userInput = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Please enter first number"
    },
    {
        name: "num2",
        type: "number",
        message: "Please enter second number"
    },
    {
        name: "userChoices",
        type: "list",
        message: "Select Operations",
        choices: ["+", "-", "/", "*"]
    }])

    if (typeof userInput.num1 === "number" && typeof userInput.num2 === "number") {

        if (userInput.userChoices === userArray[0]) {
            console.log(`your output is ${userInput.num1 + userInput.num2}`);


        } else if (userInput.userChoices === userArray[1]) {

            console.log(`your output is ${userInput.num1 - userInput.num2}`);

        } else if (userInput.userChoices === userArray[2]) {

            console.log(`your output is ${userInput.num1 / userInput.num2}`);
        } else if (userInput.userChoices === userArray[3]) {

            console.log(`your output is ${userInput.num1 * userInput.num2}`);
        }

    } else {
        console.log("please enter a valid number");



    }
}
calculator()