/**
 * @param {Array<number>} peopleInLine 
 */
function tickets(peopleInLine) {
	let cash = [];
	for (let money of peopleInLine) {
		if (money === 25) cash.push(25);
		else if (money === 50 && cash.includes(25)) cash.splice(cash.lastIndexOf(25), 1, money); 
		else if (money === 100 && (cash.includes(50) && cash.includes(25))) cash.splice(cash.lastIndexOf(25), 2, money);
		else if (money === 100 && cash.filter(val => val === 25).length >= 3) cash.splice(0, 3, money);
		else return "NO";
		cash.sort();
	}
	return "YES";
}
