function rob(nums: number[]): number {
    if (!nums.length) {
        return 0;
    }

    const dp: number[] = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            dp[i] = nums[i];
        } else if (i === 1) {
            dp[i] = Math.max(nums[i], dp[i-1]);
        } else {
            dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
        }
    }

    return dp[nums.length-1];
};