/**
 * KMP
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const hlen = haystack.length;
  const nlen = needle.length;
  if (!nlen) return 0;
  if (!hlen) return -1;

  let FSM = new Array(nlen);
  let X = 0, match = 0;
  for (let i = 0; i < nlen; i++) {
    match = needle[i].charCodeAt();
    FSM[i] = new Array(256);
    for (let j = 0; j < 256; j++) {
      FSM[i][j] = FSM[X][j] || 0;
    }
    
    FSM[i][match] = i + 1;
    if (i > 0) {
      X = FSM[X][match];
    }
  }

  let state = 0;
  for (let i = 0; i < hlen; i++) {
    state = FSM[state][haystack[i].charCodeAt()];
    if (state === nlen) {
      return i - nlen + 1;
    }
  }
  return -1;
};