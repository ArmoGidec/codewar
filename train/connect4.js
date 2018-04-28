function Connect4() {
    this.board = new Array(7);
    for (let i = 0; i < 7; i++) {
        this.board[i] = new Array(6).fill(null);
    }
    this.cur_player = 1;
};

Connect4.prototype.play = function (col) {
    if (this.win) return `Game has finished!`;
    if (isFullColumn(this.board[col])) return `Column full!`;
    this.board = move(this.board, col, this.cur_player);
    if (checkBoard(this.board)) {
        this.win = true;
        return `Player ${this.cur_player} wins!`;
    }
    this.cur_player = this.cur_player === 1 ? 2 : 1;
    return `Player ${this.cur_player === 1 ? 2 : 1} has a turn`;
};

function checkBoard(board) {
    let check = b => b.some(r => r.reduce((p, c) => p = c !== null ? [c,++p] : [c, 0], [r[0], 0])[1] >= 4);

    let diag = b => {
        for (let i = 0; i < 4; i++) {
            let bb = b.slice(i, i + 4);
            let j = 0;
            if (bb.every(l => l.length > j) && !!bb.reduce((p, c) => p === c[j++] ? p : NaN)) return true;
        }
        return false;
    }

    let transpose = a => a[0].map((_, r) => a.map(c => c[r]));

    let row = check(board);
    let col = check(transpose(board));

    let main_diag = diag(board);
    let sec_diag = diag(transpose(board));

    return row || col;
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

game = new Connect4();

console.log(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(0), "Player 2 has a turn", "Should return 'Player 2 has a turn'")

game = new Connect4();
console.log(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(0), "Player 1 wins!", "Should return 'Player 1 wins!'")

game = new Connect4();
console.log(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(4), "Column full!", "Should return 'Column full!'")

game = new Connect4();
console.log(game.play(1), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(2), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(2), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(3), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(3), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(4), "Player 1 wins!", "Should return 'Player 1 wins!'")
console.log(game.play(4), "Game has finished!", "Should return 'Game has finished!'")