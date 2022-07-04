function fourSum(nums: number[], target: number): number[][] {
    const res: number[][] = [];

    if (nums.length < 4) {
        return res;
    }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length-3; i++) {
        if (i-1 >=0 && nums[i] === nums[i-1]) {
            continue;
        }
        for (let j = i+1; j < nums.length-2; j++) {
            if (j > i+1 && nums[j] === nums[j-1]) {
                continue;
            }

            let k = j+1, l = nums.length-1;
            while (k < l) {
                const sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]]);

                    while (k < l && nums[k] === nums[k+1]) {
                        k++;
                    }
                    while (k < l && nums[l] === nums[l-1]) {
                        l--;
                    }
                    k++;
                    l--;
                } else if (sum < target) {
                    k++;
                } else if (sum > target) {
                    l--;
                }
            }
        }
    }

    return res;
};