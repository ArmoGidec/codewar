let chain =
	`antelope eats grass
big-fish eats little-fish
bug eats leaves
bear eats big-fish
bear eats bug
bear eats chicken
bear eats cow
bear eats leaves
bear eats sheep
chicken eats bug
cow eats grass
fox eats chicken
fox eats sheep
giraffe eats leaves
lion eats antelope
lion eats cow
panda eats leaves
sheep eats grass`;

/**
 * @param {string} zoo 
 */
let whoEatsWho = function (zoo) {
	let animals = zoo.split(',');
	let res = [];
	for (let i = 0; i < animals.length; i++) {
		let eaten = false;
		let ln = null;
		if (animals[i - 1]) {
			[animals, eaten, ln] = tryEat(animals, i, i - 1);
			if (eaten) {
				res.push(ln);
				i -= 3;
			} 
		} 
		if (!eaten && animals[i + 1]) {
			[animals, eaten, ln] = tryEat(animals, i, i + 1);
			if (eaten) {
				res.push(ln);
				i -= 1;
			}
		}
	}
	return [zoo, ...res, ...animals];
}

function tryEat(animals, i, j) {
	let reg = new RegExp(`${animals[i]} eats ${animals[j]}`, 'g');
	let eaten = false;
	let ln = null;
	let lines = chain.match(reg);
	if (lines) {
		animals.splice(j, 1);
		eaten = true;
		ln = lines[0];
	}
	return [animals, eaten, ln];
}

var input = "fox,bug,chicken,grass,sheep";
var expected = [
	"fox,bug,chicken,grass,sheep",
	"chicken eats bug",
	"fox eats chicken",
	"sheep eats grass",
	"fox eats sheep",
	"fox"
];
console.log(whoEatsWho(input), expected);