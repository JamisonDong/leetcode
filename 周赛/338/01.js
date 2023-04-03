/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let ans = 0;
  if (numOnes < k) {
    ans += numOnes;
    k -= numOnes;
  } else {
    return k;
  }
  if (numZeros < k) {
    k -= numZeros;
  } else {
    return ans;
  }
  // 需要选负数
  ans -= k;
  return ans;
};


const numOnes = 3, numZeros = 2, numNegOnes = 2, k = 6
console.log(kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k));