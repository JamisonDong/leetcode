function permuteUnique (num) {
  let res = [];
  let path = [];
  num.sort((a, b) => { return a - b })
  const backtracking = (len, used) => {
    if (path.length === len) {
      res.push([...path])
    }
    for (let i = 0; i < len; i++) {
      if (i > 0 && used[i - 1] === false && num[i] === num[i - 1]) continue;
      if (used[i] === false) {
        used[i] = true
        path.push(num[i]);
        backtracking(len, used);
        path.pop(); used[i] = false;
      }
    }
  }
  const len = num.length;
  backtracking(len, new Array(len).fill(false));
  return res;
}

let num = [1, 2, 3];
console.log(permuteUnique(num));