/**
 * @param {string} s
 * @return {number}
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
 */
 var lengthOfLastWord = function(s) {
    let sArray = s.split(' ')
    for(let i = sArray.length-1; i>=0;i--){
        if(sArray[i]!== ''){
            return sArray[i].length
        }else{
            continue
        }
    }
    return -1
};

var s = "a"
console.log(lengthOfLastWord(s));