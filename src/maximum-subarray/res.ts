function maxSubArray(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    const maxI = [nums[0]];
    nums.forEach((num, i) => {
       if (!i) {
           return ;
       }

       maxI[i] = Math.max(maxI[i-1]+num, num);
    })

    return Math.max(...maxI);
};

function Status(lSum: number, rSum: number, mSum: number, iSum: number) {
    return {
        lSum,
        rSum,
        mSum,
        iSum,
    };
}

function getSum(nums: number[], start: number, end: number) {
    if (start === end) {
        return Status(nums[start], nums[start], nums[start], nums[start]);
    }

    const mIndex = Math.floor((start + end) / 2);
    const leftSum = getSum(nums, start, mIndex);
    const rightSum = getSum(nums, mIndex+1, end);

    return Status(
        Math.max(leftSum.lSum, leftSum.iSum + rightSum.lSum),
        Math.max(rightSum.rSum, rightSum.iSum + leftSum.rSum),
        Math.max(leftSum.mSum, rightSum.mSum, leftSum.rSum + rightSum.lSum),
        leftSum.iSum+rightSum.iSum
    )

}

/**
 * 线段树
 * @param nums
 */
function maxSubArray2(nums: number[]): number {
    return getSum(nums, 0, nums.length-1).mSum;
};