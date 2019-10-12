/**
 * 归并排序+索引数组
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const len = nums.length;
  if (!len) return [];
  if (len === 1) return [0];

  const indexList = nums.map((e, i) => i);
  const res = nums.map(() => 0);

  const helper = (nums, left, right, indexList) => {
    let mid = -1;
    if (left === right) {
      return ;
    }
    
    mid = left + parseInt((right - left) / 2);
  
    helper(nums, left, mid, indexList)
    helper(nums, mid + 1, right, indexList)
  
    if(nums[indexList[mid]] < nums[indexList[mid+1]])
      return ;
      
    sort_and_count_smaller(nums, left, mid, right, indexList);
  }
  
  const sort_and_count_smaller = (nums, left, mid, right, indexList) => {
    const temp = indexList.slice();
  
    let l = left;
    let r = mid + 1;
    for (let i = l; i <= right; i++) {    
      if (l > mid) { // 左边遍历完
        indexList[i] = temp[r];
        r += 1;
      } else if (r > right) { // 右边遍历完
        indexList[i] = temp[l];
        l += 1;
        res[indexList[i]] += (right-mid);
      } else if (nums[temp[l]] <= nums[temp[r]]) { // 
        indexList[i] = temp[l];
        l += 1;
        res[indexList[i]] += (r - mid - 1);
      } else if (nums[temp[l]] > nums[temp[r]]) {
        indexList[i] = temp[r];
        r += 1;
      }
    }
  }

  helper(nums, 0, len-1, indexList);
  return res;
};