"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//here import
const inquirer_1 = __importDefault(require("inquirer"));
//here generate random number
let randomNumber = Math.round(Math.random() * 9 + 1);
let tries = 3;
let tryAgain = true;
//here start main function
function userInput() {
    return __awaiter(this, void 0, void 0, function* () {
        while (tryAgain) {
            while (tries > 0) {
                const userValue = yield inquirer_1.default.prompt({
                    name: "UserNumber",
                    type: "number",
                    message: "Guess a number between 1 to 10"
                });
                if (userValue.UserNumber === randomNumber) {
                    console.log("You are a winner");
                    tries = 0;
                }
                else if (userValue.UserNumber < randomNumber) {
                    console.log("Guess a higher");
                    tries--;
                    console.log(`You have ${tries} Tries`);
                }
                else if (userValue.UserNumber > randomNumber) {
                    console.log("Guess a lower");
                    tries--;
                    console.log(`You have ${tries} Tries`);
                }
                if (tries === 0 && userValue.UserNumber != randomNumber) {
                    console.log("You loss this game, better luck next time!");
                }
            }
            //here define try again method
            const try_again = yield inquirer_1.default.prompt({
                name: "TryAgain",
                type: "confirm",
                message: "Do you want to play again",
                default: false
            });
            if (try_again.TryAgain) {
                tryAgain = true;
                tries = 3;
                randomNumber = Math.round(Math.random() * 9 + 1);
            }
            else {
                tryAgain = false;
                console.log("Good bye");
            }
        }
    });
}
userInput();
