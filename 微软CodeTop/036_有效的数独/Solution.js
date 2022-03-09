/**
 * @param {character[][]} board
 * @return {boolean}
 * 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 */
 var isValidSudoku = function (board) {
    let row = new Array(9)
    let col = new Array(9)
    let box = new Array(9)
    for (let i = 0; i < 9; i++) {
        row[i] = new Array(9).fill(0)
        col[i] = new Array(9).fill(0)
        box[i] = new Array(9).fill(0)
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue
            const temp = board[i][j] - '1'
            if (row[i][temp] === 1) return false
            if (col[j][temp] === 1) return false
            if (box[Math.floor(j / 3) + Math.floor(i / 3) * 3][temp] === 1) return false

            row[i][temp] = 1
            col[j][temp] = 1
            box[Math.floor(j / 3) + Math.floor(i / 3) * 3][temp] = 1
        }
    }

    return true
}


var board =
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
console.log(isValidSudoku(board));