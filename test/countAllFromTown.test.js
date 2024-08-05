import assert from 'assert';
import countAllFromTown from '../countAllFromTown.js';

describe('countAllFromTown', function() {
    it('should return the correct count of registration numbers starting with the given prefix', function() {
        // Test cases
        assert.strictEqual(countAllFromTown('CL 124,CY 567,CJ 345, CJ 456,CL 341', 'CJ'), 2);
        assert.strictEqual(countAllFromTown('CJ 123, CJ 456, CJ 789', 'CJ'), 3);
        assert.strictEqual(countAllFromTown('CL 124, CY 567, CL 341', 'CL'), 2);
        assert.strictEqual(countAllFromTown('', 'CJ'), 0);
        assert.strictEqual(countAllFromTown('CJ 001, CJ 002, CJ 003, CJ 004', 'CJ'), 4);
        assert.strictEqual(countAllFromTown('CL 123, CY 456, CJ 789', 'CY'), 1);
    });
});