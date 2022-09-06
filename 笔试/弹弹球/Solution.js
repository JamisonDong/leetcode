const getMaxScore = (nums, n, m) => {
  const dp = new Array(n + 1).fill([]).map(() => new Array(m + 1).fill(0));
  let maxScore = 0;
  for (let j = 0; j <= m; j++) {
    dp[n][j] = 0;
  }
  for (let j = 0; j <= n; j++) {
    dp[j][m] = 0;
  }

  for (let curx = n - 1; curx >= 0; curx--) {
    for (let cury = m - 1; cury >= 0; cury--) {
      if (nums[curx][cury] === -1) {
        let num1 = dp[curx + 1][cury + 1];
        num1 = dp[curx + 1][cury + 1];
        let num2 = 0;
        if (cury > 0) {
          num2 = dp[curx + 1][cury - 1];
        }
        dp[curx][cury] = Math.max(num1, num2);
      } else {
        dp[curx][cury] = nums[curx][cury] + dp[curx + 1][cury];
      }
    }
  }
  console.log(dp);

  for (let i = 0; i < m; i++) {
    maxScore = Math.max(dp[0][i], maxScore);
  }

  return maxScore;
};

const nums = [
  [-1, 0, -1],
  [0, -1, 0],
  [20, -1, 40],
  [100, 200, 70],
];
const m = 3,
  n = 4;
console.log(getMaxScore(nums, n, m));
