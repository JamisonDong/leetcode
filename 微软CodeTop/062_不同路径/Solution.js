/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// const uniquePaths = function (m, n) {
//   const paths = new Array(m).fill(0).map(() => {
//     return new Array(n).fill(0)
//   })
//   for (let i = 0; i < m; i++) {
//     paths[i][0] = 1
//   }
//   for (let j = 0; j < n; j++) {
//     paths[0][j] = 1
//   }
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       paths[i][j] = paths[i - 1][j] + paths[i][j - 1]
//     }
//   }
//   console.log(paths);

//   return paths[m - 1][n - 1]
// };

// 组合数学
var uniquePaths = function (m, n) {
  let res = 1
  for (let x = n, y = 1; y < m; ++x, ++y) {
    res = Math.floor(res * x / y)
  }
  return res
}

const m = 3, n = 7
console.log(uniquePaths(m, n));

