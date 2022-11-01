const getList = (arr) => {
  let res = [];
  let path = [];
  let sum = 0;

  const backtracking = (index) => {
    if (path.length >= 2 && !(sum % 2)) {
      res.push([...path]);
    }

    for (let i = index; i < arr.length; i++) {
      if (path.length > 0 && arr[i] < path[path.length - 1]) {
        continue;
      } else {
        path.push(arr[i]);
        sum += arr[i];
        backtracking(i + 1);
        sum -= arr[i];
        path.pop();
      }
    }
  }

  backtracking(0);
  return res;
}


const arr = [2, 1, 4, 3];
console.log(getList(arr));