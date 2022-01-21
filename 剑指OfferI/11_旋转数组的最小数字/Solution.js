/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return numbers[i + 1]
        }
    }
    return numbers[0]
};

var minArray = function(numbers){
    let left = 0, right = numbers.length-1
    while(left<right){
        let middle = left + ~~ ((right-left)/2)
        if(numbers[middle] > numbers[right]){
            left = middle + 1
        }else if(numbers[middle] < numbers[right]){
            right = middle
        }else{
            right--
        }
    }
    return numbers[left];
}

var numbers = [2, 2, 2, 0, 1]
console.log(minArray(numbers));