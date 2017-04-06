/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-06 21:23:50
 * 
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
 * 
 * For example, given the following triangle
 * [
 * [2],
 * [3,4],
 * [6,5,7],
 * [4,1,8,3]
 * ]
 * 
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 * 
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = function(triangle) {
   let row = triangle.length;
   
   if (!row) return null;
   
   for (let i=row-2; i>=0; i--) {
       for (let j=0; j<=i; j++) {
           triangle[i][j] += min(triangle[i+1][j], triangle[i+1][j+1]);
       }
   }
   
   return triangle[0][0];
};

let min = function(a, b) {
    if (a>b) return b;
    else return a;
};