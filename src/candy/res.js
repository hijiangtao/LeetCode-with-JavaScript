/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const candies = ratings.map(() => 1);
  const len = ratings.length;
  if (len <= 1) return len;

  for (let index = 1; index < len; index++) {
    if (ratings[index] > ratings[index-1]) {
      candies[index] = candies[index-1] + 1;
    }
  }

  let sum = candies[len-1];
  for (let index = len-2; index >= 0; index--) {
    if (ratings[index] > ratings[index+1] && candies[index] <= candies[index+1]) {
      candies[index] = candies[index+1] + 1;
    }
    sum += candies[index];
  }

  return sum;
};