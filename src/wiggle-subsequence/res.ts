function wiggleMaxLength(nums: number[]): number {
    let up = 1, down = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            up = down + 1;
        } else if (nums[i] < nums[i-1]) {
            down = up + 1;
        }
    }

    return Math.max(up, down);
};

function wiggleMaxLength2(nums: number[]): number {
    if (nums.length < 2) {
        return nums.length;
    }

    let currentDiff = 0;
    let previousDiff = 0;
    let result = 0;

    for (let i = 1; i < nums.length; i++) {
        currentDiff = nums[i] - nums[i-1];

        if (currentDiff>0 && previousDiff<=0 || currentDiff<0 && previousDiff>=0) {
            previousDiff = currentDiff;
            result++;
        }
    }

    return result+1;
}