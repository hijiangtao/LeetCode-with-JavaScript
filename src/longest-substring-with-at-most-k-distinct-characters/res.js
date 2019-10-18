const lengthOfLongestSubstringTwoDistinct = (s, k) => {
  const len = s.length;
  let start = 0, max = 0, strdict = {};

  for (let i = 0; i < len; i++) {
    const e = s[i];
    
    if (strdict[e] !== undefined) {
      strdict[e].push(i);
    } else {
      strdict[e] = [i];
    }

    while(Object.keys(strdict).length > k) {
      let delElement = strdict[e[start]];

      if (delElement.length === 1) {
        delete strdict[e[start]];
      } else {
        strdict[e[start]].shift();
      }
      start += 1;
    }

    max = Math.max(max, i-start+1);
  }

  return max;
}