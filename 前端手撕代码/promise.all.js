Promise.prototype.myall = function (promises) {
  let res = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        res[i] = res;
        count++;
        if (count === promises.length) resolve(res);
      }, reject);
    })
  })
}