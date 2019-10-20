/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => b-a);
  const res = [];
  
  const calCombs = (candis, resArr, targ) => {
    if (!candis.length) return ;
    console.log(candis, resArr, targ);
    const ele = candis[0];

    if (targ === ele) {
      res.push([...resArr, ele]);
    } else {
      calCombs(candis.slice(1), [...resArr], targ);
    }

    if (targ - ele > 0) {
      calCombs(candis, [...resArr, ele], targ-ele);
    }
  }

  calCombs(candidates, [], target);

  console.log(res);
  return res;
};

combinationSum([2,3,6,7],
  7);