/*global module*/

var _add = function (numA, numB) {
	return numA + numB;
};
var _subtract = function (numA, numB) {
	return numA - numB;
};
var _multiply = function (numA, numB) {
	var hasArgs = !(numA === undefined || numB === undefined),
		isNumbers = (typeof numA === "number" && typeof numB === "number");

	if (!hasArgs || !isNumbers) {
		return null;
	}
	return numA * numB;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports.add = _add;
	module.exports.subtract = _subtract;
	module.exports.multiply = _multiply;
}
