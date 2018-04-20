function digPow(n, p) {
	let a = String(n).split('').map(Number).reduce((prev, cur) => prev + cur**p++, 0);
	return a % n === 0 ? a / n : -1;
}

console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(46288, 3), 51)