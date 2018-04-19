/**
 * @param {number} t 
 * @param {number} k 
 * @param {Array<number>} ls 
 */

function chooseBestSum(t, k, ls) {
	if (k > ls.length) return null;
	ls = ls.sort((a, b) => b - a);
	let arr = [];
	return getDist(ls, 0, k, t, []);
}

function getDist(ls, start, k, t, arr) {
	if (!k) {
		let sum = arr.reduce((prev, cur) => prev + cur, 0);
		return sum <= t ? sum : null;
	}
	for (let i = start, len = ls.length; i < len; i++) {
		let a = ls[i];
		dist = getDist(ls, i + 1, k - 1, t, [...arr, a]);
		if (dist) {
			return dist;
		}
	}
	return null;
}

var ts = [50, 55, 56, 57, 58]
console.log(chooseBestSum(163, 3, ts), 163)
ts = [50]
console.log(chooseBestSum(163, 3, ts), null)
ts = [91, 74, 73, 85, 73, 81, 87]
console.log(chooseBestSum(230, 3, ts), 228)
ts = [91, 87, 85, 81, 74, 73, 73]
console.log(chooseBestSum(331, 4, ts), 331)
