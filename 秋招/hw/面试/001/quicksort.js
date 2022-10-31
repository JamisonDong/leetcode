let arr = [1, 2, 3, 5, 4, 5, 7];

//1. 随机index 交换到最后一个
//2. 跟index比较  双指针i j  小于不动 大于跟后者交换
//3. swap(index, i);  确定一个最终位置
//4. part(arr, 0,i) && part(arr, j,len-1)

const quick = (arr, left, right) => {
  if (left < right) {
    let random = Math.floor(Math.random() * (right - left + 1)) + left;
    swap(arr, random, right);
    let pivotIndex = part(arr, left, right);
    quick(arr, left, pivotIndex - 1);
    quick(arr, pivotIndex + 1, right);
  }

  return arr;
}

const part = (arr, left, right) => {
  let pivot = arr[right];
  let pivotIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, right, pivotIndex)
  return pivotIndex

}
// let arr = [1, 2, 3, 5, 4, 5, 7];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quick(arr, 0, arr.length - 1));