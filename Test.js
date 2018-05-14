function Test() {
	this.assertEquals = function(actual, expected, ...extra) {
		let str = actual !== expected ? `Fail! Expected: ${expected}\n\tBut actual: ${actual}\n\t\t${extra}` : `Test is passed` ;
		console.log(str);
		return str;
	};
	return this;
}

module.exports = new Test();