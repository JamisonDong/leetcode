const getMatrix = (n, m) => {
  let val = 0;
  let matrix = new Array(n).fill(0).map(() => new Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matrix[j][i] = val;
      val = (val + 1) % 10;
    }

  }
  return matrix;
}

const n = 4, m = 5;
console.log(getMatrix(n, m));