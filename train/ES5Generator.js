function generator(sequencer, ...args) {
	let gen = sequencer(...args);
	gen.next = function () {
		return this();
	}
	return gen;
}

function dummySeq() {
	return function () {
		return "dummy";
	};
}

function factorialSeq() {
	let factorial = 1, n = 0;
	return function () {
		factorial = (factorial * n++) || 1;
		return factorial;
	}
}

function fibonacciSeq() {
	let fibonacci = 0, n = 1;
	return function () {
		return ([fibonacci, n] = [fibonacci + n, fibonacci])[0];
	}
}

function rangeSeq(start, step) {
	start -= step;
	return function () {
		return start += step;
	}
}

function primeSeq() {
	let prime = 1;

	function isPrime(n) {
		for (let i = 2, len = Math.sqrt(n); i <= len; i++) {
			if (!(n % i)) return false;
		}
		return true;
	}

	return function () {
		do {
			prime += 1;
		} while (!isPrime(prime))
		return prime;
	}
}

function partialSumSeq(...sequence) {
	let sum = 0, i = 0;
	return function () {
		return sum += sequence[i++] || Error("End of sequence");
	}
}

let seq = generator(partialSumSeq, -1, 4, 2, 5);
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());