/**
 * @param {string} string 
 */
function isPangram(string) {
	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	string = string.toUpperCase();
	for (let char of alphabet) {
		if (!string.includes(char)) return false;
	}
	return true;	
}

var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string), true)
var string = "This is not a pangram."
console.log(isPangram(string), false)
