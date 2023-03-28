const isInclude = (s, t) => {
  if (s === t) return 'Yes';
  let m = 0, h = 0, y = 0;
  let m2 = 0, h2 = 0, y2 = 0;
  let str1 = '', str2 = '';
  for (let item of s) {
    if (item === 'm') {
      m++;
    } else if (item === 'h') {
      h++
    } else if (item === 'y') {
      y++;
    } else {
      str1 += item;
    }
  }

  for (let item of t) {
    if (item === 'm') {
      m2++;
    } else if (item === 'h') {
      h2++;
    } else if (item === 'y') {
      y2++;
    } else {
      str2 += item;
    }
  }

  if (str1 === str2 && (m - m2 === h - h2) && (m - m2 === y - y2)) {
    return 'Yes'
  }
  return 'No';
}




let q = 3;
let arr = ['mhbdy', 'bd', 'mhbdy', 'mhmbhdyy', 'mhy', 'abc'];
let str1 = '', str2 = '';
for (let i = 0; i < q * 2; i += 2) {
  str1 = arr[i];
  str2 = arr[i + 1]
  console.log(isInclude(str1, str2));
}
