/**
 * @param {number} k 
 * @param {Array<number>} arr 
 */
function consecKprimes(k, arr) {
	let primes = countKprimes(k, Math.min(...arr), Math.max(...arr));
	let n = 0;
	for (let i = 0, len = arr.length; i < len - 1; i++) {
		if (primes.includes(arr[i]) && primes.includes(arr[i + 1])) n += 1;
	}
    return n;
}

/**
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


/**
 * @param {number} n 
 * @param {number} k 
 */
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


console.log(consecKprimes(3, [10158, 10182, 10184, 10172, 10179, 10168, 10156, 10165, 10155, 10161, 10178, 10170]), 5);
console.log(consecKprimes(2, [10110, 10102, 10097, 10113, 10123, 10109, 10118, 10119, 10117, 10115, 10101, 10121, 10122]), 7);
console.log(consecKprimes(2, [10123, 10122, 10132, 10129, 10145, 10148, 10147, 10135, 10146, 10134]), 2);
console.log(consecKprimes(6, [10098]), 0);
console.log(consecKprimes(1, [10182, 10191, 10163, 10172, 10178, 10190, 10177, 10186, 10169, 10161, 10165, 10181]), 0);

arr = [10005, 10030, 10026, 10008, 10016, 10028, 10004];
console.log(consecKprimes(4, arr), 3);
