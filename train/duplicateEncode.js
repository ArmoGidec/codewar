function duplicateEncode(word) {
    let s = new Set(word);
    let dict = {};
    s.forEach(char => {
        let re = new RegExp(`[${char}]`, 'gi');
        dict[char] = word.match(re).length;
    });
    return word.split('').map(char => {
        return dict[char] === 1 ? '(' : ')';
    }).join('');
}


console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"),"))((");

