class Event {
	constructor() {
		this.subscribers = new Set();
	}

	subscribe(func) {
		this.subscribers.add(func);
	}

	unsubscribe(func) {
		this.subscribers.delete(func);
	}

	emit(...args) {
		this.subscribers.forEach(s => s(...args));
	}
}

function Stub() {
	return function _stub() {
		_stub.args = Array.prototype.slice.call(arguments);
		_stub.calls = (_stub.calls || 0) + 1;
	}
}
//   describe('Simple Event test cases', function() {
// 	it ('an Event constructor function should be defined', function () {
// 	  console.log(typeof Event === 'function');
// 	});

var e = new Event(),
	f1 = new Stub(),
	f2 = new Stub(),
	f3 = new Stub();

// 	it('an event object object should have .subscribe, .unsubscribe and .emit methods', function () {
console.log(typeof e.subscribe === 'function');
console.log(typeof e.unsubscribe === 'function');
console.log(typeof e.emit === 'function');
// 	});

// 	it('an event object should emit values to subscribed handlers', function () {
e.subscribe(f1);
e.subscribe(f2);

e.emit(1, 2, 3, 'first', undefined, false);

console.log(f1.calls, 1, 'first handler calls');
console.log(f2.calls, 1, 'second handler calls');
console.log(f1.args, [1, 2, 3, 'first', undefined, false],
	'first handler arguments');
console.log(f2.args, [1, 2, 3, 'first', undefined, false],
	'second handler arguments');
// 	});

// 	it('an event object should not emit values to unsubscribed handlers', function () {
e.subscribe(f3);
e.unsubscribe(f2);

e.emit(2, 'second', true);
console.log(f1.calls, 2, 'previously subscribed handler calls');
console.log(f2.calls, 1, 'unsubscribed handler calls');
console.log(f3.calls, 1, 'newly subscribed handler calls');

e.subscribe(f2);
e.emit(3, 'third');

console.log(f2.calls, 2, 'unsubscribed handler calls after re-subscription and emit');
// 	});

//   });