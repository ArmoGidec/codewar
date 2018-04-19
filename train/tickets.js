/**
 * @param {Array<number>} peopleInLine 
 */
function tickets(peopleInLine) {
	let cash = 0;
	for (let money of peopleInLine) {
		let change = money - 25;
		if (change > cash) return "NO";
		cash += 25;
	}
	return "YES";
}
