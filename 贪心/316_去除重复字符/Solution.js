/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let stack = [];
  // 维护一个计数器记录字符串中字符的数量
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }
  console.log(map);
  let inStack = {};
  for (let c of s) {
    // 每遍历过一个字符，都将对应的计数减一
    map.set(c, map.get(c) - 1);
    console.log(stack);

    // 如果字符 c 存在栈中，直接跳过
    if (inStack[c]) continue;

    while (stack.length && stack[stack.length - 1] > c) {
      // 若之后不存在栈顶元素了，则停止 pop
      if (map.get(stack[stack.length - 1]) === 0) {
        break;
      }
      // 若之后还有，则可以 pop
      // 弹出栈顶元素，并把该元素标记为不在栈中
      inStack[stack.pop()] = false;
    }
    // 若不存在，则插入栈顶并标记为存在
    stack.push(c);
    inStack[c] = true;
  }
  let res = '';
  while (stack.length) {
    res += stack.shift();
  }
  return res;
};

console.log(removeDuplicateLetters('cbacdcbc'));
