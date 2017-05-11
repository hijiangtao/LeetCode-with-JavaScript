/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-11 13:49:44
 * 
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
let compareVersion = function(version1, version2) {
    let v1array = version1.split('.'),
        v2array = version2.split('.'),
        exp = new RegExp('^0+$');
    
    while(exp.exec(v1array[v1array.length-1])) v1array.pop();
    while(exp.exec(v2array[v2array.length-1])) v2array.pop();
    
    // while(v1array[v1array.length-1].match(exp)) v1array.pop();
    // while(v2array[v2array.length-1].match(exp)) v2array.pop();
    
    let v1len = v1array.length,
        v2len = v2array.length,
        minlen = Math.min(v1len, v2len);
    for (let i=0; i<minlen; i++) {
        let num1 = Number.parseInt(v1array[i]),
            num2 = Number.parseInt(v2array[i]);
            
        if (num1>num2) return 1;
        else if (num1<num2) return -1;
    }
    
    if (v1len === v2len) {
        return 0;
    } else {
        return v1len>v2len? 1:-1;
    }
};