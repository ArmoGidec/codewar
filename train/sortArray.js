/**
 * 
 * @param {Array<number>} array 
 */
function sortArray(array) {
	for (let i = 0, len = array.length; i < len - 1; i++) {
		if (array[i] % 2 === 1) {
			for (let j = i + 1; j < len; j++) {
				if (array[j] % 2 === 1 && array[i] > array[j]) {
					[array[i], array[j]] = [array[j], array[i]];
				}
			}
		}
	}
	return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
console.log(sortArray([]), [])