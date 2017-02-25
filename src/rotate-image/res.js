// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Follow up:
// Could you do this in-place?

/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-25 22:57:12
 * @version $Id$
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
    let len = matrix.length;
    for (let i=0; i<Number.parseInt(len/2); i++) {
       for (let j=0; j<len; j++) {
           let temp = matrix[i][j];
           matrix[i][j] = matrix[len-1-i][j];
           matrix[len-1-i][j] = temp;
       }
    }
    
    for (let i=0; i<len; i++) {
        for (let j=0; j<i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};