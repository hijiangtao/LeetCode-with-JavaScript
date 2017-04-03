/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-03 22:44:48
 *
 * Problem: Implement atoi to convert a string to an integer.
 * 
 * @param {string} str
 * @return {number}
 */
let myAtoi = function(str) {
   const INT_MAX = 2147483647,
        INT_MIN = -2147483648,
        bound = Number.parseInt(INT_MAX/10);
   let strlen = str.length,
       signal = 1, // 1 stands for positive number, 0 stands for negative number
       res = 0;
   
   while (str[0] && str[0] === ' ') {
       str = str.slice(1);
       strlen -= 1;
   }
   
   if (strlen === 0) {
       return 0;
   }
   
   if(str[0] === '-') {
       signal = 0;
       str = str.slice(1);
   } else if (str[0] === "+") {
       str = str.slice(1);
   }
   
   while (str[0] >= '0' && str[0] <= '9') {
    //   console.log(str[0]);
       let element = Number.parseInt(str[0]);
       
       if ( res>bound || (res===bound && element>7) ) {
           if(signal) {
               return INT_MAX;
           }
           return INT_MIN;
       }
       
       res = res * 10 + element;
       str = str.slice(1);
   }
   
   return signal? res:-res;
};