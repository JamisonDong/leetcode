function solve (a) {
  let len = a.length;
  for (let i = Math.floor(len / 2) + 1; i < len; i++) {
    let count = 0;
    for (let j = 0; j < len - i; j++) {
      if (a[i] === a[j]) {
        count++
      } else {
        if (len - j <= 2 * i) {
          break;
          count = 0;
        }
      }
      if (count === i) {
        return count * 2
      }
    }
  }
  return 0;
}

let a = 'ababc'
console.log(solve(a));