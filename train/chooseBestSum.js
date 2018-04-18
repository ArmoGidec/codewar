/**
 * @param {number} t 
 * @param {number} k 
 * @param {Array<number>} ls 
 */

function chooseBestSum(t, k, ls) {
	let arr = ls.sort((a, b) => a - b);
	for (let i = 0, len = arr.length; i < len; i++) {
		
	}
	return null;
}


var ts = [50, 55, 56, 57, 58]
console.log(chooseBestSum(163, 3, ts), 163)
ts = [50]
console.log(chooseBestSum(163, 3, ts), null)
ts = [91, 74, 73, 85, 73, 81, 87]
console.log(chooseBestSum(230, 3, ts), 228)


// function chooseBestSum(t, k, ls) {
// 	if (k > ls.length) return null;
// 	let list = getList(k, ls);
// 	let distances = list.map(arr => arr.reduce((prev, cur) => prev + cur, 0));
// 	let filter = distances.filter(val => val <= t);
// 	return filter.length > 0 ? Math.max(...filter) : null;
// }

// function getList(n, ls) {
// 	let arr = [];
// 	for (let i = 0, len = ls.length; i < len; i++) {
// 		let a = ls[i];
// 		arr = getVariants(n - 1, ls, i + 1, [a], arr);
// 	}
// 	return arr;
// }

// function getVariants(n, ls, start, arr, result) {
// 	if (!n) return [...result, arr];
// 	for (let i = start, len = ls.length; i < len; i++) {
// 		let a = ls[i];
// 		result = getVariants(n - 1, ls, i + 1, [...arr, a], result);
// 	}
// 	return result;
// }