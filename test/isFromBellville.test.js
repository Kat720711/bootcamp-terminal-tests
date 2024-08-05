import assert from 'assert';
import isFromBellville from '../isFromBellville.js';

describe('isFromBellville', function() {
    it('should return true for registration numbers from Bellville', function() {
        assert.strictEqual(isFromBellville('CY 123'), true);
    });

    it('should return false for registration numbers not from Bellville', function() {
        assert.strictEqual(isFromBellville('CA 123'), false);
    });
});

