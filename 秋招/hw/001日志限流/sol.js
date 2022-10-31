const sol = (logs, total) => {
  let sum = logs.reduce((pre, cur) => pre + cur);
  if (sum <= total) return -1;
  let len = logs.length;
  logs.sort((a, b) => a - b);
  let index = len - 1;
  let size = 0;
  while (index) {
    size = logs[index];
    let sum1 = sum;
    for (let i = len - 1; i >= 0; i--) {
      if (logs[i] > size) {
        sum1 -= (logs[i] - size);
      } else {
        break;
      }
    }
    if (sum1 > total) {
      index--
    } else {
      break;
    }
  }
  while (1) {
    let sum2 = sum;
    size++;
    for (let i = len - 1; i >= 0; i--) {
      if (logs[i] > size) {
        sum2 -= (logs[i] - size);
      } else {
        break;
      }
    }
    if (sum2 > total) {
      return size - 1
    }
  }
}

let logs = [3, 3, 8, 7, 10, 15];
console.log(sol(logs, 40));