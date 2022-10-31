const getCounts = (str) => {
  let count = 0;
  let len = str.length;

  let i = 0, j = 1;
  while (j < len) {
    if (str[i] === str[j]) {
      while (str[i] === str[j] && j < len) {
        j++
      }
      if (j - i >= 4) {
        count += Math.floor((j - i) / 2) - 1

      } else {
        count++
      }
    } else {
      i = j;
      j++
    }
  }
  return count;
}

const str = 'rerededed';
console.log(getCounts(str));