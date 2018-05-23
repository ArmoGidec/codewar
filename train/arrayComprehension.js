function ArrayComprehension(options) {
    if (!options.generator) return [];
    if (!/\.\./.test(options.generator)){
        let res = options.generator.replace(/ /g, '').split(',').filter(val => /\d+/.test(val));
        return res;
    }
    let a = options.generator.split(',');
    return a;
}

console.log(ArrayComprehension({}), []);
console.log(ArrayComprehension({generator: '    '}), []);
console.log(ArrayComprehension({generator: '1,3..4'}), [1,3]);
console.log(ArrayComprehension({generator: '1,2..2'}), [1,2]);
console.log(ArrayComprehension({generator: '3,2..2'}), [3,2]);
console.log(ArrayComprehension({generator: '5..3'}), []);