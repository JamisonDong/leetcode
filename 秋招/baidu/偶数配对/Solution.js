const sol = (nums, k) => {
  let len = nums.length;
  let res = 0;
  let sign = new Array(len).fill(0);
  let max = Math.floor(len / 2);
  for (let i = 0; i < len; i++) {
    if (res === max) {
      break;
    }
    if ((nums[i] + k) % 2 === 0) {
      sign[i] = 1;
      res++;
    }
  }
  console.log(res);
  let pre = [];
  let another = []
  for (let i = 0; i < len; i++) {
    if (sign[i]) {
      pre.push(nums[i]);
    } else {
      another.push(nums[i])
    }
  }
  for (let i = 0; i < res; i++) {
    let cur = []
    cur.push(pre[i], another[i]);
    console.log(cur.join(" "));
  }
}

const nums = [1, 5, 4, 4, 3, 6, 3];
sol(nums, 5);