function chain({ sum, minus, double, addOne }) {
	function sum(x, y) {
		return x + y;
	}

	function double(x) {
		return sum(x, x);
	}

	function minus(x, y) {
		return x - y;
	}

	function addOne(x) {
		return sum(x, 1);
	}

	function _chain(data = {}) {
		this.data = data;

		this.sum = function (a, b) {
			if (!b) [a, b] = [this.data, a];
			return new _chain(sum(a, b));
		}

		this.addOne = function (a) {
			if (!a) a = this.data;
			return new _chain(addOne(a));
		}

		this.double = function (a) {
			if (!a) a = this.data;
			return new _chain(double(a));
		}

		this.minus = function (a, b) {
			if (!b) [a, b] = [this.data, a];
			return new _chain(minus(a, b));
		}

		this.addOneArr = function (arr) {
			if (!arr) arr = this.data;
			let res = arr.map(addOne);
			return new _chain(res);
		}

		this.execute = function () {
			return this.data;
		}

		return this;
	}

	return new _chain();
}