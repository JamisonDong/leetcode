/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = [];

    if (matrix === null || matrix.length === 0) return res;
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0,
        right = n - 1;
    let top = 0,
        bottom = m - 1;

    let eleNums = m * n;
    while (eleNums >= 1) {
        for (let i = left; i <= right && eleNums >= 1; i++) {
            res.push(matrix[top][i]);
            eleNums--;
        }
        top++;
        for (let i = top; i <= bottom && eleNums >= 1; i++) {
            res.push(matrix[i][right]);
            eleNums--;
        }
        right--;

        for (let i = right; i >= left && eleNums >= 1; i--) {
            res.push(matrix[bottom][i]);
            eleNums--;
        }
        bottom--;

        for (let i = bottom; i >= top && eleNums >= 1; i--) {
            res.push(matrix[i][left]);
            eleNums--;
        }
        left++;
    }
    return res;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix));
