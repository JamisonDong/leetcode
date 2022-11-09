Promise.prototype.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let count = 0;
    promises.forEach((item, i) => {
      Promise.resolve(item).then(resolve, err => {
        arr[i] = { status: 'rejected', val: err };
        count++;
        if (count === promises.length) {
          reject(new Error('no promise success'))
        }
      })
    })
  })

}