class Test {
	constructor() {
		this.text = 'Test';
	}
	assertEquals(actual, expected, ...extra) {
		let str = actual !== expected ? `Fail! Expected: ${expected}\n\tBut actual: ${actual}\n\t\t${extra}` : `Test is passed` ;

		console.log(str,'\n');
		return str;
	}
}

module.exports = new Test();