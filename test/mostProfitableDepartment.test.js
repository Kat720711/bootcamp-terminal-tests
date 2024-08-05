import assert from 'assert'; // Import assertion library
import mostProfitableDepartment from '../mostProfitableDepartment.js'; // Import the function to be tested
import { describe, it } from 'node:test'; // Import Mocha functions

describe('mostProfitableDepartment', function() {
    it('should return the name of the most profitable department', function() {
        const departments = [
            { name: 'Electronics', profit: 5000 },
            { name: 'Clothing', profit: 3000 },
            { name: 'Books', profit: 2000 }
        ];
        assert.strictEqual(mostProfitableDepartment(departments), 'Electronics');
    });

    // Add more tests as needed
});
