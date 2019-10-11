/**
 * https://leetcode-cn.com/problems/maximum-gap/solution/zui-da-jian-ju-by-leetcode/
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const len = nums.length;
    if (len < 2) return 0;

    let mini = Number.MAX_SAFE_INTEGER,
        maxi = Number.MIN_SAFE_INTEGER;

    nums.forEach(e => {
        if (e < mini) {
            mini = e;
        }
        if (e > maxi) {
            maxi = e;
        }
    })


    let bucketSize = Math.max(1, (maxi - mini) / (nums.length - 1));        // bucket size or capacity
    let bucketNum = parseInt((maxi - mini) / bucketSize) + 1;                        // number of buckets
    const buckets = [];
    for (let index = 0; index < bucketNum; index++) {
        buckets.push({});
    }

    // console.log(buckets);
    nums.forEach(num => {
        let bucketIdx = parseInt((num - mini) / bucketSize);                          // locating correct bucket
        // console.log('bucketIdx is ', bucketIdx);
        buckets[bucketIdx].used = true;
        buckets[bucketIdx].minval = Math.min(num, buckets[bucketIdx].minval || Number.MAX_SAFE_INTEGER);
        buckets[bucketIdx].maxval = Math.max(num, buckets[bucketIdx].maxval || Number.MIN_SAFE_INTEGER);
    });

    let prevBucketMax = mini, maxGap = 0;
    buckets.forEach(bucket => {
        if (bucket.used) {
            maxGap = Math.max(maxGap, bucket.minval - prevBucketMax);
            prevBucketMax = bucket.maxval;
        }
    });

    return maxGap;
};