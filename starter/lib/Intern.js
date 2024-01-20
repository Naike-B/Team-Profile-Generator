// imports the Employee class
const Employee = require('./Employee');

// defines the Intern class that extends the Employee class
// the constructor method initialises an object of the class
// calls the constructor of the parent class Employee with the name, id, and email parameters
// sets the school property of the Intern object
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // overrides the getRole method to return 'Intern'
    getRole() {
        return 'Intern';
    }
    // method to get the school of the intern
    getSchool() {
        return this.school;
    }
}

// exports the Intern class so it can be imported and used in other modules
module.exports = Intern;
