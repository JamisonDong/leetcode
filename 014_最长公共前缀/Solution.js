/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length == 0) 
        return "";
    let str = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j< str.length && j < strs[i].length; j++) {
            if(str[j] != strs[i][j]){
                break;
            }
        }
        str = str.substr(0,j);
        if(str === "") return str;
    }
    return str;
};

/* var longestCommonPrefix = function(strs) {
    if(strs.length == 0) 
        return "";
    let ans = strs[0];
    for(let i =1;i<strs.length;i++) {
        let j=0;
        for(;j<ans.length && j < strs[i].length;j++) {
            if(ans[j] != strs[i][j])
                break;
        }
        ans = ans.substr(0, j);
        if(ans === "")
            return ans;
    }
    return ans;
}; */



console.log(longestCommonPrefix(["flower","flow","flight"]));