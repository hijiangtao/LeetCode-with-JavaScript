/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Examples:
 * 
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * 
 * Given "bbbbb", the answer is "b", with the length of 1.
 * 
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-27 20:52:27
 * @version $Id$
 *
 *  @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
   let strlen = s.length;
   
   // 字符串长度小于2  
   if (strlen < 2) {
       return strlen;
   }
   
   let maxString = '', maxLen = 1;
   
   for (let i=0; i<strlen; i++) {
       let substr = [s[i]], continueJud = false;
       
       // 剩余字符串即使全部不重复也不可能长于现有最长的字符串  
       if ( strlen-i<=maxLen ) {
           break;
       }
       
       // 如果遇到连续相等的字符，则跳到本次连续出现的最后一个该字符上  
       while (i+1<strlen && s[i]===s[i+1]) {
           i += 1;
           continueJud = true;
       }
       if (continueJud) {
           continueJud = false;
           i -= 1;
           continue;
       }
       
    //   从第二个字符开始遍历，直到字符串结尾或者出现重复字符的情况
       for (let j=i+1; j<strlen; j++) {
           if (substr.indexOf(s[j]) !== -1) {
               if (substr.length > maxLen) {
                   maxLen = substr.length;
                //   maxString = ''.join(substr);
               }
               
               break;
           }
           
           substr.push(s[j]);
           if (j === strlen-1) {
               if (substr.length > maxLen) {
                   maxLen = substr.length;
               }
           }
       }
   }
   
   return maxLen;
};