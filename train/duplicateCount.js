/**
 * @param {string} text 
 */
function duplicateCount(text) {
	let n = 0;
	for (let c of text) {
		let reg = new RegExp(c, 'gi');
		let len = (text.match(reg)||[]).length;
		if (len > 1) {
			n += 1;
			text = text.replace(reg, '');
		}
	}
	return n;
}


console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
