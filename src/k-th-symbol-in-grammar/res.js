/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
  if (N === 1) return 0;
  if (N === 2) return K - 1;
  
  const index = Math.pow(2, N - 1);

  if (K <= index / 2) {
    return kthGrammar(N - 1, K);
  } else {
    return 1 - kthGrammar(N - 1, K - index / 2);
  }
};