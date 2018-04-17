/**
 * 
 * @param {Array<number>} numbers 
 */
function removeSmallest(numbers) {
	let min = Math.min(...numbers);
	let i = numbers.indexOf(min);
	numbers.splice(i, 1);
	return numbers;
}

