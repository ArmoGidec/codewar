let dirs = {
	'n': [0,1],
	's': [0, -1],
	'w': [-1, 0],
	'e': [1, 0]
};

/**
 * 
 * @param {Array<string>} walk 
 */
function isValidWalk(walk) {
	if (walk.length !== 10) return false;
	let position = walk.reduce(step, [0, 0]);
	return position.toString() === [0, 0].toString();
}


/**
 * 
 * @param {string} prev
 * @param {string} cur 
 */
function step(prev, cur) {
	let cur_pos = dirs[cur];
	return [prev[0] + cur_pos[0], prev[1] + cur_pos[1]];
}

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// console.log(!isValidWalk(['w']), 'should return false');
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
