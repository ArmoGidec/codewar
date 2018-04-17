/**
 * 
 * @param {string} s 
 */
function getMiddle(s) {
    let mid = s.length / 2;
    return mid % Math.floor(mid) === 0 ? s[mid - 1] + s[mid] : s[Math.floor(mid)];
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");