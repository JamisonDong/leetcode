let map = new Map();
const dfs = (n, m, k) => {
  if (map.has({ n, m, k })) {
    return map.get({ n, m, k });
  }
  if (k <= 1) {
    return 0;
  }
  let ans = Number.MAX_VALUE;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < k; j++) {
      ans = Math.min(ans, m * m + dfs(i, m, j) + dfs(n - i, m, k - j));
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < k; j++) {
      ans = Math.min(ans, n * n + dfs(n, i, j) + dfs(n, m - i, k - j));
    }
  }
  map.set({ n, m, k }, ans);
  map.set({ n, n, k }, ans);

  return ans;
};
console.log(dfs(3, 4, 3));
