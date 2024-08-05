import assert from 'assert';
import findItemsOver from '../findItemsOver.js';

describe('findItemsOver', function() {
    it('should return an empty array if no items have qty greater than the threshold', function() {
        const fruits = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 15 },
        ];
        const result = findItemsOver(fruits, 20);
        assert.deepStrictEqual(result, []);
    });

    it('should return all items if the threshold is lower than any item qty', function() {
        const fruits = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
        ];
        const result = findItemsOver(fruits, 5);
        assert.deepStrictEqual(result, fruits);
    });

    it('should return items with quantity over the given threshold', function() {
        const fruits = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 15 },
            { name: 'bananas', qty: 5 },
        ];
        const result = findItemsOver(fruits, 9);
        assert.deepStrictEqual(result, [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 15 },
        ]);
    });
});
