/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    const len = fruits.length;
    let left = 0;
    let front = 0;
    let res = 0;
    let arr = [fruits[left]];
    for (let right = 0; right < len; right++) {
        if(!arr.includes(fruits[right])){
            if(arr.length <= 1){
                arr[1] = (fruits[right])
            }else{
                left = front;
                arr[0] = fruits[right-1];
                arr[1] = fruits[right];
            }
        }

        if(fruits[right]!== fruits[front]){
            front = right;
        }

        res = Math.max(res, right-left+1);
    }
    return res;
};

let fruits = [1,2,3,2,2];
// [1,2,3,2,2]
console.log(totalFruit(fruits));
