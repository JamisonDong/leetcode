const xxl = (str) => {
  const find = (str) => {
    let pre = 0;
    let count = 0;
    while (true) {
      pre = count;
      for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
          count++;
          str = str.slice(0, i - 1) + str.slice(i + 1);
        }
      }
      if (pre === count) {
        break;
      }
    }
    return count;
  };
  let res = find(str);
  if (res % 2 === 0) {
    console.log('No');
  } else {
    console.log('Yes');
  }
};

let strs = ['abcdcab', 'aab', 'baab'];
for (let i of strs) {
  xxl(i);
}
