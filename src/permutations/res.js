/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-03 21:52:31
 *
 * Problem: Given a collection of distinct numbers, return all possible permutations.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
    let numlen = nums.length,
        res = [];
        
    if (numlen === 0) {
        return res;
    } else if (numlen === 1) {
        res.push(nums);
        return res;
    }
    
    return subpermute([], nums);
};

let subpermute = function(base, nums) {
    let numlen = nums.length,
        res = [];
        
    if (numlen === 1) {
        return [ base.concat(nums) ];
    }
    
    for (let i=0; i<numlen; i++) {
        let subarray = [];
        for (let j=0; j<numlen; j++) {
            if (i===j) {
                continue;
            }
            subarray.push(nums[j]);
        }
        
        let newbase = base.concat( [nums[i]] );
        res = res.concat( subpermute(newbase, subarray) );
    }
    
    return res;
};