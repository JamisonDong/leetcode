/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let sArr = s.split(' ');
  const arr = new Array(sArr.length).fill('');
  for (let item of sArr) {
    let curLen = item.length;
    arr[item[curLen - 1] - 1] = item.slice(0, curLen - 1);
  }
  return arr.join(' ');
};
const s = 'is2 sentence4 This1 a3';
console.log(sortSentence(s));
