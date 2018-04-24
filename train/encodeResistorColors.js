const COLORS = { 0: "black", 1: "brown", 2: "red", 3: "orange", 4: "yellow", 5: "green", 6: "blue", 7: "violet", 8: "gray", 9: "white" };
/**
 * @param {string} ohmsString 
 */
function encodeResistorColors(ohmsString) {
	let ohms = parseOhms(ohmsString);
	let colors = getColors(ohms);
	return colors.join(' ');
}

function getColors(ohms) {
	ohms = String(ohms).split('');
	let fstColor = ohms.splice(0, 1);
	let sndColor = ohms.splice(0, 1);
	let trdColor = ohms.length;
	return [COLORS[fstColor], COLORS[sndColor], COLORS[trdColor], "gold"];
}

function parseOhms(ohmsString) {
	let ohms = ohmsString.split(' ')[0];
	let num = ohms.match(/[0-9\.]+/g)[0];
	if (/k/.test(ohms)) num *= Math.pow(10, 3);
	else if (/M/.test(ohms)) num *= Math.pow(10, 6);
	return num;
}

console.log(encodeResistorColors("10 ohms"), "brown black black gold")
console.log(encodeResistorColors("47 ohms"), "yellow violet black gold")
console.log(encodeResistorColors("100 ohms"), "brown black brown gold")
console.log(encodeResistorColors("220 ohms"), "red red brown gold")
console.log(encodeResistorColors("330 ohms"), "orange orange brown gold")
console.log(encodeResistorColors("470 ohms"), "yellow violet brown gold")
console.log(encodeResistorColors("680 ohms"), "blue gray brown gold")
console.log(encodeResistorColors("1k ohms"), "brown black red gold")
console.log(encodeResistorColors("4.7k ohms"), "yellow violet red gold")
console.log(encodeResistorColors("10k ohms"), "brown black orange gold")
console.log(encodeResistorColors("22k ohms"), "red red orange gold")
console.log(encodeResistorColors("47k ohms"), "yellow violet orange gold")
console.log(encodeResistorColors("100k ohms"), "brown black yellow gold")
console.log(encodeResistorColors("330k ohms"), "orange orange yellow gold")
console.log(encodeResistorColors("1M ohms"), "brown black green gold")
console.log(encodeResistorColors("2M ohms"), "red black green gold")