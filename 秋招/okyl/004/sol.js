function formatString (str, arg) {
  // write code here
  let res = '';
  let i = 0
  while (i < str.length) {
    if (str[i] !== '%') {
      res += str[i]
      i++;
    } else {
      i += 2
      res += arg.shift();
    }
  }
  res += arg.join("");
  return res;
}

let str = "A%sC%sE", arg = ['B', 'D', 'F'];
console.log(formatString(str, arg));