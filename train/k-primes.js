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

/**
 * @param {number} s 
 */
function puzzle(s) {
	let a = countKprimes(1, 0, s);
	let b = countKprimes(3, 0, s);
	let c = countKprimes(7, 0, s);

	let d = 0;
	for (let val_a of a) {
		for (let val_b of b) {
			for (let val_c of c) {
				let sum = val_a + val_b + val_c;
				if (sum === s) d += 1;
				else if (sum > s) break;
			}
			if ((val_a + val_b) >= s) break;
		}
	}

	return d;
}

// console.log(countKprimes(2, 0, 100), [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49, 51, 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]);
// console.log(countKprimes(3, 0, 100), [8, 12, 18, 20, 27, 28, 30, 42, 44, 45, 50, 52, 63, 66, 68, 70, 75, 76, 78, 92, 98, 99]);
// console.log(countKprimes(5, 1000, 1100), [1020, 1026, 1032, 1044, 1050, 1053, 1064, 1072, 1092, 1100]);
// console.log(countKprimes(5, 500, 600), [500, 520, 552, 567, 588, 592, 594]);

console.log(puzzle(705), 182);
console.log(puzzle(688), 93);