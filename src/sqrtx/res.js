/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-19 10:53:04
 * @version $Id$
 */

/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function(x) {
	if (x === 1 || x === 0) {
		return x;
	} else if (x < 0) {
		return 0;
	}

	let i = 1;
	for (;; i += 2) {
		if (i*(i+1) >= x) {
			break;
		}
	}

	for (;; i--) {
		if (i*i <= x) {
			return i;
		}
	}
};

// Another solution
let mySqrt = function(x) {
	if (x === 1 || x === 0) {
		return x;
	} else if (x < 0) {
		return 0;
	}

	let min = 1, max = x+1;
	while (true) {
		let mid = min + Number.parseInt((max-min)/2);

		if (mid*mid > x) {
			max = mid-1;
		} else {
			if ((mid+1)*(mid+1) > x) {
				return mid;
			} else {
				min = mid+1;
			}
		}
	}
};