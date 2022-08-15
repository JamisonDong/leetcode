/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board === null || board.length === 0) return;
  const h = board.length;
  const w = board[0].length;
  const dfs = (board, i, j) => {
    if (i < 0 || i >= h || j < 0 || j >= w || board[i][j] !== 'O') {
      return;
    }
    board[i][j] = '#';
    dfs(board, i, j - 1);
    dfs(board, i + 1, j);
    dfs(board, i, j + 1);
    dfs(board, i - 1, j);
  };
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const isEdge = i === 0 || j === 0 || i === h - 1 || j === w - 1;
      if (isEdge && board[i][j] === 'O') {
        dfs(board, i, j);
      }
    }
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === '#') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }

  return board;
};

const board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];
console.log(solve(board));
