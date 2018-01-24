/* TASK 1 */

// Department Class with methods:
// * addManager, addDesigner, addDeveloper: add employee - manager, designer or developer
// * giveSalary: calculate of salary of an employee
// * menegersList: print list of department menegers

class Department {
    constructor() {
        this.menegersList = {};
    }

    giveSalary(employee: any) {
        console.log(`${employee.firstName} ${employee.secondName}: got salary: ${employee.salaryValue()}`);
    }

    addDeveloper(characteristics) {
        let developer = new Developer(characteristics);
        let developerFullName = `${developer.firstName} ${developer.secondName}`;
        let managerFullName = `${developer.manager.firstName} ${developer.manager.secondName}`;

        if (this.menegersList[managerFullName]) {
            this.menegersList[managerFullName].employeeList[developerFullName] = developer;
        } else {
            return console.log("Non-existing manager specified");
        };
    }

    addDesigner(characteristics) {
        let designer = new Designer(characteristics);
        let designerFullName = `${designer.firstName} ${designer.secondName}`;
        let managerFullName = `${designer.manager.firstName} ${designer.manager.secondName}`;

        if (this.menegersList[managerFullName]) {
            this.menegersList[managerFullName].employeeList[designerFullName] = designer;
        } else {
            return console.log("Non-existing manager specified");
        };
    }

    addManager(characteristics) {
        let manager = new Manager(characteristics);
        let managerFullName = `${manager.firstName} ${manager.secondName}`;

        if (this.menegersList[managerFullName]) {
            return console.log("Already existing employee specified");
        } else {
            this.menegersList[managerFullName] = manager;
        };
    }
};

class Employee {
    constructor(characteristics) {
        this.firstName = characteristics.firstName;
        this.secondName = characteristics.secondName;
        this.position = characteristics.position;
        this.salary = characteristics.salary;
        this.manager = characteristics.manager;
        this.experience = characteristics.experience;
    }

    salaryValue() {
        return ((this.experience > 5) ? (this.salary * 1.2 + 500) :
               ((this.experience > 2) ? (this.salary + 200) : (this.salary)));
    }

    employeeToString() {
        return (`${this.firstName} ${this.secondName}, manager: ${this.manager.secondName}, experience: ${this.experience} ${(this.experience === 1) ? "year" : "years"}`);
    }
};

class Developer extends Employee {
    constructor(characteristics) {
        super(characteristics);
    }
};

class Designer extends Employee {
    constructor(characteristics) {
        super(characteristics);
        this.effectiveness = characteristics.effectiveness;
    }

    salaryValue() {
        return (super.salaryValue() * this.effectiveness);
    }
};

class Manager extends Employee {
    constructor(characteristics) {
        super(characteristics);
        this.employeeList = {};
    }

    salaryValue() {
        let team = this.employeeList.length;
        let numberOfDevelopers = 0;

        for (let prop in this.employeeList) {
            if (prop.position === "developer") {
                numberOfDevelopers += 1;
            };
        };

        let salary = super.salaryValue() +
        ((team > 10) ? 300 : ((team > 5) ? 200 : 0)) +
        ((numberOfDevelopers / team) > 0.5) ? (super.salaryValue() * 1.1) : 0;

        return salary;
    }

    employeeToString() {
        return (`${this.firstName} ${this.secondName}, experience: ${this.experience} ${(this.experience === 1) ? "year" : "years"}`);
    }
};

let dep = new Department();

dep.addManager({
    firstName: "John",
    secondName: "Smith",
    position: "manager",
    salary: 450,
    experience: 5
});

dep.addManager({
    firstName: "Stanton",
    secondName: "Stillson",
    position: "manager",
    salary: 500,
    experience: 6
});

dep.addDeveloper({
    firstName: "Jerry",
    secondName: "Jerome",
    position: "developer",
    salary: 100,
    experience: 2,
    manager: {
        firstName: "John",
        secondName: "Smith",
    }
});

dep.addDeveloper({
    firstName: "Kyle",
    secondName: "Kuyper",
    position: "developer",
    salary: 150,
    experience: 3,
    manager: {
        firstName: "Stanton",
        secondName: "Stillson"
    }
});

dep.addDesigner({
    firstName: "Boyce",
    secondName: "Brookins",
    position: "designer",
    salary: 200,
    experience: 5,
    effectiveness: 0.5,
    manager: {
        firstName: "John",
        secondName: "Smith",
    }
});

dep.addDesigner({
    firstName: "Mike",
    secondName: "Mcmiller",
    position: "designer",
    salary: 250,
    experience: 5,
    effectiveness: 0.9,
    manager: {
        firstName: "Stanton",
        secondName: "Stillson"
    }
});

console.log(dep);

console.log(dep.menegersList);

console.log(dep.menegersList["John Smith"].employeeToString());

console.log(dep.giveSalary(dep.menegersList["John Smith"]));

console.log(dep.menegersList["John Smith"].employeeList["Boyce Brookins"].employeeToString());

console.log(dep.giveSalary(dep.menegersList["John Smith"].employeeList["Boyce Brookins"]));