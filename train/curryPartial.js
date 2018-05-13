/**
 * @param {Function} fn 
 */
function curryPartial(fn, ...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...rest) => curryPartial(fn, ...args, ...rest);
}

function sum(a, b, c) {
    return a + b + c;
}

console.log(curryPartial(sum, 1)(2)(3));