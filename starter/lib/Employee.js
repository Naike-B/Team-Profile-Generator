// defines the Employee class 
// the constructor method initialises an object of the class
// assigns the parameters passed to the constructor to the object properties
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // method to get the name of the employee
    getName() {
        return this.name;
    }
    // method to get the id of the employee
    getId() {
        return this.id;
    }
    //method to get the email of the employee
    getEmail() {
        return this.email;
    }
    // method to get the role of the employee 
    getRole() {
        return 'Employee';
    }
}

// exports the Employee class so it can be imported and used in other modules
module.exports = Employee;

