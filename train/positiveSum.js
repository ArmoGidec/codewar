/**
 * @param {Array<number>} arr 
 */
function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((prev, cur) => prev + cur, 0);
}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);