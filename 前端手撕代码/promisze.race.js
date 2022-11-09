Promise.prototype.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(resolve, reject);
    })
  }})
}