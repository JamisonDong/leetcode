/**
 * @param {string} s
 * @return {number}
 */
/*  var romanToInt = function(s) {
    var rule = {}
    rule['I'] = 1;
    rule['V'] = 5;
    rule['X'] = 10;
    rule['L'] = 50;
    rule['C'] = 100;
    rule['D'] = 500;
    rule['M'] = 1000;
    let result = 0;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        console.log(element);
        if(rule[s[index]] < rule[s[index+1]]){
            result -= rule[s[index]];
        }else{
            result += rule[s[index]];
        }
    }
    return result;
}; */

/* var romanToInt = function(s) {
    const symbolValues = new Map();
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);  
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        const value = symbolValues.get(s[i]);
        if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
            ans -= value;
        } else {
            ans += value;
        }
    }
    return ans;
}; */

var romanToInt = function(s) {
    const map = {
        I : 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    let ans = 0;
    for(let i = 0;i < s.length;) {
        if(i + 1 < s.length && map[s.substring(i, i+2)]) {
            ans += map[s.substring(i, i+2)];
            i += 2;
        } else {
            ans += map[s.substring(i, i+1)];
            i ++;
        }
    }
    return ans;
};



console.log(romanToInt('MCMXCIV'));