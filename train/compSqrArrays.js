/**
 * @param {Array<number>} a
 * @param {Array<number>} b 
 */
function comp(a, b) {
	// if (a && b && b.length > 0) {
	// 	for (let el of b) {
	// 		let i = a.indexOf(Math.sqrt(el));
	// 		if (i === -1) return false;
	// 		a.splice(i, 1);
	// 	}
	// 	return true;
	// }
	// return false;

	return a && b ? b.every(el => (i = a.indexOf(Math.sqrt(el))) === -1 ? false : a.splice(i, 1)) : false;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2), true);