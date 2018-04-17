/**
 * @param {Array<number>} numbers 
 */
function sumTwoSmallestNumbers(numbers) {
	let max_i = numbers.indexOf(Math.max(...numbers));
	let num1_i = numbers.reduce((prev, _, i) => numbers[i] < numbers[prev] ? i : prev, max_i);
	let num2_i = numbers.reduce((prev, _, i) => numbers[i] < numbers[prev] && i !== num1_i ? i : prev, max_i);
	return numbers[num1_i] + numbers[num2_i];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");
