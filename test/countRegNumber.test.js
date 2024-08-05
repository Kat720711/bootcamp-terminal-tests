import assert from 'assert';
import countRegNumber from '../countRegNumber.js';
describe('countRegNumber', function() {
    it('should count the number of registration numbers in a string', function() {
        assert.strictEqual(countRegNumber('CA 182736, CY 523519, CJ 812328'), 3);
    });
    it('should handle extra spaces around registration numbers', function() {
        assert.strictEqual(countRegNumber(' CA 182736 , CY 523519 , CJ 812328 '), 3);
    });
    it('should handle a single registration number', function() {
        assert.strictEqual(countRegNumber('CA 182736'), 1);
    });
    
    it('should handle multiple registration numbers separated by commas', function() {
        assert.strictEqual(countRegNumber('CA 42665, AA 42665, AA 12 RT GP'), 3);
    });
});