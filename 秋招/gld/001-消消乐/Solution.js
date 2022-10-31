const xxl = (str) => {
  if (str.length === 1) return 'No';
  let res = 0;

  const helper = (str, i, j) => {
    while (i >= 0 && j <= str.length) {
      if (str[i] !== str[j]) {
        return j;
      }
      i--;
      j++;
      res++;
    }
  }
  let i = 0;
  while (i < str.length - 1) {
    i = helper(str, i, i + 1);
  }

  if (res % 2 === 1) return 'Yes';
  return 'No';
}

let str = 'bacaaaa';
console.log(xxl(str));