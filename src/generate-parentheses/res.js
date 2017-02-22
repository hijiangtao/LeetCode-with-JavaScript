/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-22 20:15:53
 * @version $Id$
 */

/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function(n) {
    let res = [], p = '';
   	
    function subProblem(p, left, right) {
    	if (left) {
    		subProblem(p+'(', left-1, right);
    	}
    	if (right>left) {
    		subProblem(p+')', left, right-1);
    	}
    	if (!right) {
    		res.push(p);
    	}

    	return ;
    }

    subProblem('', n, n);

    return res;
};
