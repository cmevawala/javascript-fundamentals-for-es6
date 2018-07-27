describe('sets', function() {
    it('should contain zero items when constructured', function () {
        let set = new Set();
        expect(set.size).toBe(0);
    });

    it('should contain 1 item when one item is added', function () {
        let set = new Set();
        set.add(10)
        expect(set.size).toBe(1);
    });

    it('should allow objects as keys', function () {
        let set = new Set();
        let key = {};
        set.add(key);
        expect(set.has(key)).toBe(true);
    });

    it('should contains items when constructing using array', function () {
        let set = new Set([1, 2 , 3]);
        expect(set.has(1)).toBe(true);
    });

    it('should not allow duplicate values', function () {
        let set = new Set();
        let key = {};
        set.add(key);
        set.add(key);
        expect(set.size).toBe(1);
    });

    it('should have no items after clear is called', function () {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.clear();
        expect(set.size).toBe(0);
    });

    it('should remove an item when delete is called', function () {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.delete(1);
        expect(set.size).toBe(1);
    });

    it('should call a callback function once for item in set when forEach is called', function () {
        let set = new Set();
        set.add(1);
        set.add(2);

        let count = 0;
        set.forEach(x => count++);
        expect(count).toBe(2);
    });

    it('should return an iterator of arrays when entries is called', function () {
        let set = new Set();
        set.add(111);
        set.add(112);

        let iterator = set.entries();
        let first = iterator.next().value;

        expect(first[0]).toBe(111);
    });

    it('should return an iterator of values when values is called', function () {
        let set = new Set();
        set.add(111);
        set.add(112);

        let iterator = set.values();
        let first = iterator.next().value;

        expect(first).toBe(111);
    });

    it('should return an iterator of keys when values is called', function () {
        let set = new Set();
        set.add(111);
        set.add(112);

        let iterator = set.keys();
        let first = iterator.next().value;
        expect(first).toBe(111);
    });

    it('should be able to construct with an iterator', function () {
        let set = new Set();
        set.add(111);
        set.add(112);

        let set2 = new Set(set.values());
        expect(set2.size).toBe(2);
    });
});