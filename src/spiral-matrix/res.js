/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 * 
 * For example,
 * 
 * Given the following matrix:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * 
 * You should return [1,2,3,6,9,8,7,4,5].
 * 
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-03-03 21:42:58
 * @version $Id$
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return matrix;
    }
    
    let rowBegin = 0,
        rowEnd = matrix.length-1,
        colBegin = 0,
        colEnd = matrix[0].length-1,
        res =[];
    
    while (rowBegin <= rowEnd || colBegin <= colEnd) {
        // left->right
        for (let i=colBegin; i<=colEnd; i++) {
            res.push( matrix[rowBegin][i] );
        }
        if (rowBegin === rowEnd) {
            break;
        }
        
        // right->bottom
        rowBegin++;
        for (let i=rowBegin; i<=rowEnd; i++) {
            res.push( matrix[i][colEnd] );
        }
        if (colBegin === colEnd) {
            break;
        }
        
        // bottom->left
        colEnd--;
        for (let i=colEnd; i>=colBegin; i--) {
            res.push( matrix[rowEnd][i] );
        }
        if (rowBegin === rowEnd) {
            break;
        }
        
        // left bottom->top
        rowEnd--;
        for (let i=rowEnd; i>=rowBegin; i--) {
            res.push( matrix[i][colBegin] );
        }
        if (colBegin === colEnd) {
            break;
        }
        colBegin++;
    }
    
    return res;
};