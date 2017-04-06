/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-06 16:14:56
 * 
 * Problem: Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.
 * 
 * Tips: What you should pay attention is that, the subsequence is not guaranteed to be continuous, which means some characters would be deleted when it meets the maximum situation. It confused me for quite a long time. 
 * 
 * @param {string} s
 * @return {number}
 */
let longestPalindromeSubseq = function(s) {
	let len = s.length,
		matrix = new Array(len);

	for (let i = 0; i < len; i++) {
		matrix[i] = new Array(len);
		matrix[i][i] = 1;
	}

	for (let i = len - 1; i >= 0; i--) {
		for (let j = i + 1; j < len; j++) {
			if (s[i] === s[j]) {
				matrix[i][j] = j - i === 1 ? 2 : matrix[i + 1][j - 1] + 2;
			} else {
				matrix[i][j] = max(matrix[i][j - 1], matrix[i + 1][j]);
			}
		}
	}

	return matrix[0][len - 1];
};

let max = function(a, b) {
	if (a > b) return a;
	else return b;
}
