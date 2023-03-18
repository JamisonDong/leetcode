/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const m = rowSum.length;
  const n = colSum.length;
  let i = 0,
    j = 0,
    v = 0;
  const martix = new Array(m).fill(0).map(() => new Array(n).fill(0));
  while (i < m && j < n) {
    v = Math.min(rowSum[i], colSum[j]);
    martix[i][j] = v;
    rowSum[i] -= v;
    colSum[j] -= v;
    if (rowSum[i] === 0) {
      i++;
    }
    if (colSum[j] === 0) {
      j++;
    }
  }

  return martix;
};

const rowSum = [14, 9],
  colSum = [6, 9, 8];
console.log(restoreMatrix(rowSum, colSum));
