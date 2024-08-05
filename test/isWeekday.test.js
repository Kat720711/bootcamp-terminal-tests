import assert from 'assert'; // Correct import for assertions
import isWeekday from '../isWeekday.js'; // Import the function to be tested
import { describe, it } from 'node:test'; // Import Mocha functions

describe('isWeekday', function() {
    it('should return true for weekdays', function() {
        assert.strictEqual(isWeekday('Monday'), true);
        assert.strictEqual(isWeekday('Tuesday'), true);
        assert.strictEqual(isWeekday('Wednesday'), true);
        assert.strictEqual(isWeekday('Thursday'), true);
        assert.strictEqual(isWeekday('Friday'), true);
    });

    it('should return false for weekend days', function() {
        assert.strictEqual(isWeekday('Saturday'), false);
        assert.strictEqual(isWeekday('Sunday'), false);
    });

    it('should return true for invalid inputs', function() {
        // Assuming the function should return true for inputs not in the weekendDays array
        assert.strictEqual(isWeekday('Funday'), true);
        assert.strictEqual(isWeekday(''), true);
        assert.strictEqual(isWeekday(null), true);
        assert.strictEqual(isWeekday(undefined), true);
        assert.strictEqual(isWeekday(123), true);
        assert.strictEqual(isWeekday({}), true);
    });
});
