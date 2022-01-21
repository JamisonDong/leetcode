/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (!matrix.length) return false
    let x = matrix.length-1, y = 0
    while (x >= 0 && y < matrix[0].length) {
        if (matrix[x][y] === target) {
            return true
        } else if (matrix[x][y] > target) {
            x--
        } else {
            y++
        }
    }
    return false
};

var matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], target = 5
console.log(findNumberIn2DArray(matrix, target));