function primeFactors(n) {
	let primes = [];
	for (let i = 2; n !== 1; i++) {
		let k = 0;
		while (n % i === 0) {
			k += 1;
			n /= i;
		}
		if (k !== 0) {
			let pow = k !== 1 ? `**${k}` : '';
			primes.push(`(${i}${pow})`);
		}
	}
	return primes.join('');
}

console.log(primeFactors(7775460), "(2**2)(3**3)(5)(7)(11**2)(17)")