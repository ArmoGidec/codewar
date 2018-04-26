function Event() {
	let subscribes = [];
	let sub_count = 0, emit_count = 0, unsub_count = 0;
	this.subscribe = function (...funcs) {
		for (let func of funcs) {
			if (typeof func === 'function') subscribes.push(func);
		}
		return funcs.length;
	};

	this.emit = function (...args) {
		// console.log(args);
		that = this;
		subscribes.forEach(func => {
			func.apply(that, args);
		});

	};

	this.unsubscribe = function (...funcs) {
		for (let func of funcs) {
			if ((i = subscribes.lastIndexOf(func)) !== -1) subscribes.splice(i, 1);
		}
		return funcs.length;
	};

	return this;
}


function Stub(func) {
	return function _spy() {
		_spy.calls = (_spy.calls || 0) + 1;
		_spy.args = Array.prototype.splice.call(this, arguments);
		_spy.ctx = this;

		if (typeof func === 'function') {
			return func.apply(this, _spy.args);
		}
	}
}

let e = new Event(),
	h1 = new Stub(),
	h2 = new Stub(h1);

e.subscribe(h1, h2);
e.emit();