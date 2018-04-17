function sumDigPow(a, b) {
	let arr = [];
	for (let i = a; i <= b; i++) {
		let sum = String(i).split('').reduce((prev, cur, cur_i) => prev + Number(cur)**(cur_i+1), 0);

		if (sum === i) arr.push(i);
	}
	return arr;
}


console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 100), [89])
console.log(sumDigPow(90, 100), [])
console.log(sumDigPow(90, 150), [135])
console.log(sumDigPow(50, 150), [89, 135])
console.log(sumDigPow(10, 150), [89, 135])