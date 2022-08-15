/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  let n = grid.length;
  const area = [];
  const isArea = (grid, r, c) => {
    return r >= 0 && r < grid.length && c >= 0 && c < grid.length;
  };
  const dfs = (grid, i, j) => {
    if (!isArea(grid, i, j)) {
      return 0;
    }
    if (grid[i][j] !== 1) {
      return 0;
    }
    grid[i][j] = area.length + 2;

    return (
      1 +
      dfs(grid, i - 1, j) +
      dfs(grid, i, j + 1) +
      dfs(grid, i + 1, j) +
      dfs(grid, i, j - 1)
    );
  };
  const waterDfs = (grid, i, j) => {
    if (!isArea(grid, i, j)) {
      return 0;
    }
    if (grid[i][j] !== 0) {
      return 0;
    }
    let res = 1;
    let index1 = 0,
      index2 = 0,
      index3 = 0;
    if (isArea(grid, i + 1, j)) {
      index1 = grid[i + 1][j];
      const bottom = area[grid[i + 1][j] - 2];
      res += bottom;
    }
    if (isArea(grid, i - 1, j)) {
      index2 = grid[i - 1][j];
      if (index1 != index2) {
        const top = area[grid[i - 1][j] - 2];
        res += top;
      }
    }
    if (isArea(grid, i, j - 1)) {
      index3 = grid[i][j - 1];
      if (index1 != index2 && index2 != index3) {
        const left = area[grid[i][j - 1] - 2];
        res += left;
      }
    }
    if (isArea(grid, i, j + 1)) {
      const index4 = grid[i][j + 1];
      if (index4 != index3 && index4 != index2 && index4 != index1) {
        const right = area[grid[i][j + 1] - 2];
        res += right;
      }
    }
    return res;
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const curRes = dfs(grid, i, j);
        area.push(curRes);
      }
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        res = Math.max(waterDfs(grid, i, j), res);
      }
    }
  }
  return res === 0 ? grid.length * grid.length : res;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var largestIsland = function(grid) {
  let max = 0
  const maxObj = {}
  let flag = 2 // 标记已遍历过的岛屿，该值同时与 maxObj 相对应

  // 找到每座岛屿的面积
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        const curMax = getMax(grid, row, col, flag)
        // max 暂时取最大的岛屿面积
        max = Math.max(curMax, max)

        maxObj[flag] = {
          isUse: false, // 后续累计时判断该值是否已使用
          val: curMax
        }
        flag++
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 0) {
        // 当前【0】作为人工岛，计算连接【上右下左】岛屿时的总面积
        const curMax = 1 + dfs(grid, row - 1, col, maxObj)
                         + dfs(grid, row, col + 1, maxObj)
                         + dfs(grid, row + 1, col, maxObj)
                         + dfs(grid, row, col - 1, maxObj)

        max = Math.max(curMax, max)

        // 重置已使用字段，因为一座岛有可能会被重复引用
        resetMaxObj(maxObj, row, grid.length, col, grid[0].length, grid)
      }
    }
  }

  return max
};

// 查找岛屿面积
var dfs = function(grid, row, col, maxObj) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
    return 0
  }

  const cur = grid[row][col] + ''

  if (maxObj[cur] && !maxObj[cur].isUse) {
    maxObj[cur].isUse = true
    return maxObj[cur].val
  } else {
    return 0
  }
}

// 计算岛屿面积
var getMax = function(grid, row, col, flag) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
    return 0
  }

  if (grid[row][col] === flag || grid[row][col] === 0) {
    return 0
  }

  grid[row][col] = flag // 标记已遍历过的岛屿，该值同时与 maxObj 相对应

  return 1 + getMax(grid, row - 1, col, flag)
           + getMax(grid, row, col + 1, flag)
           + getMax(grid, row + 1, col, flag)
           + getMax(grid, row, col - 1, flag)
}

// 重置已使用字段，因为一座岛有可能会被重复引用
var resetMaxObj = function(maxObj, row, rowMax, col, colMax, grid) {
  if (row < 0 || col < 0 || row >= rowMax || col >= colMax) {
    return false
  }

  const top = row - 1 >= 0 ? grid[row - 1][col] + '' : '-1'
  const right = col + 1 < colMax ? grid[row][col + 1] + '' : '-1'
  const bottom = row + 1 < rowMax ? grid[row + 1][col] + '' : '-1'
  const left = col - 1 >= 0 ? grid[row][col - 1] + '' : '-1'

  maxObj[top] && (maxObj[top].isUse = false)
  maxObj[right] && (maxObj[right].isUse = false)
  maxObj[bottom] && (maxObj[bottom].isUse = false)
  maxObj[left] && (maxObj[left].isUse = false)
}


const grid = [
  [1, 1],
  [1, 1],
];
console.log(largestIsland(grid));
