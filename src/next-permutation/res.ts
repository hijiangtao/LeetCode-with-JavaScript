/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let currentPointer = nums.length - 1;
    let mutationCount = 0;

    if (currentPointer < 1) {
        return ;
    }

    while (!mutationCount || currentPointer <= nums.length-1 && currentPointer > 0) {
        mutationCount++;
        if (currentPointer > 0 && nums[currentPointer] > nums[currentPointer-1]) {
            currentPointer--;
            break;
        }

        currentPointer--;
    }

    let swapPointer = nums.length-1;
    while(swapPointer > 0 && nums[swapPointer] <= nums[currentPointer]) {
        swapPointer--;
    }

    if (!currentPointer && !swapPointer) {
        nums.sort((a, b) => a - b);
    } else if (currentPointer === nums.length-2) {
        const swapPointer = currentPointer+1;
        const swapValue = nums[swapPointer];
        nums[swapPointer] = nums[currentPointer];
        nums[currentPointer] = swapValue;
    } else {
        // swap
        const swapValue = nums[swapPointer];
        nums[swapPointer] = nums[currentPointer];
        nums[currentPointer] = swapValue;

        const restList = nums.slice(currentPointer + 1);
        restList.sort((a, b) => a - b);

        for (let j = currentPointer + 1; j < nums.length; j++) {
            nums[j] = restList[j-currentPointer-1];
        }
    }
};