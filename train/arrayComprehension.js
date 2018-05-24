function ArrayComprehension({generator, filters = [], transform = (a) => a}) {
    if (!generator) return [];
    let result;
    if (!/\.\./.test(generator)) {
        result = generator.replace(/ /g, '').split(',').filter(val => /\d+/.test(val)).map(Number);
    } else {
        result = parse(generator);
    }
    return filters.reduce((array, filter) => array.filter(filter), result).map(transform);
}

/**
 * @param {string} str 
 */
function parse(str) {
    let numbers = str.match(/\d+/g).map(Number);
    let step = numbers.length === 2 ? 1 : numbers[1] - numbers[0];
    let list = build(numbers, step);
    return list;
}

function build(numbers, step) {
    let b = compare(step);
    let list = [];
    for (let i = numbers[0], end = numbers[numbers.length - 1]; b(i, end); i += step) {
        list.push(i);
    }
    return list;
}

function compare(step) {
    if (step > 0) return (a, b) => a <= b;
    if (step < 0) return (a, b) => a >= b;
}

console.log(ArrayComprehension({}), []);
console.log(ArrayComprehension({
    generator: '    '
}), []);
console.log(ArrayComprehension({
    generator: '1,3..4'
}), [1, 3]);
console.log(ArrayComprehension({
    generator: '1,2..2'
}), [1, 2]);
console.log(ArrayComprehension({
    generator: '3,2..2'
}), [3, 2]);
console.log(ArrayComprehension({
    generator: '5..3'
}), []);