
var assert = require('should');


describe('hasproperties', function(){

	var hasproperties = require('./hasproperties.js');
	var testObject = {	a: 1, b: 'something',
						c: {	o: 2,
								p: { x: 6 }
							}
					};

	describe("has", function() {
		it('should return false when not present', function(){
			hasproperties.has(testObject, 'z').should.be.false;
			hasproperties.has(testObject, 'c', 'z').should.be.false;
			hasproperties.has(testObject, 'c.o').should.be.false;
		});
		it('should return true when  present', function(){
			hasproperties.has(testObject, 'a').should.be.true;
			hasproperties.has(testObject, 'c', 'o').should.be.true;
			hasproperties.has(testObject, 'c', 'p', 'x').should.be.true;
		});
	});

	describe("get", function() {
		it('should return undefined when not present', function(){
			assert(hasproperties.get(testObject, 'z') === undefined);
			assert(hasproperties.get(testObject, 'c', 'z') === undefined);
			assert(hasproperties.get(testObject, 'c.o') === undefined);
		});
		it('should return value when  present', function(){
			hasproperties.get(testObject, 'a').should.equal(1);
			hasproperties.get(testObject, 'c', 'o').should.equal(2);
			hasproperties.get(testObject, 'c', 'p', 'x').should.equal(6);
			hasproperties.get(testObject, 'c', 'p').should.eql( {x: 6} );
		});
	});
});