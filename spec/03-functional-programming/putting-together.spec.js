// class Company {
//     constructor() {
//         this.employees = [];
//     }

//     addEmployees(...names) {
//         this.employees = this.employees.concat(names);
//     }

//     *[Symbol.iterator]() {
//         for(let e of this.employees) {
//             yield e;
//         }
//     }
// }

// let filter = function* (items, predicate) {
//     for(let item of items) {
//         console.log("filter",  item);
//         if(predicate(item)) {
//             yield item;
//         }
//     }   
// }

// let take = function* (items, number) {
//     let count = 0;
//     if (number < 1) return;
//     for(let item of items) {
//         console.log("take",  item);
//         yield item;
//         count += 1;
//         if (count >= number) {
//             return;
//         }
//     }
// }

// let count = 0;
// let company = new Company();
// company.addEmployees("Tim", "Jim", "Bim");

// // for (let e of filter(company, e => e[0] == "B")) {
// //     count += 1;
// // }

// for (let e of take(filter(company, e => e[1] == "i"), 1) ) {
//     count += 1;
// }
// console.log(count);