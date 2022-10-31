const sol = (a, b) => {

  let aLen = getLen(a);
  let bLen = getLen(b);

  let res = 0;
  for (let i = aLen - 1; i > 0; i--) {
    const m = delN(a, i);
    res = 1
    for (let j = bLen - 1; j > 0; j--) {
      const n = b;
      if (isBei(m, b)) {
        return res;
      } else {
        const n = delN(b, j);
        if (isBei(m, n)) {
          return res++;
        }
      }
    }
  }




}

const isBei = (a, b) => {
  if (a < b) {
    return isBei(b, a);
  }
  if (Math.floor(a % b) === 0) {
    return true;
  }
  return false;
}
const getLen = (x) => {
  let res = 0;
  while (x) {
    res++;
    x = Math.floor(x / 10)
  }
  return res;
}
const delN = (x, index) => {
  let str = x.toString();
  let newStr = str.slice(0, index) + str.slice(index + 1)
  return Number(newStr);
}

console.log(sol(1234, 99));