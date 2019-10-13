/**
 * 二分法排序 + 查找
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  // 
  const bs = (n) => {
    let start = 0;
    let end = this.nums.length;

    while (start < end) {
      let mid = (start + end) >> 1;
      if (n > this.nums[mid]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    this.nums.splice(start, 0, n);
  }

  if (this.nums.length) {
    bs(num);
  } else {
    this.nums.push(num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const len = this.nums.length;
  return len ? len % 2 ? this.nums[Math.floor(len / 2)] : (this.nums[len / 2] + this.nums[len / 2 - 1]) / 2 : null;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */