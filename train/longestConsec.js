/**
 * @param {Array<string>} strarr 
 * @param {number} k 
 */
function longestConsec(strarr, k) {
	let n = strarr.length
	if (n == 0 || k > n || k <= 0) return "";
	let res = [];
	for (let i = 0; i < k; i++) {
		let max = strarr.reduce((prev, cur) => cur.length > prev.length ? cur : prev, "");
		res.push(strarr.splice(strarr.indexOf(max), 1));
	}
	return res.join('');
}

console.log(1, longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
console.log(2, longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
console.log(3, longestConsec([], 3), "")
console.log(4, longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(5, longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(6, longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
console.log(7, longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
console.log(8, longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
console.log(9, longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")