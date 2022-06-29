function getUniqueList(numsCountMap: { [key in number]: number }): number[][] {
    const result: number[][] = [];

    const keys = Object.keys(numsCountMap);

    keys.forEach((key) => {
        // @ts-ignore
        const currentCount = numsCountMap[key];
        const currentNum = Number(key);

        if (currentCount) {
            const newNumsCountMap = { ...numsCountMap };
            newNumsCountMap[key]--;
            for (let newKey in newNumsCountMap) {
                if (!newNumsCountMap[newKey]) {
                    delete newNumsCountMap[newKey];
                }
            }

            const uniqueList = getUniqueList(newNumsCountMap);

            if (!uniqueList.length) {
                result.push([currentNum]);
            } else {
                uniqueList.forEach((item) => {
                    result.push([currentNum, ...item]);
                });
            }
        }
    })

    return result;
}

function permuteUnique(nums: number[]): number[][] {
    const numsCountMap: { [key in number]: number } = {};
    nums.sort((a, b) => a - b);
    nums.forEach((num, index) => {
        numsCountMap[num] = numsCountMap[num] ? numsCountMap[num] + 1 : 1;
    });

    if (nums.length <= 1) {
        return [nums];
    }

    return getUniqueList(numsCountMap);
};