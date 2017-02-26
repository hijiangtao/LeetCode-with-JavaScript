// Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].

/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-26 22:56:22
 * @version $Id$
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {
    let arrlen = nums.length;
    if (!arrlen) {
        return [-1, -1];
    }
    
    let leftIndex = binarySearch(nums, 0, arrlen-1, target, 'l'), rightIndex;
    if (leftIndex === -1) {
        return [-1, -1];
    } else {
        rightIndex = binarySearch(nums, leftIndex, arrlen-1, target, 'r');
    }
    
    return [leftIndex, rightIndex];
};

let binarySearch = function(nums, begin, end, target, type) {
    let arrlen = nums.length;
    while (begin <= end) {
        let mid = begin + Number.parseInt( (end-begin)/2 ),
            midVal = nums[mid];
        
        if (midVal === target) {
            switch (type) {
                case 'l':
                    if (mid === 0 || nums[mid-1] !== target) {
                        return mid;
                    } else {
                        end = mid-1;
                    }
                    break;
                default:
                    if (mid === arrlen-1 || nums[mid+1] !== target) {
                        return mid;
                    } else {
                        begin = mid+1;
                    }
                    break;
            }
        } else if (midVal > target) {
            end = mid-1;
        } else if (midVal < target) {
            begin = mid+1;
        }
    }
    
    return -1;
};