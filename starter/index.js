// imports the Manager, Engineer and Intern classes from the lib directory
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// imports libraries for the application
// inquirer for creating interactive command line user interfaces
const inquirer = require("inquirer");
// path for handling file and directory paths
const path = require("path");
// fs module for file system operations
const fs = require("fs");
// fs-extra module to use the ensureDir() method
const fsExtra = require('fs-extra');
// defines the output directory
const OUTPUT_DIR = path.resolve(__dirname, "output"); 
// defines the output path where the HTML file is saved
const outputPath = path.join(OUTPUT_DIR, "team.html"); 
// imports the render module from ./src/page-template.js 
const render = require("./src/page-template.js");


// array to store employees data
let team = [];

/* when the function application runs the createManager function is run
and the user is prompted to answer a few questions to gather the employee's data */
// the answers provided by the user are checked and validated 
// the user is prompted with the same question until a valid input is provided
// once all questions are answered, creates a new Manager object with the user answers and pushes it to the team array
// calls the function createTeam to add team members
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
            }]).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                team.push(manager);
                createTeam();
            })
    };

    /* the function createTeam prompts the user to choose between the options
     of creating a new engineer or intern or the option to finalise the creation of the team */
    // then the functions addEngineer, addIntern and buildTeam are run based on the user's selected option
    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                message: "Would you like to:",
                choices: ["Add an Engineer?", "Add an Intern?", "Finish building the team?"],
                name: 'menu'
            },
        ]).then(answers => {
            if (answers.menu === "Add an Engineer?") {
                addEngineer();
                return;
            } else if (answers.menu === "Add an Intern?") {
                addIntern();
                return;
            } else {
                buildTeam();
                return;
            }
        })
    };

    // addEngineer prompts the user to answer a few question to gather the employee's data 
    // the answers provided by the user are checked and validated 
    // the user is prompted with the same question until a valid input is provided
    // once all questions are answered, creates a new Engineer object with the user answers and pushes it to the team array
    // calls again createTeam to prompt user to add a new employee or build the team
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                message: "What\'s the Engineer\'s name?",
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
                message: "What\'s the Engineer\'s ID(number)?",
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
                message: "What\'s the Engineer\'s email address?",
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
                message: "What\'s the Engineer\'s GitHub username?",
                name: 'github',
                validate: (value) => {
                    if (value !== '') {
                        return true;
                    }
                    return 'Please enter a valid username or enter N/A if not applicable';
                }
            }]).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                team.push(engineer);
                createTeam();
            })
    };

    // addIntern prompts the user to answer a few question to gather the employee's data 
    // the answers provided by the user are checked and validated 
    // the user is prompted with the same question until a valid input is provided
    // once all questions are answered, creates a new Intern object with the user answers and pushes it to the team array
    // calls again createTeam to prompt user to add a new employee or build the team
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                message: "What\'s the Intern\'s name?",
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
                message: "What\'s the Intern\'s ID(number)?",
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
                message: "What\'s the Intern\'s email address?",
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
                message: "What school did the intern go to?",
                name: 'school',
                validate: (value) => {
                    if (value !== '') {
                        return true;
                    }
                    return 'Please enter a valid school name or enter N/A if not applicable';
                }
            }]).then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                team.push(intern);
                createTeam();
            })
    };

    async function buildTeam() {
        // ensures that the directory for outputPath exists 
        // if the directory doesn't exist it creates one
        // uses the path module's dirname method to check what folder the file is and to determine the directory path from outputPath
        await fsExtra.ensureDir(path.dirname(outputPath));
        // fs.writeFile writes the data rendered from team in the team.html file 
        // the outputPath variable passed in as an argument specifies the location where the file will be written
        fs.writeFile(outputPath, render(team), (err) =>
            // if an error occurs, it is logged to the console
            // if the file is written successfully a message to confirm this is logged to the console
            err ? console.error(err) : console.log('File created successfully!'))
    };

    createManager();
};
application();

