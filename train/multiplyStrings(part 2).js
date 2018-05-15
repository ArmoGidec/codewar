const addPoint = (p, val) => {
    let res = '';
    val = val.split('').reverse();
    for (var i = 0; i < p; i++) {
        res += val[i] || '0';
    }
    res += '.';
    do {
        res += val[i] || '0';
    } while (++i < val.length);
    return res.split('').reverse().join('');
};

/**
 * @param {string} val 
 */
const trim = (val) => {
    let [div, mod] = val.split('.');
    mod = (mod || '').split('');
    while (mod[mod.length - 1] === '0') mod.length -= 1;
    return `${div}${mod.join('') ? '.' + mod.join('') : ''}`;
};

function multiplyCeil(a, b) {
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

    return c.reverse().join('') || '0';
}

/**
 * @param {string} n 
 * @param {string} o 
 */
function multiply(n, o) {
    let a = {
        sign: n[0] === '-' ? -1 : 1,
        value: {
            div: n.replace('-', '').split('.')[0].split(''),
            mod: (n.split('.')[1] || '').split('')
        }
    };
    let b = {
        sign: o[0] === '-' ? -1 : 1,
        value: {
            div: o.replace('-', '').split('.')[0].split(''),
            mod: (o.split('.')[1] || '').split('')
        }
    };

    let point = a.value.mod.length + b.value.mod.length;

    let c = trim(addPoint(point, multiplyCeil(`${a.value.div.join('')}${a.value.mod.join('')}`, `${b.value.div.join('')}${b.value.mod.join('')}`))) || '0';
    return a.sign * b.sign === 1 ? c.toString() : c === '0' ? '0' : `-${c}`;
}