// imports the Employee class
const Employee = require('./Employee');

// defines the Engineer class that extends the Employee class
// the constructor method initialises an object of the class
// super calls the constructor of the parent class Employee with the name, id, and email parameters
// sets the github property of the Engineer object
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // overrides the getRole method to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
    // method to get the github username of the engineer
    getGithub() {
        return this.github;
    }
}

// exports the Engineer class so it can be imported and used in other modules
module.exports = Engineer;




