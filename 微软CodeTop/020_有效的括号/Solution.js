/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (str) => {
  const len = str.length
  if (len % 2 !== 0) return false
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  let stack = []
  for (const item of str) {
    if (map.has(item)) {
      if (!stack.length || stack[stack.length - 1] !== map.get(item)) {
        return false
      }
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  return !stack.length
}
let str = "{([])}"
console.log(isValid(str));