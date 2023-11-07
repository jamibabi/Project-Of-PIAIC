import chalk from "chalk";
import inquirer from "inquirer";

//classes opponent & player
class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let Fuel = this.fuel - 25
        this.fuel = Fuel
    }
    fuelIncrease() {
        this.fuel +=25
    }
}
class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let Fuel = this.fuel - 25
        this.fuel = Fuel
    }
}
//playeer name &oponent select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter yuor name:"
})

let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select  your opponent:",
    choices: ["skeleton", "Assassin", "zombie"]
})
//Gather Data

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do {

    //skeleton
    if (opponent.select) {

        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "please your opponent:",
            choices: ["Attack", "Drink portion", "Run for your life.."],
        })
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit()

                }
            } else if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit()

                }
            }
        } else if (ask.opt == "Drink portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));

        } else if (ask.opt == "Run for your life..") {
            console.log(chalk.red.bold.italic("you lose, Better luck next time"));
            process.exit()
        }


    }


}
while (true)