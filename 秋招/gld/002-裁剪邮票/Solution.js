const cutStamp = (n, m, k) => {
  let res = 0;
  const helper = (n, m, k) => {
    let cha = m > n ? m - n : n - m;
    k--;
    if (n >= m) {
      res += m * m;
      while (k-- > 0 && m > 0) {
        res++;
        m--
      }
      return [n, m, k]
    } else {
      res += n * n;
      while (k-- > 0 && n > 0) {
        res++;
        n--
      }
      return [m, n, k]
    }


  }

  while (true) {
    let arr = helper(n, m, k);
    let n = arr[0];
    let m = arr[1];
    let k = arr[2];
    if (arr[1] < 0) {
      return res;
    }
    arr = helper(n, m, k);
  }
}