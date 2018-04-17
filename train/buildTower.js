function towerBuilder(nFloors) {
    let a = new Array(nFloors);
    const LINE_LEN = (nFloors - 1) * 2 + 1;
    for (let i = 0; i < nFloors; i++) {
        let line = '*';
        line = line.padStart(2*i+1, '*');
        line = line.padStart(nFloors+i);
        line = line.padEnd(LINE_LEN);
        a[i] = line;
    }
    return a;
}


console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);
console.log(towerBuilder(4), ["   *   ", "  ***  ", " ***** ", "*******"]);