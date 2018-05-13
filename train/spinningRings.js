function spinningRings(i, o) {
    if (!(i && o)) return Math.max(i, o) + 1;
    if (i === 1) return 1;
    if (i % 2 === 1) {
        // return (i + 1) / 2 + Math.floor(i / o / 2) * (Math.floor(o / 2) + 1);
        // return (i + 1) / 2;
    }
    if (i === o) return (i + 1) / (i % 2 + 1)
    let x = 1;
    while (i - (x - 1) % (i + 1) - x % (o + 1)) {
        x++
    }
    return x;
};

/*
x = 0.5 * ((i + 1) * (q1 + 1) + q2 * (o + 1));
*/

/*
! Failed
*/