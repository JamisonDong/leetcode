//函数功能：将多层嵌套的数组扁平化，k为展开的层数
function flat(arr, k) {
    if (k === 0) {
        return arr;
    }
    const len = arr.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
            //注意concat方法是不改变原数组的，所以要重新赋值
            res = res.concat(flat(arr[i], k - 1));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
//测试
console.log(flat([1, [2, [3, [4]]]], 2));