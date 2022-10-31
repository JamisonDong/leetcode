const sol = (str) => {
  const len = str.length;
  if (len < 2) return 0;
  let res = 0;
  let i = 1;
  while (i < len - 1) {
    let isGoodE = goodE(i - 1, i, i + 1);
    if (isGoodE === 1) {
      i += 2;
    } else if (isGoodE === -1) {
      i += 2;
      res++;
    } else if (isGoodE === -2) {
      i += 2;
      res += 2;
    } else {
      i += 1
    }

  }
};

const goodE = (str, i, j, k) => {
  if (str[j] === 'e' && str[i] === 'r' && str[k] === 'd') {
    return 1;
  } else if (str[j] === 'e' && str[i] === 'd' && str[k] === 'r') {
    return 1;
  } else if (str[j] !== 'e' && str[i] === 'd' && str[k] === 'r') {
    return -1;
  } else if (str[j] !== 'e' && str[i] === 'r' && str[k] === 'd') {
    return -1;
  } else if (str[j] === 'e' && str[i] === 'd' && str[k] !== 'r') {
    return -1;
  } else if (str[j] === 'e' && str[i] !== 'd' && str[k] === 'r') {
    return -1;
  } else {
    return -2
  }
}
