/**
 * @param {string} a 
 * @param {string} b 
 */
function multiply(a, b) {
    [a, b] = [a, b].map(val => val.split('').map(Number).reverse());
    let size_a = a.length,
        size_b = b.length;

    let c = new Array(size_a + size_b + 1).fill(0);
    for (let i = 0; i < size_a; i++) {
        for (let j = 0; j < size_b; j++) {
            c[i + j] += a[i] * b[j];
        }
    }

    while (c[c.length - 1] === 0) c.length -= 1;

    for (let i = 0, len = c.length; i < len - 1; i++) {
        c[i + 1] += Math.floor(c[i] / 10);
        c[i] %= 10;
    }

    return c.reverse().join('');
}

console.log(multiply("2", "3"), "6");
console.log(multiply("30", "69"), "2070");
console.log(multiply("11", "85"), "935");