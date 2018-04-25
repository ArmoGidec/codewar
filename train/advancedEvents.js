function Event() {
	this.subscribes = [];
	return this;
}

Event.prototype.subscribe = function(...funcs) {
	for (let func of funcs) this.subscribes.push(func);
}

Event.prototype.emit = function(arg) {
	this.subscribes.forEach(func => func(arg));
}

Event.prototype.unsubscribe = function(...funcs) {
	for (let func of funcs) this.subscribes.splice(this.subscribes.indexOf(func), 1);
}

function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }

var e = new Event(),
    bucket = [];

e.subscribe(l, o, l);
e.emit(bucket);

//bucket should be ['l', 'o', 'l']
console.log(bucket, ['l', 'o', 'l']); 

e.unsubscribe(o, l);
bucket = [];

e.emit(bucket); //bucket should be ['l']

console.log(bucket, ['l']); 

