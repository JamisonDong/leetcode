const getScore = (nums, m, n) => {
  const dp = new Array(n).fill([]).map(() => new Array(m).fill(0));
  for (let j = 0; j < m; j++) {
    dp[0][j] = nums[0][j] === -1 ? 0 : nums[0][j]
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let lt = 0;
      let rt = 0;
      let flag = 0;
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (nums[i - 1][j - 1] === -1) {
          lt = dp[i - 1][j - 1];
          flag = 1;
        }

      }
      if (i + 1 < n && j + 1 < m) {
        if (nums[i - 1][j - 1] === -1) {
          rt = dp[i + 1][j + 1];
          flag = 1;
        }
      }
      if ((nums[i - 1][j] === -1 || dp[i - 1][j] === '#') && !flag) {
        dp[i][j] = '#'
      } else {
        let maxtop = Math.max(lt, rt);
        if (maxtop > 0) {
          dp[i][j] = Math.max(maxtop, dp[i - 1][j]) + nums[i][j]
        } else {
          dp[i][j] = dp[i - 1][j] + nums[i][j]
        }
      }

    }
  }

  let res = 0;
  for (let i = n - 1, j = 0; j < m; j++) {
    if (dp[i][j] === '#') {
      continue;
    }
    res = Math.max(res, dp[i][j])
  }

  return res;
}

const nums = [
  [-1, 0, -1],
  [100, 0, 0],
  [0, 50, 70],
  [20, 20, 30],
  [-1, 20, 30],
  [20, 30, 100],
]
let n = 6, m = 3;
console.log(getScore(nums, m, n));