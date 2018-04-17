/**
 * @param {number} n 
 */
function descendingOrder(n) {
	return Number(String(n).split('').sort().join(''));
}