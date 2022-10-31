const sol = (n, m, nums) => {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < n; i++) {
    let curCar = nums[i];
    let initVal = curCar[0];
    if (curCar[1] >= m) {
      min = Math.min(curCar[0], min)
    } else {
      initVal += (m - curCar[1]) * curCar[2];
      min = Math.min(min, initVal);
    }
  }
  return min
}

/**
 * n辆 m公里 : 2 1
 * ai 2 2 起步价
 * bi 1 2 起步公里
 * ci 1 1 超出价/公里
 */

const nums = [
  [2, 1, 1],
  [2, 2, 1]
];

console.log(sol(2, 1, nums));