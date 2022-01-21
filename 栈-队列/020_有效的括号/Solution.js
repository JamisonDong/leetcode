/**
 * @param {string} s
 * @return {boolean}
 */
//  var isValid = function(s) {
//      console.log(s);
//     if(s.length%2 !=0){
//         return false;
//     }else if(s == ''){
//         return true;
//     }
//     for (let i = 0; i < s.length; i++) {
//         if((s[i] == '{' && s[i+1] == '}') 
//         || (s[i] == '[' && s[i+1] == ']') 
//         || (s[i] == '(' && s[i+1] == ')')){
//             return isValid(s.substring(0,i)+s.substring(i+2,s.length))
//         }
//     }
    
//     return false;
// };

var isValid = function(s) {
    let len = s.length;
    if(len % 2 !== 0){
        return false;
    }
    let stack = [];
    for (let item of s){
        switch(item){
            case "{":
            case "[":
            case "(": 
                stack.push(item);
                break; 
            case ")":
            if(stack.pop() !== "(") { 
                return false;}
                break;
            case "}":
                if(stack.pop() !== "{") 
                    return false;
                    break;
            case "]":
                if(stack.pop() !== "[") return false;
                break;
        }
    }
    return !stack.length;
};


// var isValid = function(s) {
//     s = s.split('');
//     let sl = s.length;
//     if (sl % 2) return false;
//     let map = new Map([[')', '('], [']', '['], ['}', '{']]);
//     let stack = [];
//     for(let i of s){
//         if (map.get(i)) {
//             if (stack[stack.length - 1] !== map.get(i)) return false;
//             else stack.pop();
//         } else {
//             stack.push(i);
//         }
//     }
//     return !stack.length;
// };

console.log(isValid("{}{{}}"));