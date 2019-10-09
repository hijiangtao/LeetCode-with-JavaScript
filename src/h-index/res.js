/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function(citations) {
    const arrLen = citations.length;
    const count = new Array(arrLen+1);

    for (let index = 0; index < arrLen; index++) {
      const element = citations[index];
      const realNum = Math.min(element, arrLen);
      (count[realNum] ? count[realNum] += 1 : count[realNum] = 1);
    }

    let sk = count[arrLen] || 0;
    let resIndex = arrLen;
    while (sk < resIndex) {
      resIndex--;
      sk += count[resIndex] || 0;
    }

    // console.log(count);
    return resIndex;
};
