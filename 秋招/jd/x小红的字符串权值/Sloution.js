const getQz = (str) => {
  let res = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] !== str[i]) {
      res++;
    }
  }
  return res;
}

const str = 'abccaa';
console.log(getQz(str))