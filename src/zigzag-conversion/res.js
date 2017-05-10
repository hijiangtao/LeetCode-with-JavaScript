/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-10 16:32:48
 * 
 * Definition of Zigzag: https://en.wikipedia.org/wiki/Zigzag
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
    if (numRows < 2) {
        return s;
    }
    
    // change string to array
    let sarray = s.split(''),
        len = s.length,
        res = [],
        index = 0,
        order = 1; // 显示数组遍历顺序是自上而下还是自下而上
        
    for (let i=0; i<numRows; i++) { // 初始化空数组元素
        res.push([]);
    }
    while (index<len) {
        for (let i=0; i<numRows-1; i++) {
            if (index>=len) {
                break;
            }
            if (order === 1) { // 根据遍历顺序确定存放的数组元素下标
                res[i].push(sarray[index]);    
            } else {
                res[numRows-1-i].push(sarray[index]);
            }
            
            index++;
        }
        order = -order;
    }
    
    res[0] = res[0].join('');
    for (let i=1; i<numRows; i++) { // 合并数组至字符串
        res[0] += res[i].join('');
    }
    
    return res[0];
};