/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-06 18:43:29
 * 
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * Given an encoded message containing digits, determine the total number of ways to decode it.
 * 
 * For example,
 * Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
 * 
 * The number of ways decoding "12" is 2.
 * 
 * @param {string} s
 * @return {number}
 */
let numDecodings = function(s) {
   let len = s.length,
    num = 0,
    matrix = new Array(len);
    
    if (len===0) return len;
    
    for (let i=0; i<len; i++) {
        matrix[i] = new Array(len);
        if (s[i] !== '0') {
            matrix[i][i] = 1;
        } else {
            matrix[i][i] = 0;
        }
    }
    
    let i=0;
     for (let j=1; j<len; j++) {
            let subOne = 0,
                subTwo = 0,
                subTwoStr = Number.parseInt(s.substring(j-1, j+1));
                
            if (s[j] !== '0') {
                subOne = matrix[i][j-1];
            }
            if (subTwoStr > 9 && subTwoStr < 27) {
                subTwo = j-i === 1? 1:matrix[i][j-2];
            }
            
            if (subOne === 0 && subTwo === 0) return 0;
            
            matrix[i][j] = subOne + subTwo;
            console.log(matrix[i][j]);
        }
    
    return matrix[0][len-1];
};