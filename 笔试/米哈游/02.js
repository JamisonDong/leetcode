// 连通块
const getDiff = (matrix, n, m, sameColor) => {
  let count = 0;
  let color;

  const vis = new Array(n).fill(false).map(() => new Array(m).fill(false));

  // dfs
  const dfs = (row, col) => {
    if (row < 0 || row >= n || col < 0 || col >= m || vis[row][col] || !sameColor(matrix[row][col], color)) {
      return;
    }
    vis[row][col] = true;
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);

  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!vis[i][j]) {
        color = matrix[i][j];
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
}


let n = 2, m = 6;
let matrix = [
  ['R', 'R', 'G', 'G', 'B', 'B'],
  ['R', 'G', 'B', 'G', 'R', 'R']
]
// 计算正常的联通
const norCount = getDiff(matrix, n, m, (c1, c2) => c1 === c2);
const yoCount = getDiff(matrix, n, m, (c1, c2) => c1 === c2 || (c1 === 'B' && c2 === 'G') || (c1 === 'G' && c2 === 'B'));
console.log(norCount - yoCount);
// 计算小游看到的