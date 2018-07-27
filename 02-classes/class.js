// Class, constructor getters and setters
class Employee {

    constructor(name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._name = name;
    }

    doWork() {
        return "Complete!";
    }
}

let e1 = new Employee("Scott");
console.log(e1.name);

let e2 = new Employee();
e2.name = "Chitrang";
console.log(e2.name);