var findLexSmallestString = function (s, a, b) {
  const add = (s, a) => {
    const arr = s.split("");
    for (let i = 1; i < arr.length; i += 2) {
      arr[i] = (arr[i] * 1 + a) % 10 + '';
    }
    return arr.join("");
  }
  const transfer = (s, b, n) => {
    return s.slice(n - b) + s.slice(0, n - b);
  }
  const n = s.length;
  const set = new Set();
  let res = s;
  const dfs = (s) => {
    if (set.has(s)) {
      return;
    }
    set.add(s);
    res = res < s ? res : s;
    dfs(add(s, a));
    dfs(transfer(s, b, n));
  }
  dfs(s);
  return res;
};

let s = '43987654', a = 7, b = 3
console.log(findLexSmallestString(s, a, b));