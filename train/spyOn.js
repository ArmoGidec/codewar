function returns1() {
    return 1;
}

/**
 * @param {Function} func 
 */
function spyOn(func) {
    function f(...args) {
		f.count += 1;
		f.args.push(...args);
		let res = func();
		f.returns.add(res);
		return res;
	}

	f.count = 0;
	f.returns = new Set();
	f.args = [];

	f.callCount = () => f.count;
	f.wasCalledWith = (arg) => f.args.includes(arg);
	f.returned = (arg) => f.returns.has(arg);

    return f;
}

let spy = spyOn(returns1);

console.log(spy.callCount());
console.log(spy.returned(1), false);
console.log(spy.wasCalledWith('hello'), false);

spy('hello', 'hi', 'howdy');
spy('goodbye', 'bye', 'see ya');

console.log(spy.callCount(), 2);
console.log(spy.returned(1), true);
console.log(spy.wasCalledWith('hi'), true);
console.log(spy.wasCalledWith('bye'), true);