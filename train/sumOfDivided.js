/**
 * @param {Array<number>} lst 
 */
function sumOfDivided(lst) {
    let primes = Array.from(lst.map(getPrimes).reduce((set, p) => new Set([...set, ...p]), new Set()))
        .sort()
        .map(val => [val, lst.filter(v => !(v % val)).reduce((acc, cur) => acc + cur)]);

    return primes;
}

const getPrimes = (num) => {
    let primes = [];
    let i = 2;
    while (Math.abs(num) > 1) {
        if ((num % i) === 0) {
            primes.push(i);
            num /= i;
        } else i += 1;
    }
    return primes;
};


console.log(sumOfDivided([12, 15]), [
    [2, 12],
    [3, 27],
    [5, 15]
]);
console.log(sumOfDivided([15, 21, 24, 30, 45]), [
    [2, 54],
    [3, 135],
    [5, 90],
    [7, 21]
]);