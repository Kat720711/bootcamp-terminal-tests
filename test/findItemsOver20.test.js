import assert from 'assert';
import findItemsOver from '../findItemsOver20.js';
import { describe, it } from 'node:test';

describe('findItemsOver', function() {
    it('should return items with quantity over the given threshold', function() {
        const items = [
            { name: 'Apples', qty: 30 },
            { name: 'Oranges', qty: 10 },
            { name: 'Pears', qty: 25 }
        ];
        const result = findItemsOver(items, 20);
        const expected = [
            { name: 'Apples', qty: 30 },
            { name: 'Pears', qty: 25 }
        ];
        assert.deepStrictEqual(result, expected);
    });

    it('should return an empty array if no items have quantity over the threshold', function() {
        const items = [
            { name: 'Apples', qty: 10 },
            { name: 'Oranges', qty: 15 },
            { name: 'Pears', qty: 5 }
        ];
        const result = findItemsOver(items, 20);
        assert.deepStrictEqual(result, []);
    });

    it('should handle an empty array', function() {
        const items = [];
        const result = findItemsOver(items, 20);
        assert.deepStrictEqual(result, []);
    });

    it('should return all items if the threshold is lower than any item qty', function() {
        const items = [
            { name: 'Apples', qty: 10 },
            { name: 'Pears', qty: 37 },
            { name: 'Bananas', qty: 27 }
        ];
        const result = findItemsOver(items, 5);
        const expected = [
            { name: 'Apples', qty: 10 },
            { name: 'Pears', qty: 37 },
            { name: 'Bananas', qty: 27 }
        ];
        assert.deepStrictEqual(result, expected);
    });
});
