// imports the Manager, Engineer and Intern classes from the lib directory
// imports inquirer, path and fs packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// array to store employees data
let team = [];

/* when the function application runs the createManager function is run
and the user is prompted to answer a few questions to gather the employee's data */
// the answers provided by the user are checked and validated - the user is prompted with the same question until a valid input is provided
// once all questions are answered, creates a new Manager object with the user answers and pushes it to the team array
function application() {
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                message: "What\'s the team Manager\'s name?",
                name: 'name',
                validate: (value) => {
                    if (value !== '') {
                        return true;
                    }
                    return 'Please enter a valid name';
                }
            },
            {
                type: 'input',
                message: "What\'s the team Manager\'s ID(number)?",
                name: 'id',
                validate: (value) => {
                    if (!isNaN(value) && value > 0) {
                        return true;
                    }
                    return 'Please enter a number greater than 0';
                }
            }, 
            {
                type: 'input',
                message: "What\'s the team Manager\'s email address?",
                name: 'email',
                validate: (value) => {
                    const validMail = value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
                    if (validMail) {
                        return true;
                    }
                    return 'Please enter a valid email address';
                }
            },
            {
                type: 'input',
                message: "What\'s the team Manager\'s office number?",
                name: 'officeNumber',
                validate: (value) => {
                    if (!isNaN(value) && value > 0) {
                        return true;
                    }
                    return 'Please enter a valid number';
                }
            }

        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
        })
    }
   createManager();
}
application();