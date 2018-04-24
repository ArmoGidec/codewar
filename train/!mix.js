function mix(s1, s2) {
	let set1 = new Set(s1.match(/[a-z]/g));
	let set2 = new Set(s2.match(/[a-z]/g));
	let seq1 = {}, seq2 = {};
	set1.forEach((val) => seq1[val] = s1.match(RegExp(val, 'g')).length );
	set2.forEach((val) => seq2[val] = s2.match(RegExp(val, 'g')).length );
	
	return seq1;
}

console.log(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
console.log(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
console.log(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
console.log(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
console.log(mix("codewars", "codewars"), "")
console.log(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")