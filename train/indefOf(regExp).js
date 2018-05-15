String.prototype.indexOf = function (searchValue, fromIndex = 0) {
    if (this.slice(fromIndex).search(new RegExp(searchValue)) === -1) return -1;

    let regexp = new RegExp(searchValue, 'g');
    let res = regexp.exec(this);
    return res.index;
};

String.prototype.lastIndexOf = function (searchValue, fromIndex = this.length) {
    let index = -1; 
    while ((exec=this.indexOf(searchValue, index + 1)) !== -1 && exec <= fromIndex) {
        index = exec;
    }
    return index;
};

console.log("abcba".indexOf(/^c/, 2), 0);