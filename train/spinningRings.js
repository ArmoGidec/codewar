function spinningRings(innerMax, outerMax) {
    let step = 0, inner, outer;
    do {
        inner = innerMax - (step % (innerMax + 1));
        outer = ++step % (outerMax + 1);
    } while (inner !== outer);
    return step;
};
