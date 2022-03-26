/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   if (n >= 2) {
//     return fib(n - 1) + fib(n - 2)
//   }
// };


var fib = function (n) {
  if (n <= 1) return n
  let dp = [0, 1]
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    let sum = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = sum
  }
  return dp[1]
};
const n = 4
console.log(fib(n));