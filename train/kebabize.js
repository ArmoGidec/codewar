/**
 * @param {string} str 
 */
function kebabize(str) {
	return str.replace(/\d+/g, '').replace(/(\B[A-Z])/g, '-$1').toLowerCase();
}

console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');