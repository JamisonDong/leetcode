/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const num1Len = num1.length
  const num2Len = num2.length
  let res = new Array(num1Len + num2Len).fill(0)
  for (let i = num1Len - 1; i >= 0; i--) {
    for (let j = num2Len - 1; j >= 0; j--) {
      let tmp = num1[i] * num2[j] + res[i + j + 1]
      res[i + j + 1] = tmp % 10
      res[i + j] += 0 | tmp / 10
    }
  }
  while (res[0] === 0) {
    res.shift()
  }
  return res.join('')
};

var num1 = "123456789", num2 = "987654321"
console.log(multiply(num1, num2));