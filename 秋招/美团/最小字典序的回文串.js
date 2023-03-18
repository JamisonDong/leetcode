// 回文串
// 时间限制： 3000MS
// 内存限制： 589824KB
// 题目描述：
// 现在小美获得了一个字符串。小美想要使得这个字符串是回文串。
// 小美找到了你。你可以将字符串中至多两个位置改为任意小写英文字符’a’-‘z’。
// 你的任务是帮助小美在当前制约下，获得字典序最小的回文字符串。
// 数据保证能在题目限制下形成回文字符串。
// 注：回文字符串：即一个字符串从前向后和从后向前是完全一致的字符串。
// 例如字符串abcba, aaaa, acca都是回文字符串。字符串abcd, acea都不是回文字符串。
// 输入描述
// 一行，一个字符串。字符串中仅由小写英文字符构成。
// 保证字符串不会是空字符串。
// 字符串长度介于[1, 100000] 之间。
// 输出描述
// 一行，一个在题目条件限制下所可以获得的字典序最小的回文字符串。

// let str = readline();

const gethuiwen = (str) => {
  const n = str.length;
  let left = 0, right = n - 1;
  let count = 0;
  let arr = str.split("");
  let help = [];
  while (left < right) {
    if (str[left] != str[right]) {
      count++;
      help.push([left, right]);
    }
    left++;
    right--;
  }
  if (count > 2) {
    return "can't do it"
  } else if (count === 1) {
    const item = help[0];
    if (arr[item[0]] === 'a' || arr[item[1]] === 'a') {
      if (n & 1) {
        arr[Math.floor(n / 2)] = 'a';
      }
    }
    arr[item[0]] = arr[item[1]] = 'a';
  }
  else {
    let temp = (arr[help[0][0]] > arr[help[0][1]]) ? arr[help[0][1]] : arr[help[0][0]];
    arr[help[0][0]] = arr[help[0][1]] = temp;
    temp = (arr[help[1][0]] > arr[help[1][1]]) ? arr[help[1][1]] : arr[help[1][0]];
    arr[help[1][0]] = arr[help[1][1]] = temp;
  }
  return arr.join("")
}

let str = "abcde";
console.log(gethuiwen(str)); // "abcdcba"
