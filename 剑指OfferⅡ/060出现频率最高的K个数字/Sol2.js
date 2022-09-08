var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const n of nums) map.set(n, 1 + (map.get(n) || 0));

  const buckets = new Array(nums.length + 1);
  for (const [n, v] of map)
    !buckets[v] ? (buckets[v] = [n]) : buckets[v].push(n);

  const res = [];
  for (let i = buckets.length - 1; i > -1; i--) {
    if (res.length >= k) break;
    if (buckets[i]) res.push(...buckets[i]);
  }

  return res.length > k ? res.slice(0, k) : res;
};

const nums = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 2, 2, 3, 4, 5];
const k = 3;
console.log(topKFrequent(nums, k));
