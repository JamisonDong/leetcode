let nums = [2, 3, 2];

const getLog = (k, v) => {
  let message1 = `item #${k}: Success!`;
  let message2 = `item #${k}: Sorry!`;
  if (nums[k - 1] && nums[k - 1] >= v && nums[k - 1] > 0) {
    nums[k - 1] = nums[k - 1] - v;
    return message1;
  } else {
    return message2;
  }
}
let n = 3;
let m = 4;
let order = [
  [1, 2],
  [2, 4],
  [3, 1],
  [1, 1]
];
for (let i = 0; i < m; i++) {
  const [k, v] = order[i];
  console.log(getLog(k, v));
  console.log(nums);
}
