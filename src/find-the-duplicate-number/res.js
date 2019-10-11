/**
 * Floyd判圈算法
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let tortoise = nums[0];
    let hare = nums[0];

    do {
      tortoise = nums[tortoise];
      hare = nums[nums[hare]];
    } while (tortoise !== hare);

    hare = nums[0]
    while (tortoise !== hare) {
      hare = nums[hare]
      tortoise = nums[tortoise]
    }

    return tortoise;
};