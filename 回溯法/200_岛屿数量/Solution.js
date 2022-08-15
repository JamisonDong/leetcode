/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const h = grid.length;
  const w = grid[0].length;
  const dfs = (grid, r, c) => {
    if (!isArea(grid, r, c)) {
      return;
    }
    if (grid[r][c] !== '1') {
      return;
    }
    grid[r][c] = '2';
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
  };

  const isArea = (grid, r, c) => {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
  };

  let res = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        res++;
      }
    }
  }
  return res;
};

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(grid));
