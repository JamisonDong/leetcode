Promise.prototype.allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let count = 0;
    const processResult = (res, index, status) => {
      arr[index] = { status: status, val: res };
      count++;
      if (count === promises.length) resolve(res);
    }
    promises.forEach((item, index) => {
      Promise.resolve(item).then(res => {
        processResult(res, index, 'fulfilled');
      }, err => {
        processResult(err, index, 'rejected');
      })
    })
  })
}