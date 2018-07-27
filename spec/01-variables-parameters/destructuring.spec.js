// ---- Destructuring Array ----

// let [x , y] = [3, 2];
// console.log(x); // 3
// console.log(y); // 2

// let doWork = function () {
//     return [1, 2, 3];
// };
// let [x, , y, z] = doWork();
// console.log(x); // 1
// console.log(y); // 3
// console.log(z); // undefined

// let doWork = function () {
//     return {
//         firstname: "Scott",
//         lastname: "Allen",
//         twitter: "OdeToCode",
//         handles: {
//             twitter: "@Scott"
//         }
//     }
// };

// // let { firstname, lastname, twitter } = doWork();
// let { firstname: first, lastname: last, twitter, handles: { twitter: twitterHandle } } = doWork();
// console.log(first); // Scott
// console.log(last); // Allen
// console.log(twitter); // OdeToCode
// console.log(twitterHandle); // @Scott

// let doWork = function (url, { data, cache }) {
//     console.log(url);
//     console.log(data);
//     console.log(cache);
// };

// doWork("api/test", { data: "test", cache: false });