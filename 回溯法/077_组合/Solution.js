/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 *  输入：n = 4, k = 2
    输出：
    [
      [2,4],
      [3,4],
      [2,3],
      [1,2],
      [1,3],
      [1,4],
    ]
 * 
 *  */

/*
void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
*/
var combine = function (n, k) {
  let result = []
  let path = []

  function backtracking(n, k, startIndex) {
    if (path.length === k) {
      result.push([...path])
      return
    }
    // 如果for循环选择的起始位置之后的元素个数 已经不足 我们需要的元素个数了，那么就没有必要搜索了。
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i)
      backtracking(n, k, i + 1)
      path.pop()
    }
  }

  backtracking(n, k, 1)
  return result

};

const n = 4, k = 2
console.log(combine(n, k));