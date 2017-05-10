/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-10 22:14:38
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    let len = strs.length;
    if (!len) return [];

    let hashmap = new Map();
    for (let i = 0; i < len; i++) {
        let tmparr = strs[i].split('');
        tmparr.sort();
        tmparr = tmparr.join();
        if (!hashmap.has(tmparr)) {
            hashmap.set(tmparr, [strs[i]]);
        } else {
            let tmp = hashmap.get(tmparr);
            tmp.push(strs[i]);
            hashmap.set(tmparr, tmp);
        }
    }

    let res = [];
    console.log(hashmap);
    for (let [key, value] of hashmap) {
        res.push(value);
    }

    return res;
};
