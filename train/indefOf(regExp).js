String.prototype.indexOf = function (searchValue, fromIndex = 0) {
    let str = this.slice(fromIndex);
    let regexp = new RegExp(searchValue);
    let index = (regexp.exec(str) || {index: -1}).index;
    return index + (index === -1 ? 0 : fromIndex);
};


// look at here
String.prototype.lastIndexOf = function (searchValue, fromIndex = 0) {
    let str = this.slice(fromIndex);
    let regexp = new RegExp(searchValue);
    regexp.test(str);
    return regexp.lastIndex;
};


console.log("abcba".lastIndexOf("b"), 3);

console.log("abcba".lastIndexOf(/bc|cb/), 2);
