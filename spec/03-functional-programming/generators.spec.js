// Generators is a function that generates iterators. 
// It uses a special keyword called yield. 
// The yield allows you to return multiple values.


// let numbers = function* () {
//     yield 1;
//     yield 2;
//     yield 3;
// };

// let sum = 0;
// let iterator = numbers();
// let next = iterator.next();

// while(!next.done) {
//     sum += next.value;
//     next = iterator.next();
// }

// console.log(sum);

// -------------------------------------

// let numbers = function* (start, end) {
//     for(let i = start; i <= end; i++) {
//         yield i;
//     }
// };

// let sum = 0;

// for(let n of numbers(1, 4)) {
//     sum += n;
// }

// console.log(sum);