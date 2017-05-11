/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-11 10:39:29
 * 
 * @param {string} s
 * @return {string[]}
 */
let restoreIpAddresses = function(s) {
    let len = s.length,
        res = [];
    if (len < 4) return [];

    for (let first = 1; first < 5; first++) {
        if (first === len) break;
        for (let second = 1; second < 5; second++) {
            if (first + second === len) break;
            for (let third = 1; third < 5; third++) {
                if (first + second + third === len) break;
                let tmp1 = s.substring(0, first),
                    tmp2 = s.substring(first, first + second),
                    tmp3 = s.substring(first + second, first + second + third),
                    tmp4 = s.substring(first + second + third);

                if (isValid(tmp1) && isValid(tmp2) && isValid(tmp3) && isValid(tmp4)) {
                    res.push(`${tmp1}.${tmp2}.${tmp3}.${tmp4}`);
                }
            }
        }
    }

    return res;

    function isValid(str) {
        if (str.charAt(0) === '0' && str.length > 1) return false;

        let num = Number.parseInt(str);
        if (num < 256)
            return true;
        else
            return false;
    }
};
