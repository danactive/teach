var maths = require("../js/maths.js"),
	expect = require("expect.js");

describe('Mathematical formula', function(){
	describe('Addition', function(){
		it('should pass with positive values', function(){
			expect(maths.add(1,2)).to.be(3);
		});
		it('should pass with negative values', function(){
			expect(maths.add(1,-2)).to.be(-1);
			expect(maths.add(-2,1)).to.be(-1);
			expect(maths.add(1,-20)).to.be.lessThan(1);
		});
	});
	describe('Subtraction', function(){
		// todo write tests
	});
});