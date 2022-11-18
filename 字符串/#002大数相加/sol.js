const getSum = (str1, str2) => {
  let maxLen = Math.max(str1.length, str2.length);

  str1 = str1.padStart(maxLen, '0');
  str2 = str2.padStart(maxLen, '0');

  let cur = 0;
  let add = 0;
  let sum = '';
  for (let i = maxLen - 1; i >= 0; i--) {
    cur = parseInt(str1[i]) + parseInt(str2[i]) + add;
    add = Math.floor(sum / 10);
    sum = cur % 10 + sum;
  }
  if (add === 1) {
    sum = "1" + sum;
  }
  return Number(sum);
}


let a = "9007199254740991";
let b = "1234567899999999999";
console.log(getSum(a, b));