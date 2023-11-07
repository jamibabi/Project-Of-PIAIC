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
const inquirer_1 = __importDefault(require("inquirer"));
let userArray = ["+", "-", "/", "*"];
function calculator() {
    return __awaiter(this, void 0, void 0, function* () {
        let userInput = yield inquirer_1.default.prompt([{
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
            }]);
        if (typeof userInput.num1 === "number" && typeof userInput.num2 === "number") {
            if (userInput.userChoices === userArray[0]) {
                console.log(`your output is ${userInput.num1 + userInput.num2}`);
            }
            else if (userInput.userChoices === userArray[1]) {
                console.log(`your output is ${userInput.num1 - userInput.num2}`);
            }
            else if (userInput.userChoices === userArray[2]) {
                console.log(`your output is ${userInput.num1 / userInput.num2}`);
            }
            else if (userInput.userChoices === userArray[3]) {
                console.log(`your output is ${userInput.num1 * userInput.num2}`);
            }
        }
        else {
            console.log("please enter a valid number");
        }
    });
}
calculator();
