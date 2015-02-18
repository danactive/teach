/*global module*/

var add = function (numA, numB) {
	return numA + numB;
};

var subtract = function (numA, numB) {
	return numA - numB;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports.add = add;
	module.exports.subtract = subtract;
}
