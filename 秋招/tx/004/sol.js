const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
const getArr = (nums1, nums2) => {

  let arr1 = flatten(JSON.parse(nums1));
  let arr2 = flatten(JSON.parse(nums2));
  console.log(arr1, arr2);
  let set = new Set();
  for (let item of arr1) {
    set.add(item);
  }
  let set2 = new Set();
  for (let item of arr2) {
    set2.add(item);
  }
  let res = [];
  set2.forEach(item => {
    if (set.has(item)) {
      res.push(item)
    }
  })
  let ans = res.sort((a, b) => a - b);
  return JSON.stringify(ans);
}


let nums1 = JSON.stringify([1, [2, 3], 4, 2]);
let nums2 = JSON.stringify([5, [4, [3, 3]], 2]);
console.log(getArr(nums1, nums2));