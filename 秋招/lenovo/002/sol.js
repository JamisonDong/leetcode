const getSort = (nums, n) => {
  let res = [];
  for (let item of nums) {
    res.push(item.split(" "))
  }
  res.sort((a, b) => {
    return b[1] * 1 - a[1] * 1;
  })
  for (let i = 0; i < n; i++) {
    console.log(res[i][0]);
  }
}
let n = 4;
let nums = [
  'a 1',
  'b 2',
  'c 2',
  'd 1'
];
getSort(nums, n)