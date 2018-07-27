class Person {
    constructor() {
    }
}

class Employee extends Person {

}
var e = new Employee();
e._name = "Chitrang";
console.log(e.name);