/**
 * @param {number} n 
 * @param {object} v 
 */
function prefill(n, v) {
	let k = parseInt(n);
	if (k >=0 && !(n % 1)) return new Array(k).fill(v);
	throw new TypeError(`${n} is invalid`);
}

console.log(prefill(3, 1), [1, 1, 1]);
console.log(prefill(2, 'abc'), ['abc', 'abc']);
console.log(prefill('1', 1), [1]);
console.log(prefill(3, prefill(2, '2d')), [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
var errorThrown = false;
try { prefill('xyz', 1) }
catch (e) {
	console.log(e.name, "TypeError");
	console.log(e.message, "xyz is invalid");
	errorThrown = true;
}