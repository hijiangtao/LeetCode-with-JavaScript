/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-11 09:59:27
 * 
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function(path) {
    let len = path.length,
        res = [];
    
    for (let i=0; i<len;) {
        let tmp = '';
        while (path.charAt(i) === '/' && i<len) i++;
        while (path.charAt(i) !== '/' && i<len) {
            tmp += path.charAt(i);
            i++;
        }
        
        if (tmp === '..') res.pop();
        else if (tmp !== '.' && tmp !== '') res.push(tmp);
    }
    
    if (res.length === 0) return '/';
    else return '/' + res.join('/');
};