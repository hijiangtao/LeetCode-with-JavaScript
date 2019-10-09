/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const getId = (ele) => {
      return t ? Math.floor(ele / t) : ele;
    } 

    let len = nums.length;
    const boxs = {};
    if (k <= 0 || t < 0) return false;

    for (let index = 0; index < len; index++) {
      const element = nums[index];
      const belongedGroupIndex = getId(element);

      // 同一桶中存在元素
      if (boxs[belongedGroupIndex] !== undefined) return true;

      // 前一桶符合要求
      if (boxs[belongedGroupIndex-1] !== undefined && Math.abs(element - boxs[belongedGroupIndex-1]) <= t) return true;

      // 后一桶符合要求
      if (boxs[belongedGroupIndex+1] !== undefined && Math.abs(boxs[belongedGroupIndex+1] - element) <= t) return true;
      
      // 删除最老的一个元素
      if (index >= k) {
        const delGroupIndex = getId(nums[index - k]);
        boxs[delGroupIndex] = undefined;
      }

      boxs[belongedGroupIndex] = element;
    }
    
    return false;
};
