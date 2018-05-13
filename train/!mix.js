/**
 * @param {string} s1 
 * @param {string} s2 
 */
const mix = (s1, s2) => [...Set.union(new Set(s1.match(/[a-z]/g)), new Set(s2.match(/[a-z]/g)))]
		.filter(val => {
			let len1 = (s1.match(RegExp(val, 'gi')) || []).length;
			let len2 = (s2.match(RegExp(val, 'gi')) || []).length;			
			return Math.max(len1, len2) > 1;
		})
		.map(val => {
			let len1 = (s1.match(RegExp(val, 'gi')) || []).length;
			let len2 = (s2.match(RegExp(val, 'gi')) || []).length;

			return len1 > len2 ? `1:${val.repeat(len1)}` : len2 > len1 ? `2:${val.repeat(len2)}` : `3:${val.repeat(len1)}`;
		})
		.sort((a, b) => {
			if (a.length < b.length) return 1;
			if (a.length > b.length) return -1;
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		})
		.join('/')
		.replace(/3/g, '=');

Set.union = (...sets) => sets.reduce((a, b) => new Set([...b].concat([...a])));

Set.intersect = (...sets) => sets.reduce(
	(a, b) => new Set([...b].filter(val => a.has(val)))
);

console.log(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr\n")

console.log(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
// console.log(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
// console.log(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
// console.log(mix("codewars", "codewars"), "")
// console.log(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")