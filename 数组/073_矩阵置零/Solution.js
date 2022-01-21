/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 */
var setZeroes = function (matrix) {
    let len1 = matrix.length
    if (len1 === 0) return matrix
    let len2 = matrix[0].length
    const row = new Array(len1).fill(false);
    const col = new Array(len2).fill(false);
    for(let i =0;i<len1;i++){
        for(let j = 0;j<len2;j++){
            if(matrix[i][j]===0){
                row[i]=col[j]=true
            }
        }
    }
    for(let i =0;i<len1;i++){
        for(let j = 0;j<len2;j++){
            if(row[i]||col[j]){
                matrix[i][j]=0
            }
        }
    }
    return matrix
};

var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false, flagRow0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
    }
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            flagRow0 = true;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (flagCol0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;

        }
    }
    if (flagRow0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    return matrix
};

var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }
    return matrix
};




var matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
console.log(setZeroes(matrix));