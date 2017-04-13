/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-13 11:02:22
 * 
 * A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.
 * A slice (P, Q) of array A is called arithmetic if the sequence:
 * A[P], A[P + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.
 * The function should return the number of arithmetic slices in the array A.
 * 
 * @param {number[]} A
 * @return {number}
 */
let numberOfArithmeticSlices = function(A) {
	let len = A.length;
	if (len < 3) {
		return 0;
	}

	let res = 0,
		interval = [];

	// 构建元素差数组
	for (let i = 1; i < len; i++) {
		interval.push(A[i] - A[i - 1]);
	}

	let count = 2,
		difPre = interval[0];

	len--;
	for (let i = 1; i < len; i++) {
		let difNow = interval[i];

		if (difNow === difPre) {
			count++;
		} else {
			res += Sum(count); // 计算当前积攒元素个数下的 arithmetic 个数
			difPre = difNow;
			count = 2;
		}
	}

	if (count > 2) {
		res += Sum(count);
	}

	return res;
};

let Sum = function(n) {
	// console.log(n);
	return (n - 2) * (n - 1) / 2;
};
