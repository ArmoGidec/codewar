function zero() {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`0${arguments[0]}`);
}

function one() {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`1${arguments[0]}`);
}

function two(params) {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`2${arguments[0]}`);
}

function three() {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`3${arguments[0]}`);
}
function four() {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`4${arguments[0]}`);
}
function five() {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`5${arguments[0]}`);
}
function six() {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`6${arguments[0]}`);
}
function seven() {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`7${arguments[0]}`);
}
function eight() {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`8${arguments[0]}`);
}
function nine() {
	if (arguments.length === 0) {
		arguments[0] = '';
	}
	return eval(`9${arguments[0]}`);
}

function plus(n) {	
	return `+${n}`;
}

function minus(n) {
	return `-${n}`;
}
function times(n) {
	return `*${n}`;
}
function dividedBy(n) {
	return `/${n}`;
}