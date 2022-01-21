/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。
 * 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。
 * 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。
 * 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
 */
var matrixReshape = function (mat, r, c) {
    let cur = r * c
    let len1 = mat.length
    let len2 = mat[0].length
    if (cur != len1 * len2) {
        return mat
    }
    const ans = new Array(r).fill(0).map(()=>new Array(c).fill(0))
    for(let x =0;x<len1*len2;x++){
        ans[Math.floor(x/c)][x%c] = mat[Math.floor(x/len2)][x%len2]
    }
    return ans
};


var matrixReshape = (mat, r, c) => {
    const newMat = [];
    // 将二维数组转化为一维数组
    for (let i = 0; i < mat.length; i++) {
        newMat.push(...mat[i]);
    }
    // 判断能否重塑成功
    if (r * c !== newMat.length) return mat;
    // 一共有r行
    for (let i = 0; i < r; i++) {
        const item = [];
        // 每行c个
        for (let j = 0; j < c; j++) {
            // 将c个元素从头部拿出，并放入暂存的item数组
            item.push(newMat.shift());
        }
        // 当前行收集完毕，推入新数组的尾部
        newMat.push(item);
    }
    return newMat;
};

var mat = [[1, 2], [3, 4]], r = 1, c = 4
console.log(matrixReshape(mat, r, c));