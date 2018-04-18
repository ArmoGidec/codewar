/**
 * @param {string} strng 
 */
function incrementString(strng) {
	let num_str = strng.match(/\d+/) || ["0"];
	return `${strng.match(/\D+/) || ""}${String(Number(num_str) + 1).padStart(num_str[0].length, '0')}`
	// return incrementedString
}

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");