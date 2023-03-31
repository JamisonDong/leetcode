/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const sArr = ['a', 'e', 'i', 'o', 'u'];
  let res = 0;
  let path = [];
  const backtracking = (index, str) => {
    if (path.length === n) {
      // console.log(path);
      res++;
      return;
    }
    for (let i = index; i < 5; i++) {
      path.push(sArr[i]);
      backtracking(i);
      path.pop();
    }
  }
  backtracking(0);
  return res;
}

const n = 33;
console.log(countVowelStrings(n));