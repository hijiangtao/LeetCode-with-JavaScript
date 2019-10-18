/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const len = s.length;
  let max = 0;
  let strdict = {};
  let left = 0, right = 0;

  for ( ; right < len; right++) {
    const e = s[right];
    
    if(strdict[e] !== undefined) {
      strdict[e] += 1;
    } else {
      strdict[e] = 1;
    }

    let curMaxStr = '';
    Object.keys(strdict).map(ele => {
      if (strdict[ele] > (strdict[curMaxStr] || 0)) {
        curMaxStr = ele;
      }
    });

    while(right-left+1-strdict[curMaxStr] > k) {
      strdict[s[left]] -= 1;
      left += 1;

      Object.keys(strdict).map(ele => {
        if (strdict[ele] > strdict[curMaxStr]) {
          curMaxStr = ele;
        }
      });
    }

    max = Math.max(max, right-left+1);
  }

  return max;
};