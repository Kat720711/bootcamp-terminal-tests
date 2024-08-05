import assert from 'assert'
import greet from '../greet.js'

describe('Greeting' , function(){
    it(' its greeting sam' , function(){
        assert.equal(greet('Sam'), 'Hello, Sam');   
    });
    it(' its greeting Bob' , function(){
    assert.equal(greet('Bob'), 'Hello, Bob');
    });

});
