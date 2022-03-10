/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = []
  function transformChessBoard(chessBoard) {
    let chessBoardBack = []
    chessBoard.forEach(row => {
      let rowStr = ''
      row.forEach(value => {
        rowStr += value
      })
      chessBoardBack.push(rowStr)
    })
    return chessBoardBack
  }
  function backtracking(row, chessboard) {
    if (row === n) {
      res.push(transformChessBoard(chessboard))
      return
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessboard, n)) {
        chessboard[row][col] = 'Q'
        backtracking(row + 1, chessboard)
        chessboard[row][col] = '.'
      }
    }
  }
  function isValid(row, col, chessboard, n) {
    // 检查列
    for (let i = 0; i < row; i++) {
      if (chessboard[i][col] === 'Q') {
        return false
      }
    }
    // 检查45°角是否有皇后
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessboard[i][j] === 'Q') {
        return false
      }
    }
    // 检查135°角是否有皇后
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessboard[i][j] === 'Q') {
        return false
      }
    }
    return true
  }
  let chessboard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  backtracking(0, chessboard)
  return res
};
const n = 4
console.log(solveNQueens(n));