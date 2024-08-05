import assert from 'assert';
import countAllPaarl from '../countAllPaarl.js';

describe('countAllPaarl', function() {
    it('should return the correct count of registration numbers starting with CJ', function() {
        
        assert.strictEqual(countAllPaarl('CL 124,CY 567,CJ 345, CJ 456,CL 341'), 2);
        assert.strictEqual(countAllPaarl('CJ 123, CJ 456, CJ 789'), 3);
        assert.strictEqual(countAllPaarl('CL 124, CY 567, CL 341'), 0);
        assert.strictEqual(countAllPaarl(''), 0);
        assert.strictEqual(countAllPaarl('CJ 001, CJ 002, CJ 003, CJ 004'), 4);
    });
});