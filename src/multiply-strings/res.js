/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-10 18:08:05
 * 
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

let multiply = function(num1, num2) {
    let len1 = num1.length,
        len2 = num2.length,
        maxlen = len1 > len2 ? len1 : len2,
        res = [0],
        base = num1.split('').map(e => Number.parseInt(e)),
        shift = 0;

    // console.log(base);
    for (let i = len2 - 1; i >= 0; i--) {
        let tmp = [], // 存储相乘和数组,倒序 
            carrybit = 0,
            mpler = Number.parseInt(num2.charAt(i));

        if (mpler === 0) {
            shift++;
            continue;
        }
        for (let j = len1 - 1; j >= 0; j--) {
            let prd = base[j] * mpler + carrybit;
            carrybit = Math.floor(prd / 10);
            tmp.push(prd % 10);
        }
        if (carrybit) tmp.push(carrybit);
        let tmplen = tmp.length + shift;
        // 补0操作
        for (let j = tmplen - res.length; j > 0; j--) {
            res.push(0);
        }

        // 相加操作
        tmplen = tmp.length;
        carrybit = 0;
        for (let j = 0; j < tmplen; j++) {
            // console.log(res[j+shift], tmp[j], carrybit);
            let current = res[j + shift] + tmp[j] + carrybit;
            res[j + shift] = current % 10;
            // console.log(current);
            if (current > 9) {
                carrybit = 1;
            } else {
                carrybit = 0;
            }
        }
        if (carrybit) res.push(1);

        // console.log(res, carrybit);
        shift++;
    }

    while (res[res.length - 1] === 0 && res.length > 1) {
        res.pop();
    }

    return res.reverse().join('');
};
