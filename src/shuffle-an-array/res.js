// Shuffle a set of numbers without duplicates.

// Example:

// // Init an array with set 1, 2, and 3.
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
// solution.shuffle();

// // Resets the array back to its original configuration [1,2,3].
// solution.reset();

// // Returns the random shuffling of array [1,2,3].
// solution.shuffle();

/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-28 23:12:37
 * @version $Id$
 *
 * @param {number[]} nums
 */
let Solution = function(nums) {
    this.nums = nums;
    this.length = nums.length;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let shufflelist = []
    for (let i=0; i<this.length; i++) {
        shufflelist.push(this.nums[i]);
    }
    
    for (let i=0; i<this.length; i++) {
        let random = (Math.floor(Math.random()*this.length) + i) % this.length,
            temp = 0;
            
        if (random === i) {
            continue;
        }
        temp = shufflelist[i];
        shufflelist[i] = shufflelist[random];
        shufflelist[random] = temp;
    }
    
    return shufflelist;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */