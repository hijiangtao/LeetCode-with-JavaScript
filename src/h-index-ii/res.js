/**
 * citations = [0,1,3,5,6]
 * index     = [1,2,3,4,5]
 * @param {*} citations 
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function(citations) {
  const arrLen = citations.length;

  let index;
  for (index = arrLen-1; index >= 0; index--) {
    const element = citations[index];
    
    if (element < (arrLen - index)) {
      break;
    }
  }

  return arrLen - index - 1;
};

const hIndex_2 = (citations) => {
  const len = citations.length;
  if (len == 0 || citations[len - 1] == 0) {
      return 0;
  }
  let left = 0;
  let right = len - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (citations[mid] < (len - mid)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return len - left;
}