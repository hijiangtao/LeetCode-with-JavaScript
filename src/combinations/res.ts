function iterateNums(nums: number[], k: number): number[][] {
    if (k === 0) {
        return [];
    }

    const result: number[][] = [];
    nums.forEach((num, index) => {
        const newNums = nums.slice(index+1);
        const newResult = iterateNums([...newNums], k - 1);

        if (newResult.length) {
            newResult.forEach(item => {
                result.push([num, ...item]);
            });
        } else {
            result.push([num]);
        }
    });

    return result.filter(item => item.length === k);
}

function combine(n: number, k: number): number[][] {
    const nums = (new Array(n).fill(0)).map((_, index) => index + 1);
    return iterateNums(nums, k);
};