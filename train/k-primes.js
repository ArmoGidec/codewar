/**
 * 
 * @param {number} k 
 * @param {number} start 
 * @param {number} nd 
 */
function countKprimes(k, start, nd) {
	let result = [];
	for (let n = start; n <= nd; n++) {
		let count = getPrimes(n, k);
		if (count === k) {
			result.push(n);
		}
	}
	return result;
}

function getPrimes(n, k) {
	let result = 0;
	let d = 2;
	while ((d * d) <= n) {
		if ((n % d) === 0) {
			if (result === k) return result + 1;
			result += 1;
			n /= d;
		} else d += 1;
	}
	if (n > 1) result += 1;
	return result;
}

console.log(countKprimes(2, 0, 100), [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49, 51, 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]);
console.log(countKprimes(3, 0, 100), [8, 12, 18, 20, 27, 28, 30, 42, 44, 45, 50, 52, 63, 66, 68, 70, 75, 76, 78, 92, 98, 99]);
console.log(countKprimes(5, 1000, 1100), [1020, 1026, 1032, 1044, 1050, 1053, 1064, 1072, 1092, 1100]);
console.log(countKprimes(5, 500, 600), [500, 520, 552, 567, 588, 592, 594]);