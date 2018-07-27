let range = function* (start, end) {
    let current = start;
    while (current <= end) {
        let delta = yield current;
        current += delta || 1;
    }
}

let iterator = range(1, 10);
let next = iterator.next();
let results = [];
while(!next.done) {
    results.push(next.value);
    next = iterator.next(2);
}
console.log(results);