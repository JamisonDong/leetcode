// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"


const getHw = (str) => {
  let len = str.length;
  let res = '';

  const helper = (str, left, right) => {
    while (left > 0 && right < len && str[left] === str[right]) {
      left--;
      right++;
    }
    return [left, right, right - left - 1];
  }
  for (let i = 1; i < len; i++) {
    let res1 = helper(str, i, i);
    let res2 = helper(str, i - 1, i);
    if (res1[2] > res2[2] && res1[2] > res.length) {
      res = str.slice(res1[0] + 1, res1[1]);
    } else if (res2[2] > res.length) {
      res = str.slice(res2[0] + 1, res2[1]);
    }
  }
  return res;
}

let str = 'babad';
let str1 = 'cbbd';

console.log(getHw(str1));