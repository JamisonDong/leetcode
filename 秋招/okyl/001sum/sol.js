function sum () {
  const args = [...arguments];
  let res = 0;
  for (let i of args) {
    if (typeof i === 'number') {
      res += i;
    }
  }
  if (String(res).indexOf('.') > -1) {
    return res.toFixed(1);
  }
  return res
}
console.log(sum(0.1, 0.2))