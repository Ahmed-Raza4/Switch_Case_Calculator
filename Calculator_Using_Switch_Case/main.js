#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//step 01
const answer = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: chalk.green.bold("Kindly Enter your First Number")
    },
    {
        type: "number",
        name: "numberTwo",
        message: chalk.green.bold("Kindly Enter Your Second Number")
    },
    {
        type: "list",
        name: "operator",
        message: chalk.red.bold("Enter your operator"),
        choices: ["+", "-", "*", "/"]
    }
]);
//step 02 Switch Case
const { numberOne, numberTwo, operator } = answer;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log(chalk.red.bold("Invalid operator"));
}
console.log(chalk.cyan.bold(`${numberOne} ${operator} ${numberTwo} = ${result}`));
