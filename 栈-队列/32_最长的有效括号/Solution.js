/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [];
  let res = 0;
  for (let item of s) {
    console.log(stack);
    if (item === ')') {
      const top = stack[stack.length - 1];
      if (top === '(') {
        stack.pop();
        res += 2;
      } else {
        res = 0;
        stack = [];
      }
    } else if (item === '(') {
      stack.push('(');
    }
  }

  return res;
};

const s = ')()())';
console.log(longestValidParentheses(s));
