function Event() {
	let subscribes = [];
	
	this.subscribe = function(...funcs) {
		for (let func of funcs) {
			if (typeof func === 'function')	subscribes.push(func);
		}
		return funcs.length;
	};

	this.emit = function(...args) {
		subscribes.forEach(func => func.call(this, ...args));
	};

	this.unsubscribe = function(...funcs) {
		for (let func of funcs) subscribes.splice(subscribes.lastIndexOf(func), 1);
		this.emit();
		return funcs.length;
	};

	return this;
}


function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }

var e = new Event(),
	bucket = [];

e.unsubscribe(l);
e.subscribe(l, o, l);
e.emit(bucket);

//bucket should be ['l', 'o', 'l']
console.log(bucket, ['l', 'o', 'l']); 

e.unsubscribe(o, l);
bucket = [];

e.emit(bucket); //bucket should be ['l']

console.log(bucket, ['l']); 

