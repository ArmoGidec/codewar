function Connect4() {
    this.board = new Array(7);
    for (let i = 0; i < 7; i++) {
        this.board[i] = new Array(6).fill(null);
    }
    this.cur_player = 1;
    this.count = 0;
};

Connect4.prototype.play = function (col) {
    if (this.win) return `Game has finished!`;
    if (isFullColumn(this.board[col])) return `Column full!`;
    this.board = move(this.board, col, this.cur_player);
    this.count += 1;
    if (this.count > 7 && checkBoard(this.board, this.cur_player)) {
        this.win = true;
        return `Player ${this.cur_player} wins!`;
    }
    this.cur_player = this.cur_player === 1 ? 2 : 1;
    return `Player ${this.cur_player === 1 ? 2 : 1} has a turn`;
};

function checkBoard(board, player) {
    let fourInLine = (b) => b.some(line => line.reduce(({ val, max }, cur) => cur !== player ? { val: 0, max } : { val: val + 1, max: val + 1 > max ? val + 1 : max }, { val: 0, max: 0 }).max >= 4);
    
    let turn = (b, len) => b[0].map((_, j) => b.map((__, i) => b[len - j - 1][i]));

    if (fourInLine(board)) return true;
    if (fourInLine(turn(board, board.length))) return true;

    let diag = (b) => b.reduce((prev, cur, i) => cur[i] === player ? prev + 1 : prev, 0) === 4; 

    for (let i = 0; i < 4; i++) {
        let bb = board.slice(i, i + 4);
        for (let j = 0; j < 3; j++) {
            let b = bb.map(a => a.slice(j, j + 4));
            if (diag(b)) return true;
            if (diag(turn(b, b.length))) return true;
        }
    }

    return false;
}

function isFullColumn(c) {
    return c.every(a => a !== null);
}

function move(board, col, player) {
    let line = board[col];
    line[line.indexOf(null)] = player;
    board[col] = line;
    return board;
}