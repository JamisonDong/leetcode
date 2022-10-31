const sol = (nums) => {

  let res = 0;
  let path = [];

  const backtracking = (index) => {
    if (path.length === 3) {
      if (path[0] === path[2] && path[0] > path[1]) {
        console.log(path);
        res++;
      }
      return;
    }

    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  }
  backtracking(0);
  return res;
}

console.log(sol([3, 1, 3, 4, 3, 4]));