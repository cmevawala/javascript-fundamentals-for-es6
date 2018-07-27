describe("Maps", function () {
    it("should contain zero items when constructed", function () {
        let map = new Map();
        expect(map.size).toBe(0);
    });

    it('should contain 1 item when one item is added', function () {
        let map = new Map();
        map.set("age", 35);
        expect(map.size).toBe(1);
    });

    it('should return the object when called with a correct key', function () {
        let map = new Map();
        map.set("age", 35);
        expect(map.get("age")).toBe(35);
    });

    it('should allow an object to be key', function () {
        let map = new Map();
        let obj = {"age": "age1"};
        map.set(obj, 35);
        expect(map.get(obj)).toBe(35);
    });

    it('should contains items when given an array in constructor', function () {
        let map = new Map([['name', 'john'], ['age', 'doe']]);
        expect(map.size).toBe(2);
    });

    it('should find the correct item when has is called', function () {
        let map = new Map([['name', 'john'], ['age', 'doe']]);
        expect(map.has('name')).toBe(true);
    });

    it('should have no items when clear is called', function () {
        let map = new Map([['name', 'john'], ['age', 'doe']]);
        map.clear();
        expect(map.size).toBe(0);
    });

    it('should have no items when clear is called', function () {
        let map = new Map([['name', 'john'], ['age', 'doe']]);
        map.delete('name');
        expect(map.has('name')).toBe(false);
    });

    it('should call a callback function once for item in set when forEach is called', function () {
        let map = new Map([['name', 'john'], ['age', 'doe']]);

        let count = 0;
        map.forEach(() => { count++; });
        expect(count).toBe(2);
    });

    it('should support for of iteration', function () {
        let map = new Map([['name', 'john'], ['age', 'doe']]);

        let count = 0;
        for(let [key, value] of map) {
            count++;
        }
        expect(count).toBe(2);
    });

    it('should return an iterator of arrays when entries is called', function () {
        let map = new Map([['name', 'john'], ['age', 'doe']]);

        let iterator = map.entries();
        let first = iterator.next().value;

        expect(first[0]).toBe('name');
        expect(first[1]).toBe('john');
    });

    it('should return an iterator of values when values is called', function () {
        let map = new Map([['name', 'john'], ['age', 'doe']]);

        let iterator = map.values();
        let first = iterator.next().value;

        expect(first).toBe('john');
    });

    it('should return an iterator of keys when values is called', function () {
        let map = new Map([['name', 'john'], ['age', 'doe']]);

        let iterator = map.keys();
        let first = iterator.next().value;

        expect(first).toBe('name');
    });

    it('should be able to construct with an iterator', function () {
        let map1 = new Map([['name', 'john'], ['age', 'doe']]);

        let map2 = new Map(map1.entries());

        expect(map2.size).toBe(2);
    });
});