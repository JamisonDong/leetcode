/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let eleNums = n * n;
  let res = new Array(n).fill(0).map(() => new Array(n));
  let left = 0, right = n - 1, bottom = n - 1, top = 0;
  let cur = 1;
  while (true) {
    for (let i = left; i <= right; i++) {
      res[top][i] = cur++;
    }
    top++;
    if (cur > eleNums) break;
    for (let i = top; i <= bottom; i++) {
      res[i][right] = cur++;
    }
    right--;
    if (cur > eleNums) break;
    for (let i = right; i >= left; i--) {
      res[bottom][i] = cur++;
    }
    bottom--;
    if (cur > eleNums) break;
    for (let i = bottom; i >= top; i--) {
      res[i][left] = cur++;
    }
    left++;
    if (cur > eleNums) break;
  }
  return res;
};
const n = 3;
console.log(generateMatrix(n));