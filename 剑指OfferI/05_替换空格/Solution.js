/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    let ans = s.split(' ')
    let res = ans.reduce((prev,cur,index,ans)=>{
        return prev+'%20'+cur
    })

    return res
};


var s = "We are happy."
console.log((replaceSpace(s)));