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
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0))
    const subboxes = new Array(9).fill(0).map(() => new Array(9).fill(0).map(() => new Array(9).fill(0)))

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j];
            if (c !== '.') {
                const index = c.charCodeAt() - '0'.charCodeAt() - 1;
                rows[i][index]++;
                columns[j][index]++;
                subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
                if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                    return false;
                }
            }
        }
    }
    return true;

};

var isValidSudoku = function (board) {

    let map = new Map();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const l = Math.floor(i / 3),
                r = Math.floor(j / 3);
            if (!map.has(`i${i}`))
                map.set(`i${i}`, []);
            if (!map.has(`j${j}`))
                map.set(`j${j}`, [])
            if (!map.has(`${l}${r}`))
                map.set(`${l}${r}`, []);
            if (!isNaN(Number(board[i][j]))) {
                const num = Number(board[i][j]);
                if (map.get(`${l}${r}`).indexOf(board[i][j]) < 0)
                    map.set(`${l}${r}`, [...map.get(`${l}${r}`), board[i][j]]);
                else return false;
                if (map.get(`i${i}`).indexOf(board[i][j]) < 0)
                    map.set(`i${i}`, [...map.get(`i${i}`), board[i][j]]);
                else return false;
                if (map.get(`j${j}`).indexOf(board[i][j]) < 0)
                    map.set(`j${j}`, [...map.get(`j${j}`), board[i][j]]);
                else return false;
            }
        }
    }
    return true;

};


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