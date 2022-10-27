const sol = (arr, X, Y) => {

  let res = 0;
  let len = arr.length;
  for (let i = 0, j = 0; i < X; j += Y, i++) {
    res += arr[j]
  }
  const add = (index) => {
    let curSum = 0;
    for (let i = 0, j = index; i < X; j += Y, i++) {
      curSum += arr[j];
    }
    if (curSum) {
      return curSum
    } else {
      return -1;
    }
  }

  for (let i = 1; i <= len - X * Y + 1; i++) {
    const curSum = add(i);
    if (curSum > 0) {
      res = curSum < res ? curSum : res;
    }
  }
  return res;
}

const A = [4, 2, 5, 4, 3, 5, 1, 4, 2, 7];
const X = 3;
const Y = 2;
console.log((sol(A, X, Y)));