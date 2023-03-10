/**
 * 定理一： 给定正整数x,y,z,p,如果 y mod p = x, 则（y-z）mod p = 0 等价于 z mod p = x.
 * 定理二： 给定正整数x,y,z,p （y-z）mod p = x 等价于 z mod p = (y-x)mod p.
 */

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  const n = nums.length;
  // 前缀和
  const s = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    s[i + 1] = s[i] + nums[i];
  }
  let x = s[s.length - 1] % p;
  if (x === 0) return 0;
  let ans = n;
  const map = new Map();
  let j = -n;
  for (let i = 0; i <= n; i++) {
    map.set(s[i] % p, i);
    if (map.has((s[i] - x) % p)) {
      j = map.get((s[i] - x) % p);
    }
    ans = Math.min(ans, i - j);
  }
  return ans < n ? ans : -1;
};

let nums = [11, 2, 5, 7, 8, 9],
  p = 10;
console.log(minSubarray(nums, p));
