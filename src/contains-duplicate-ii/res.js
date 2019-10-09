/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   const dupList = [];
   if (k === 0) return false;
   
   for (let index = 0; index < nums.length; index++) {
     const element = nums[index];
     
     if (dupList.includes(element)) {
       return true;
     } else if (dupList.length === k) {
       dupList.shift();
     }

     dupList.push(element);
   }

   return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate_2 = function(nums, k) {
  const visited = {};
  for(let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (visited[num] !== undefined && i - visited[num] <= k) {
          return true;
      }
      visited[num] = i;
  }
  return false
};