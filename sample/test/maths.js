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
	describe('Multiply', function(){
		it('should pass with positive values', function(){
			expect(maths.multiply(5,9)).to.be(45);
			expect(maths.multiply(10,3)).to.be(30);
		});
		it('should pass with negative values', function(){
			expect(maths.multiply(-5,-9)).to.be(45);
			expect(maths.multiply(10,-3)).to.be(-30);
		});
		it('should fail with error', function(){
			expect(maths.multiply()).to.be(null);
			expect(maths.multiply(2)).to.be(null);
		});
		it('should fail with string', function(){
			expect(maths.multiply({},"/")).to.be(null);
		});
	});
});