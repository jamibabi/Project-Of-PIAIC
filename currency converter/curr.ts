import inquirer from "inquirer";
import chalk from "chalk";


//currency converter Api link

let apilink =
    "https://v6.exchangerate-api.com/v6/369592687323551c6d1498ee/latest/PKR";

//fetching data
let fetchData = async (data: any) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let data = await fetchData(apilink);

//object to array
let countries = Object.keys(data);

// user input first country
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "converting from",
    choices: countries,
});

//first country money
let userMoney = await inquirer.prompt({
    type: "number",
    name: "rupee",
    message: `please enter the amount in ${chalk.greenBright.bold(firstCountry.name)}:`,
});

//conver country
let secondCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "converting To",
    choices: countries,
});


//conversion rate
let cnv =
    `https://v6.exchangerate-api.com/v6/369592687323551c6d1498ee/pair/${firstCountry.name}/${secondCountry.name}`;


//fetching  data for conversion rate

let cnvData = async (data: any) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rate;
};

let conversionRate = await cnvData(cnv);

let convertedRate = userMoney.rupee * conversionRate;
console.log(`your ${chalk.bold.greenBright(firstCountry.name)} ${chalk.bold.greenBright(userMoney.rupee)} in ${chalk.bold.greenBright(secondCountry.name)} is ${chalk.bold.greenBright(convertedRate)} `);





























