let dirs = {
	"NORTH": "SOUTH",
	"SOUTH": "NORTH",
	"WEST": "EAST",
	"EAST": "WEST"
}


/**
 * 
 * @param {Array<string>} arr 
 */
function dirReduc(arr) {
	let a = [];
	for (let dir of arr) {
		let el = a[a.length - 1] || "";
		if (el === dirs[dir]) a.pop();
		else a.push(dir);
	}
	return a;
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);
