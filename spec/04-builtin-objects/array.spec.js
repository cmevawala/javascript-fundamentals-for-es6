// Several new functions in Array
// find(), findIndex(), 
// fill('a') => fills entire array with a given value
// fill('a', startIndex, endIndex) => fills entire array with a given value between start and end index
// copywithin(targetindex, copyfromindex, [how many numbers]), [1,2,3,4] => [1,2,1,2]
// The above function also supports negative offset
// Array.of() => Create an array with empty elements
// Array.from() => Create a new array from array like structure
// Array.enteries() => returns iterator to iterate on values
// Array.keys() => returns iterator to iterate on keys

describe('Arrays', function () {
    it('should return the first matching element using find', function () {
        let result = [1, 2, 3].find(x => x > 2);
        expect(result).toBe(3);
    });

    it('should return the first matching element using find', function () {
        let result = [1, 2, 3].find(x => x > 2);
        expect(result).toBe(3);
    });
});
