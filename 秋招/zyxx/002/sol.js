const sol = (n, str, nums) => {
  const helper = (i, j) => {
    let res = 0;
    while (i >= 0 && j < n) {
      if (str[i] === str[j]) {
        i--;
        j++;
      } else {
        res += Math.min(nums[i], nums[j]);
        i--;
        j++;
      }
    }
    return res;
  }
  let mid = Math.floor(n / 2);
  if (n % 2 === 0) {
    return helper(mid, mid + 1);
  } else {
    return helper(mid, mid);
  }
}

let len = 5;
let str = 'abcab';
let nums = [1, 5, 2, 4, 3];
console.log(sol(len, str, nums));