function spinningRings(i, o) {
    if (!(i && o)) return Math.max(i, o) + 1;
    if (i === 1) return 1;
    // if (i % 2 === 1) {   
    //     return (i + 1) / 2 + Math.floor(i / o / 2) * (Math.floor(o / 2) + 1);
    // }
    if (i === o) return (i + 1) / (i % 2 + 1)
    let x = 1;
    while (i - (x - 1) % (i + 1) - x % (o + 1)) {
        x++
    }
    return x;
};

console.log(spinningRings(1, 7), spinningRings(1, 5));
console.log(spinningRings(3, 7), spinningRings(3, 5));
console.log(spinningRings(5, 7), spinningRings(5, 5));
console.log(spinningRings(7, 7), spinningRings(7, 5));
console.log(spinningRings(9, 7), spinningRings(9, 5));
console.log(spinningRings(11, 7), spinningRings(11, 5));
console.log(spinningRings(13, 7), spinningRings(13, 5));
console.log(spinningRings(15, 7), spinningRings(15, 5));
console.log(spinningRings(17, 7), spinningRings(17, 5));
console.log(spinningRings(19, 7), spinningRings(19, 5));
console.log(spinningRings(21, 7), spinningRings(21, 5));
console.log(spinningRings(23, 7), spinningRings(23, 5));
console.log(spinningRings(25, 7), spinningRings(25, 5));
console.log(spinningRings(27, 7), spinningRings(27, 5));
console.log(spinningRings(29, 7), spinningRings(29, 5));
console.log(spinningRings(31, 7), spinningRings(31, 5));
console.log(spinningRings(33, 7), spinningRings(33, 5));
console.log(spinningRings(35, 7), spinningRings(35, 5));
console.log(spinningRings(37, 7), spinningRings(37, 5));
console.log(spinningRings(39, 7), spinningRings(39, 5));
console.log(spinningRings(41, 7), spinningRings(41, 5));


console.log(spinningRings(1, 7), spinningRings(1, 8));
console.log(spinningRings(3, 7), spinningRings(3, 8));
console.log(spinningRings(5, 7), spinningRings(5, 8));
console.log(spinningRings(7, 7), spinningRings(7, 8));
console.log(spinningRings(9, 7), spinningRings(9, 8));
console.log(spinningRings(11, 7), spinningRings(11, 8));
console.log(spinningRings(13, 7), spinningRings(13, 8));
console.log(spinningRings(15, 7), spinningRings(15, 8));
console.log(spinningRings(17, 7), spinningRings(17, 8));
console.log(spinningRings(19, 7), spinningRings(19, 8));
console.log(spinningRings(21, 7), spinningRings(21, 8));
console.log(spinningRings(23, 7), spinningRings(23, 8));
console.log(spinningRings(25, 7), spinningRings(25, 8));
console.log(spinningRings(27, 7), spinningRings(27, 8));
console.log(spinningRings(29, 7), spinningRings(29, 8));
console.log(spinningRings(31, 7), spinningRings(31, 8));
console.log(spinningRings(33, 7), spinningRings(33, 8));
console.log(spinningRings(35, 7), spinningRings(35, 8));
console.log(spinningRings(37, 7), spinningRings(37, 8));
console.log(spinningRings(39, 7), spinningRings(39, 8));
console.log(spinningRings(41, 7), spinningRings(41, 8));


// console.log(spinningRings(6593, 1369), 5352);
// console.log(spinningRings(2 ** 24, 3 ** 15));

/*
x = 0.5 * ((i + 1) * (q1 + 1) + q2 * (o + 1));
*/