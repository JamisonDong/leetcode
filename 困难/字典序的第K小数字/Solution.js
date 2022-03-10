/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。

var findKthNumber = function (n, k) {

  function getCount(prefix, n) {
    //prefix是前缀，n是上界
    let cur = prefix
    let next = prefix + 1 //下一个前缀
    let count = 0
    //当前的前缀当然不能大于上界
    while (cur <= n) {
      //下一个前缀的起点减去当前前缀的起点
      count += Math.min(n + 1, next) - cur
      cur *= 10
      next *= 10
    }
    return count//把当前前缀下的子节点和返回去。
  }
  //作为一个指针，指向当前所在位置，当p==k时，也就是到了排位第k的数
  let p = 1
  let prefix = 1//前缀
  while (p < k) {
    let count = getCount(prefix, n) //获得当前前缀下所有子节点的和
    if (p + count > k) { //第k个数在当前前缀下
      prefix *= 10
      p++ //把指针指向了第一个子节点的位置，比如11乘10后变成110，指针从11指向了110
    } else if (p + count <= k) { //第k个数不在当前前缀下
      prefix++
      p += count //注意这里的操作，把指针指向了下一前缀的起点
    }
  }
  return prefix
}

const n = 13, k = 2
console.log(findKthNumber(n, k));