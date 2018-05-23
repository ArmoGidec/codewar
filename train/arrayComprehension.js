function ArrayComprehension(options) {
    if (!options.generator) return [];
    if (!/\.\./.test(options.generator)){
        let res = options.generator.replace(/ /g, '').split(',').filter(val => /\d+/.test(val));
        return res;
    }
    let result = parse(options.generator);
    return result;
}

/**
 * @param {string} str 
 */
function parse(str) {
    let step = str[1] === '.' ? 1 : str[2] - str[0];
    let a = str.split(',');
    let list = build(a[0],a[a.length - 1], step);
    return list;
}

function build(first, compr, step) {
    let list = [Number(first)];
    let [start, end] = compr.match(/\d+/g).map(Number);

    return list;
}

console.log(ArrayComprehension({}), []);
console.log(ArrayComprehension({generator: '    '}), []);
console.log(ArrayComprehension({generator: '1,3..4'}), [1,3]);
console.log(ArrayComprehension({generator: '1,2..2'}), [1,2]);
console.log(ArrayComprehension({generator: '3,2..2'}), [3,2]);
console.log(ArrayComprehension({generator: '5..3'}), []);