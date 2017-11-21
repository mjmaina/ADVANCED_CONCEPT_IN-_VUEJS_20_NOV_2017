var assert = require ('chai').assert;
var first = require('../first');
describe('first', function (){
    it('first should return hellow world', function () {
        assert.equal(first(), 'hello world')
    })
})
