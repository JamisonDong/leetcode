const getNumbers = (arr) => {

  let res = 0;
  let path = [];
  let sum = 0;
  const backtracking = (index) => {

    if (path.length === 2 && sum % 2 === 0) {
      res++;
    }
    if (path.length > 2) {
      if (isRight(path)) {
        res++;
        console.log(path);

      } else {
        return;
      }
    }
    for (let i = index; i < arr.length; i++) {
      path.push(arr[i]);
      sum += arr[i];
      backtracking(i + 1);
      path.pop(arr[i]);
      sum -= arr[i];
    }
  }
  backtracking(0);
  return res % 1000000007;
}

const isRight = (arr) => {
  let first = arr[0] % 2;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] % 2 !== first) {
      return false;
    }
  }
  return true;
}

const arr = [1, 2, 5, 2, 8, 2, 1];
console.log((getNumbers(arr)));