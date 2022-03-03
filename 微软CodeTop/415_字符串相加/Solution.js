/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  const num1Len = num1.length
  if (num1Len === 0) return num2
  const num2Len = num2.length
  if (num2Len === 0) return num1
  let res = []
  let i = num1Len - 1
  let j = num2Len - 1
  let add = 0
  while (i >= 0 || j >= 0 || add != 0) {
    const x = i >= 0 ? num1[i] - '0' : 0
    const y = j >= 0 ? num2[j] - '0' : 0
    let curRes = x + y + add
    res.push(curRes % 10)
    add = Math.floor(curRes / 10)
    i--;
    j--;
  }
  res.reverse()

  return res.join('')
};

const num1 = "456", num2 = "77"
console.log(addStrings(num1, num2));
