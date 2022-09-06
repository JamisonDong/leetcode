/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  if (len === 1) return 1;
  let map = new Map();
  let left = 0,
    right = 0;
  let res = 0;
  while (right < len) {
    if (map.has(s[right]) >= 0 && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
    }
    res = Math.max(right - left + 1, res);
    map.set(s[right], right);
    right++;
  }
  return res;
};

const s = 'abba';
console.log(lengthOfLongestSubstring(s));
