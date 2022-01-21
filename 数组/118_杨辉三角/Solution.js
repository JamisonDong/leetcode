/**
 * @param {number} numRows
 * @return {number[][]}
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 */
var generate = function (numRows) {
    var ans = [[]]
    if (numRows <= 0) return ans
    if (numRows === 1) return [[1]]
    if (numRows >= 2) {
        ans[0] = [1]
        ans[1] = [1, 1]
        for (let i = 2; i < numRows; i++) {
            ans[i] = rowAns(ans[i - 1])
        }
        return ans
    }
    function rowAns(row) {
        let res = []
        res.unshift(1)
        for (let i = 0; i < row.length - 1; i++) {
            res.unshift(row[i] + row[i + 1])

        }
        res.unshift(1)
        return res
    }
};

var generate = function(numRows) {
    const ret = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
        }
        ret.push(row);
    }
    return ret;
};


var numRows = 5
console.log(generate(numRows));