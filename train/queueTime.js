function queueTime(customers, n) {
	let time = 0;
	let queues = new Array(n).fill(0);
	for (let i = 0, len = customers.length; i < len; i++) {
		
	}
	return time;
}

console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);