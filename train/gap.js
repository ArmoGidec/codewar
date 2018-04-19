function gap(g, m, n) {
	let res = m;
	for (let i = m; i <= n; i++) {
		if (isPrime(i)) {
			if ((i - res) === g) return [res, i];
			else res = i;
		}
	}
	return null;
}

function isPrime(num) {
	for (let i = 2, len = Math.sqrt(num); i <= len; i++) {
		if (!(num % i)) return false;
	}
	return true;
}


console.log(gap(2, 100, 110), [101, 103]);
console.log(gap(4, 100, 110), [103, 107]);
console.log(gap(6, 100, 110), null);
console.log(gap(8, 300, 400), [359, 367]);
console.log(gap(10, 300, 400), [337, 347]);	