// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// For example,

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.

/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-26 22:12:39
 * @version $Id$
 *
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
    // Nothing in the matrix
    if (matrix.length === 0 || matrix[0] === 0) {
        return false;
    }
    
    let rowlen = matrix.length,
        collen = matrix[0].length;
    
    let i = 0, j = collen-1;
    while (i>=0 && i<rowlen && j>=0 && j<collen) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            j -= 1;
        } else {
            i += 1;
        }
    }
    
    return false;
};