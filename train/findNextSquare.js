function findNextSquare(sq) {
	// Return the next square if sq if a perfect square, -1 otherwise
	let sqrt = Math.sqrt(sq);
	let res = sqrt === parseInt(sqrt) ? Math.pow(sqrt + 1, 2) : -1; 
	return res;
}