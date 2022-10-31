// dp
// dp[0] dp[1]
// w[0] w[1]
// 背包问题
const getHappy = (n, x, arr) => {
  let res = [];
  let path = [];
  let cur = 0
  const backtracking = (index) => {
    if (cur < x) {
      path.push(matrix[index])
    } else {
      return -1;
    }
  }
}
let n = 2, x = 6;
let arr = [
  [2, 10],
  [1, 7],
  [6, 17],
  [4, 11]
]
console.log(getHappy(n, x, arr));