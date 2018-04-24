let maxSequence = function (arr) {
	let ans = 0
	let sum = 0;
	for (let element of arr) {
		if (sum + element > 0) {
			sum += element;
			if (sum > ans) ans = sum;
		} else if (sum + element < 0) {
			sum = 0;
		}
	}
	return ans;
}