function queueTime(customers, n) {
	let time = 0;
	let queues = new Array(n).fill(0);
	for (let customer of customers) {
		let min = Math.min(...queues);
		let i = queues.indexOf(min);
		queues = queues.map(value => value - min);
		time += min;
		queues[i] = customer;
	}
	time += Math.max(...queues);
	return time;
}

console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);