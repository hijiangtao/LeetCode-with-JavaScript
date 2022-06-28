/**
 * 迭代法或者递归法均可实现，本实现为递归法
 * @param x
 * @param n
 */
function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return x;
    } else if (n > 0) {
        if (n % 2 === 0) {
            return myPow(x*x, n/2);
        } else {
            return x * myPow(x, n-1);
        }
    } else {
        return 1 / myPow(x, -n);
    }
};