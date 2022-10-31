const sol = (nums) => {
  let len = nums.length;
  let count = 0;
  let left = 0, right = len - 1
  while (1) {
    let index = dcArr(nums, left, right);
    if (index === -1) {
      return count;
    } else if (index[0] + 1 === index[1]) {
      return -1;
    } else {
      left = index[0];
      right = index[1];
      let cha = 0;
      if (nums[left] > nums[right]) {
        cha = nums[left] - nums[right];
        count += cha;
        nums[right] += cha;
        nums[right - 1] += cha;
      } else if (nums[left] < nums[right]) {
        cha = nums[right] - nums[left];
        count += cha;
        nums[left] += cha;
        nums[left + 1] += cha;
      }
    }
  }
}

const dcArr = (nums, l, r) => {
  while (l <= r) {
    if (nums[l] !== nums[r]) {
      return [l, r];
    } else {
      l++;
      r--;
    }
  }
  return -1;
}

let nums = [0, 3, 1, 4, 0];
console.log(sol(nums))