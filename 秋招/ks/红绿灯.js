let arr = ['red', 'yellow', 'green'];
let arrSec = [20, 30, 20, 10, 2, 5];
const getColor = (index) => {
  return arr[index];
}
const createPromise = (num, color) => {
  return new Promise(() => {
    setTimeout(() => { console.log(color); }, num * 1000)
  })
}

arrSec.reduce((pre, cur, index) => {
  return pre.then(createPromise(cur, getColor(index % 3)))
}, Promise.resolve(console.log(arr[0])))