/**
 * @param {Function} callback 
 */
Function.prototype.wrap = function (callback) {
	let original = this;
	return function(...args) {		
		return callback(original, ...args);
	}
};

function speak(name) {
	return "Hello " + name;
}

speak = speak.wrap(function (original, yourName, myName) {
	let greeting = original(yourName);
	return greeting + ", my name is " + myName;
})

let greeting = speak("Mary", "Kate");
console.log(greeting);
