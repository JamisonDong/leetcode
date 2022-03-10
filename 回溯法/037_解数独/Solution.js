/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  function backtracking(board) {
    for (let i = 0; i < board.length; i++) { //遍历行
      for (let j = 0; j < board[0].length; j++) { //遍历列
        if (board[i][j] !== '.') continue
        for (let k = 1; k <= 9; k++) { // (i, j) 这个位置放k是否合适
          if (isValid(i, j, `${k}`, board)) {
            board[i][j] = `${k}` // 放置k
            if (backtracking(board)) return true // 如果找到合适一组立刻返回
            board[i][j] = '.' // 回溯，撤销k
          }
        }
        return false // 9个数都试完了，都不行，那么就返回false
      }
    }
    return true // 遍历完没有返回false，说明找到了合适棋盘位置了
  }
  function isValid(row, col, val, board) {
    let len = board.length
    // 同行是否重复
    for (let i = 0; i < len; i++) {
      if (board[row][i] === val) {
        return false
      }
    }
    // 同列是否重复
    for (let j = 0; j < len; j++) {
      if (board[j][col] === val) {
        return false
      }
    }
    // 9宫格里是否重复
    let startRow = Math.floor(row / 3) * 3
    let startLol = Math.floor(col / 3) * 3
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startLol; j < startLol + 3; j++) {
        if (board[i][j] === val) {
          return false
        }
      }
    }
    return true
  }
  backtracking(board)
  return board
};

const board =
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]

console.log(solveSudoku(board));
