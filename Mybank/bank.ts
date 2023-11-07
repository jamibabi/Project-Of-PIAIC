import { faker } from "@faker-js/faker";
import chalk from "chalk/index.js";
import inquirer from "inquirer";

// Customer class
class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobNumber: number;
    accNumber: number;

    constructor(
        fName: string,
        lName: string,
        age: number,
        gender: string,
        mob: number,
        acc: number
    ) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}

// Interface BankAccount
interface BankAccount {
    accNumber: number;
    balance: number;
}

// Class Bank
class Bank {
    customers: Customer[] = [];
    accounts: BankAccount[] = [];

    addCustomer(obj: Customer) {
        this.customers.push(obj);
    }

    addAccount(obj: BankAccount) {
        this.accounts.push(obj);
    }

    transaction(accObj: BankAccount) {
        this.accounts = this.accounts.map((acc) =>
            acc.accNumber === accObj.accNumber ? accObj : acc
        );
    }
}

const myBank = new Bank();

// Customer creation
for (let i = 1; i <= 3; i++) {
    const fName = faker.name.firstName();
    const lName = faker.name.lastName();
    //   const num = parseInt(faker.phone.phoneNumberFormat(0)) as number;
    const num = 10
    const customer = new Customer(fName, lName, 10 * i, "male", num, 1000 + i);
    myBank.addCustomer(customer);
    myBank.addAccount({ accNumber: customer.accNumber, balance: 100 * i });
}

// Bank functionality
async function bankService(bank: Bank) {
    do {
        const service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please select the service",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Exit"],
        });

        if (service.select === "View Balance") {
            const res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number",
            });

            const account = myBank.accounts.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                const customer = myBank.customers.find(
                    (item) => item.accNumber == account.accNumber
                );
                console.log(
                    `Dear ${chalk.green.italic(
                        customer?.firstName
                    )}${chalk.green.italic(customer?.lastName)} Your Balance is ${chalk.bold.blueBright(
                        `$${account.balance}`
                    )}`
                );
            }
        }

        if (service.select === "Cash Withdraw") {
            const res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number",
            });

            const account = myBank.accounts.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                const ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter the Amount to Withdraw",
                    name: "rupee",
                });

                if (ans.rupee > account.balance) {
                    console.log(chalk.red.bold("Insufficient balance"));
                }

                const newBalance = account.balance - ans.rupee;
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }

        if (service.select === "Cash Deposit") {
            const res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number",
            });

            const account = myBank.accounts.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                const ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter the Amount to Deposit",
                    name: "rupee",
                });

                const newBalance = account.balance + ans.rupee;
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }

        if (service.select === "Exit") {
            return;
        }
    } while (true);
}

bankService(myBank);
