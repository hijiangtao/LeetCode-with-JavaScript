function largestNumber(nums: number[]): string {
    const stringNums = nums.map(n=>n.toString());

    stringNums.sort((a,b) => b+a > a+b ? 1: -1);
    const result = stringNums.join('');

    if (result.indexOf('0') === 0) return '0';

    return result;
};