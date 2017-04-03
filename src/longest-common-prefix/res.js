/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-03 20:42:30
 * @version $Id$
 * 
 * Problem: Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    if (strs === '' || strs.length === 0) {
        return '';
    }
    
    let prefix = '',
        strslen = strs.length,
        strlen = strs[0].length;
        
    for (let i=0; i < strlen; i++) {
        let jud = true;
        
        for (let j=1; j<strslen; j++) {
            if (strs[j][i] === undefined || strs[j][i] !== strs[0][i]) {
                jud = false;
                break;
            }
        }
        
        if (jud) {
            prefix += strs[0][i];
        } else {
            return prefix;
        }
    }
    
    return prefix;
};