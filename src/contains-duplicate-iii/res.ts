function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    if (nums.length < 2) {
        return false;
    }

    const numsList = nums.map((num, index) => ({
        val: num,
        index,
    }));
    numsList.sort((a, b) => a.val - b.val);

    for (let i = 0; i < numsList.length-1; i++) {
        for (let j = i+1; j < numsList.length; j++) {
            if (Math.abs(numsList[j].val - numsList[i].val) > t) {
                break;
            } else if (Math.abs(numsList[j].val - numsList[i].val) <= t && Math.abs(numsList[j].index - numsList[i].index) <= k) {
                return true;
            }
        }
    }

    return false;
};