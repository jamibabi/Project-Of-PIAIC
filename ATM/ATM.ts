import inquirer from "inquirer";


// Define the user data interface
interface User {

    userName: string;
    pin: number
    balance: number;
}

// Create an array to store user data


// Function to create user 


// Function to run the ATM machine



// Function to perform ATM functions

async function atmfunc() {



    const user: User = await inquirer.prompt([{
        name: "userName",
        type: "input",
        message: "Please enter your name here: "
    }, {
        name: "pin",
        type: "number",
        message: "Please enter your pin here: ",
        // default: 15480
    },
    {
        name: "balance",
        type: "number",
        message: "Enter your balance here: "
    }
    ])
    console.log(`Hi  ${user.userName.charAt(0).toUpperCase() + user.userName.slice(1)} Welcome to me ATM`);
    // if (isNaN(user.balance)) {

    // }
    while (true) {
        const answer = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "What would you like to do?",
            choices: ["Withdraw", "Balance", "Deposit", "Exit"]
        });

        if (answer.select === "Withdraw") {
            const amount = await inquirer.prompt({
                type: "number",
                message: "Enter the amount to withdraw:",
                name: "rupees",
            });

            if (amount.rupees > 25000) {
                return console.log("You cannot withdraw more than 25000.");
            }

            if (amount.rupees > user.balance) {
                return console.log("Insufficient balance.");
            }

            console.log(`Withdrawn amount: ${amount.rupees}`);
            user.balance -= amount.rupees;
        } else if (answer.select === "Balance") {
            console.log(`Balance: ${user.balance}`);
        } else if (answer.select === "Deposit") {
            const deposit = await inquirer.prompt({
                type: "number",
                message: "Enter the amount to deposit:",
                name: "rupees",
            });
            if (isNaN(deposit.rupees)) {
                console.log("Please enter a valid number");

            } else {
                console.log(`Deposited amount: ${deposit.rupees}`);
                user.balance += deposit.rupees;
            }

        } else if (answer.select === "Exit") {
            console.log("Thanks for using ATM.");
            break
        }
    }
};

// Create user data
atmfunc()
// Run the ATM machine



