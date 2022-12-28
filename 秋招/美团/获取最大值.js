const getMax = (arr) => {
  let min = arr[0];
  let max = arr[1];
  if (max < min) {
    let temp = max;
    min = max;
    max = temp;
  }

  let res = max - min;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      res = Math.max(max - min, res);
    } else if (arr[i] < min) {
      min = arr[i];
    }

  }

  return res;
};

let arr = [1, 2, 2, 13, 43, 25, 4, 36, 4, 3];
console.log(getMax(arr));