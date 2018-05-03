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
    if (checkBoard(this.board, this.cur_player)) {
        this.win = true;
        return `Player ${this.cur_player} wins!`;
    }
    this.cur_player = this.cur_player === 1 ? 2 : 1;
    return `Player ${this.cur_player === 1 ? 2 : 1} has a turn`;
};

function checkBoard(board, player) {
    console.log(board);

    let fourInLine = (b) => b.some(line => line.reduce(({ val, max }, cur) => cur !== player ? { val: 0, max } : { val: val + 1, max: val + 1 > max ? val + 1 : max }, { val: 0, max: 0 }).max >= 4);

    let transpose = (b) => b[0].map((_, i) => b.map(r => r[i]));

    if (fourInLine(board)) return true;
    if (fourInLine(transpose(board))) return true;

    let diag = (b) => b.reduce((prev, cur, i) => cur[i] === player ? prev + 1 : prev); 

    for (let i = 0; i < 4; i++) {
        let bb = board.slice(i, i + 4);
        for (let j = 0; j < 3; j++) {
            b = bb.map(a => a.slice(j, j + 3));
            if (diag(b)) return true;
            if (diag(transpose(b))) return true;
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