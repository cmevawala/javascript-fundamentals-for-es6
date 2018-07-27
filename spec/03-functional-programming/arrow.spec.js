let add = (x, y) => x + y;
console.log(add(2, 3));

let square = x => x * x;
console.log(square(5));

let three = () => 3;
console.log(three());

let extendedAdd = (x, y) => {
    var z = x + y;
    return z;
};
console.log(extendedAdd(2, 3));

let numbers = [1, 2, 3, 4];
var sum = 0;
numbers.forEach(n => sum += n);
console.log(sum);

var doubled = numbers.map(n => n * 2);
console.log(doubled);