const KEYBOARD = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', '*', ' 0', '#'];

/**
 * @param {string} phrase 
 */
function presses(phrase) {
	let keyboard_map = {};
	for (let c of KEYBOARD) {
		for (let i=0, len = c.length; i < len; i++) {
			keyboard_map[c[i]] = i + 1;
		}
	}
	return phrase.split('').reduce((prev, cur) => prev + keyboard_map[cur], 0);
}

console.log(presses("LOL"), 9, "should work for simple examples")
console.log(presses("HOW R U"), 13, "should work for phrases with spaces")