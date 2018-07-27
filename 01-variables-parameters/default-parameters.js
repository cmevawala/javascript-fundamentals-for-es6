// Default parameters work only with undefined values
// var doWork = function (name = "Scott") {
//     return name;
// };

// console.log(doWork(undefined));


// var doWork = function (a = 1, b = 2, c = 3) {
//     return a + " " + b + " " + c;
// };

// console.log(doWork("abc", undefined));


// let doWork = function (url, { data = "test", cache }) {
//     console.log(url);
//     console.log(data);
//     console.log(cache);
// };

// doWork("api/test", { cache: false });