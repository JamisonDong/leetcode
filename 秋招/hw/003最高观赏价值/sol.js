const sol = (p, r, v) => {
  let len = p.length;
  let sum = 0;
  let res = 0;
  let memo = new Array(len).fill(0)
  const backtracking = (index) => {
    for (let j = index; j >= 0; j--) {
      if (memo[j]) {
        if ((p[j] + r[j]) <= (p[index] + r[index])) {
          res = Math.max(res, sum)
        } else {
          continue;
        }
      } else {

      }
    }


    for (let i = index; i < len; i++) {
      // path.push(i);
      sum += v[index];
      memo[i] = true;
      backtracking(i + 1);
      // path.pop();
      sum -= v[index];
      memo[i] = false;
    }
  }
  backtracking(0);
  return res;
}

let p = [2, 3, 6, 5, 7];
let r = [1, 1, 3, 1, 1];
let v = [20, 20, 100, 70, 60];
console.log(sol(p, r, v));