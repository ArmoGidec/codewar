/**
 * @param {number} nmax 
 * @param {number} maxsm 
 */
function maxSumDig(nmax, maxsm) {
    let arr = [];
    let sum = 0;
    for (let i = 1000; i <= nmax; i++) {
        let consecs = getConsecs(i);
        if (consecs.every(digs => digs.reduce((p, c) => p + c) <= maxsm)) {
            arr.push(i);
            sum += i;
        }
    }

    let nearest = getNearest(sum / arr.length, arr)

    return [arr.length, nearest, sum];
}

/**
 * @param {number} num 
 */
function getConsecs(num) {
    let a = num.toString().split('').map(Number);
    let res = [];
    for (let i = 0, len = a.length - 3; i< len; i++) {
        res.push(a.slice(i, i + 4));
    }
    return res;
}

function getNearest(mid, arr) {
    let diff = mid;
    let val = arr[0];
    for (let el of arr) {
        if (Math.abs(el - mid) < diff) {
            diff = Math.abs((val = el) - mid);
        } else return val;
    }
}