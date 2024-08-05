import assert from 'assert';
import fromWhere from '../fromWhere.js'; 

describe('fromWhere', function() {
    it('should return the correct location based on the registration number prefix', function() {
        
        assert.strictEqual(fromWhere('CY 123'), 'Bellville');
        assert.strictEqual(fromWhere('CJ 456'), 'Paarl');
        assert.strictEqual(fromWhere('CA 789'), 'Cape Town');
        assert.strictEqual(fromWhere('CL 123'), 'Some other place!');
        assert.strictEqual(fromWhere('XYZ 456'), 'Some other place!');
        assert.strictEqual(fromWhere(''), 'Some other place!');
    });
});

