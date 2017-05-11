/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-11 11:57:43
 * 
 * @param {string} str
 * @returns {string}
 */
let reverseWords = function(str) {
    let len = str.length,
        res = '',
        begin = 0;

    // 处理字符串为全空的情况 
    while (begin < len && str.charAt(begin) === ' ') begin++;
    if (begin === len) return res;

    for (let i = begin; i < len;) {
        let space = '',
            end = begin,
            tmpstr = '';

        while (i < len && str.charAt(i) !== ' ') {
            tmpstr += str.charAt(i);
            i++;
        }
        while (i < len && str.charAt(i) === ' ') i++;

        if (i < len) space = ' ';

        res = space + tmpstr + res;
    }

    return res;
};
