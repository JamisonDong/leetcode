/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let num = n * n;
  let left = 0,
    top = 0,
    right = n - 1,
    bottom = n - 1;
  let res = new Array(n).fill(0).map(() => new Array(n));
  let cur = 1;
  while (true) {
    for (let i = left; i <= right; i++) {
      res[top][i] = cur++;
    }
    top++;
    if (cur > num) break;

    for (let i = top; i <= bottom; i++) {
      res[i][right] = cur++;
    }
    right--;
    if (cur > num) break;

    for (let i = right; i >= left; i--) {
      res[bottom][i] = cur++;
    }
    bottom--;
    if (cur > num) break;

    for (let i = bottom; i >= top; i--) {
      res[i][left] = cur++;
    }
    left++;
    if (cur > num) break;
  }
  return res;
};

const n = 3;
console.log(generateMatrix(n));
