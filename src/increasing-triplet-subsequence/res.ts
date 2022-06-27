function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) {
        return false;
    }

    let currentLMinNum = Number.MAX_SAFE_INTEGER;
    const lMin = nums.map((num) => {
        currentLMinNum = num < currentLMinNum ? num : currentLMinNum;

        return currentLMinNum;
    });
    let currentMaxNum = Number.MIN_SAFE_INTEGER;
    const rMax = new Array(nums.length);
    for (let i = nums.length-1; i >= 0; i--) {
        currentMaxNum = nums[i] > currentMaxNum ? nums[i] : currentMaxNum;
        rMax[i] = currentMaxNum;
    }

    let result = false;
    for (let i = 1; i < nums.length-1; i++) {
        if (lMin[i-1] < nums[i] && nums[i] < rMax[i+1]) {
            result = true;
            break;
        }
    }

    return result;
};