const getNewNumber = (arr) => {
  const set = new Set();
  let newArr = [];
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    set.add(arr[i]);
  }
  set.forEach(item => {
    newArr.push(item)
  })
  return newArr.join('')
}

const number = '312313453449043460064565'.split('');
let newNum = getNewNumber(number);
console.log(Number(newNum));

