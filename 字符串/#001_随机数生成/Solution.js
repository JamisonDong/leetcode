/**
 * js生成随机数a-z 0-9 以字母开头
 * 不能重复
 */
let resL = []
const randomStr = function () {
  const str1 = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let array = str1.split('')
  var first = Math.floor(Math.random() * 26)
  let res = array[first]
  for (let i = 0; i < 7; i++) {
    let key = Math.floor(Math.random() * array.length)
    res += array[key]
  }
  for (const iterator of resL) {
    if (iterator === res) {
      randomStr()
    }
  }
  return res
}

console.log(randomStr());