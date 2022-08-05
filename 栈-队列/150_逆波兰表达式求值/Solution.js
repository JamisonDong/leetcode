/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let c of tokens) {
    console.log(stack);
    if (isEval(c)) {
      const c2 = stack.pop() * 1;
      const c1 = stack.pop() * 1;
      const value = getValue(c1, c2, c);
      console.log(c, value);
      stack.push(value);
    } else {
      stack.push(c);
    }
  }
  return stack[0];
};

const isEval = (c) => {
  if (c === "+" || c === "-" || c === "*" || c === "/") {
    return true
  }
}

const getValue = (c1, c2, c) => {
  if (c === "+") {
    return c1 + c2;
  } else if (c === "-") {
    return c1 - c2;
  } else if (c === "*") {
    return c1 * c2;
  } else {
    return c1 / c2 > 0 ? Math.floor(c1 / c2) : Math.ceil(c1 / c2);
  }
}

const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
console.log(evalRPN(tokens));