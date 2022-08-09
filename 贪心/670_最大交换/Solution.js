/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let last = new Array(10).fill(-1);
  num = Array.from(num.toString());
  for (let i = 0; i < num.length; i++) {
    last[num[i] - '0'] = i;
  }
  //原数组从左到右遍历，索引数组从后往前遍历
  //遇到比当前位值大的，交换，因为索引数组从后往前遍历的，所以保证了值为最大
  for (let i = 0; i < num.length; i++) {
    for (let d = 9; d > num[i] - '0'; d--) {
      if (last[d] > i) {
        console.log(last[d], i);
        let temp = num[last[d]];
        num[last[d]] = num[i];
        num[i] = temp;
        return Number(num.join(''));
      }
    }
  }
  return Number(num.join(''));
};

const num = 99732132;
console.log(maximumSwap(num));
