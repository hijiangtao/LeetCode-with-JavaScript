/**
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
 * 
 * Follow up:
 * 
 * Did you use extra space?
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best solution.
 * Could you devise a constant space solution?
 * 
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-28 13:49:19
 * @version $Id$
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function(matrix) {
    if (!matrix.length) {
        return ;    
    }
    
    let rowlen = matrix.length,
        collen = matrix[0].length,
        rowzero = false,
        colzero = false;
    
    for (let i=0; i<rowlen; i++) {
        for (let j=0; j<collen; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
                
                if (i === 0) {
                    rowzero = true;
                }
                if (j === 0) {
                    colzero = true;
                }
            }
        }
    }
    
    for (let i=1; i<rowlen; i++) {
        for (let j=1; j<collen; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    if (rowzero) {
        for (let i=0; i<collen; i++) {
            matrix[0][i] = 0;
        }
    }
    if (colzero) {
        for (let i=0; i<rowlen; i++) {
            matrix[i][0] = 0;
        }
    }
};

// Another solution
let setZeroes = function(matrix) {
    if (!matrix.length) {
        return ;    
    }
    
    let rowlen = matrix.length,
        collen = matrix[0].length,
        colzero = false;
    
    for (let i=0; i<rowlen; i++) {
        if (matrix[i][0] === 0) {
            colzero = true;
        }
        for (let j=1; j<collen; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    for (let i=rowlen-1; i>=0; i--) {
        for (let j=collen-1; j>=1; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        
        if (colzero) {
            matrix[i][0] = 0;
        }
    }
};