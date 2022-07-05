function containsDuplicate(nums: number[]): boolean {
    if (nums.length < 2) {
        return false;
    }

    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return true;
        }
    }

    return false;
};