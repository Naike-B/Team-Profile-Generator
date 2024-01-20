// imports the Employee class
const Employee = require('./Employee');

// defines the Manager class that extends the Employee class
// the constructor method initialises an object of the class
// calls the constructor of the parent class Employee with the name, id, and email parameters
// sets the officeNumber property of the Manager object
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // overrides the getRole method to return 'Manager'
    getRole() {
        return 'Manager';
    }
    // method to get the office number of the manager
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// exports the Manager class so it can be imported and used in other modules
module.exports = Manager;
