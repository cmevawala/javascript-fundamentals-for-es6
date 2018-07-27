// class Company {
//     constructor() {
//         this.employees = [];
//     }

//     addEmployees(...names) {
//         this.employees = this.employees.concat(names);
//     }

//     [Symbol.iterator]() {
//         return new ArrayIterator(this.employees);
//     }
// }

// class ArrayIterator {
//     constructor(array) {
//         this.array = array;
//         this.index = 0;
//     }
//     next() {
//         let result = { value: undefined, done: true };
//         if (this.index < this.array.length) {
//             result.value = this.array[this.index];
//             result.done = false;
//             this.index += 1;
//         }
//         return result;
//     }
// }

// let count = 0;
// let company = new Company();
// company.addEmployees("Tim", "Jim", "Bim");

// for (let e of company) {
//     count += 1;
// }
// console.log(count);