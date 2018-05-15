/**
 * @param {string} s1 
 * @param {string} s2 
 */
const mix = (s1, s2) => [...Set.union(new Set(s1.match(/[a-z]/g)), new Set(s2.match(/[a-z]/g)))]
		.filter(val => {
			let len1 = (s1.match(RegExp(val, 'g')) || []).length;
			let len2 = (s2.match(RegExp(val, 'g')) || []).length;			
			return Math.max(len1, len2) > 1;
		})
		.map(val => {
			let len1 = (s1.match(RegExp(val, 'g')) || []).length;
			let len2 = (s2.match(RegExp(val, 'g')) || []).length;

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