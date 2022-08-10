/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function (num, k) {
  const len = num.length
  if (len === k) {
      return "0"
  }
  let stack = [];
  let remain = len - k;
  for (let i of num) {
      while (k && stack.length && stack[stack.length - 1] > i) {
          stack.pop();
          k--
      }
      stack.push(i)
  }
  const res = stack.slice(0, remain);
  while (res[0] === '0') {
      if (res.join('') === '0') return '0';
      res.shift();
  }

  return res.join('');
};

const num = '100001',
  k = 1;
console.log(removeKdigits(num, k));
