function generator(sequencer) {
	return gen = function() {
		
	}
}

function dummySeq() {
	return function () {
		return "dummy";
	};
}

let seq = generator(dummySeq);
console.log(seq.next());
