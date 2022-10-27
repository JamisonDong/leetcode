const sol = (X, Y) => {

  let res = 0;
  let path = [];
  const backtracking = (index, newArr) => {
    if (path.length > 2) {
      console.log(path);
      return;
    }
    if (path.length === 2) {
      const sum = path.reduce((a, b) => a + b)
      if (sum === 1) {
        res++
      };
      return;
    }
    for (let i = index; i < newArr.length; i++) {
      path.push(newArr[i]);
      backtracking(i + 1, newArr);
      path.pop(newArr[i]);
    }
  }

  let len = X.length;
  let newArr = []
  for (let i = 0; i < len; i++) {
    newArr.push(X[i] / Y[i]);
  }
  backtracking(0, newArr);
  return res;
}

const X = [1, 2, 3, 1, 2, 12, 8, 4], Y = [5, 10, 15, 2, 4, 15, 10, 5];
console.log(sol(X, Y));