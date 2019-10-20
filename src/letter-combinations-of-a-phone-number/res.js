/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-27 22:30:32
 * @version $Id$
 * 
 * Given a digit string, return all possible letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * 
 * Input:Digit string "23"
 * 
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 * 
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
   let size = digits.length,
       mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"],
       res = [''];
   
   for (let i=0; i<size; i++) {
       let currentVal = digits[i]-'0';
       if (currentVal > 1 && currentVal < 10) {
           let tmp = [],
               maplen = mapping[currentVal].length,
               reslen = res.length;
           
           for (let j=0; j<reslen; j++) {
               tmp.push(res[j]);
           }
           res = [];
           
           for (let j=0; j<reslen; j++) {
               for (let k=0; k<maplen; k++) {
                  res.push(tmp[j] + mapping[currentVal][k]);  
               }
           }
       }
   }
   
   if (size < 1 || (res.length === 1 && res[0] === '')) {
       return [];
   }
   
   return res;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations_2 = function(digits) {
    const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const res = [];
    const len = digits.length;
    if (len < 1) return [];

    const getCombs = (prefix, start, end) => {
        const digitMap = mapping[digits[start]];
        // console.log(prefix, start, end, digitMap);
        if (start === end) {
            return digitMap ? digitMap.split('').map(subfix => {
                return prefix + subfix;
            }) : [prefix];
        } else {
            const subCombs = digitMap ? digitMap.split('').map(subfix => getCombs(prefix+subfix, start + 1, end)) : [getCombs(prefix, start + 1, end)];
            return subCombs.reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);
        }
    }

    return res.concat(getCombs('', 0, len-1));
  };