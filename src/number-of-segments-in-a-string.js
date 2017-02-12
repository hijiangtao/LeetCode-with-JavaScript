/**
 * Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
 * 
 * Please note that the string does not contain any non-printable characters.
 * 
 * number-of-segments-in-a-string.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-12 12:50:48
 * @param {string} s
 * @return {number}
 */

let countSegments = function(s) {
    s = s.trim()
    if (s) {
        let re = new RegExp(' +');
        return s.split(re).length;
    }
    
    return 0;
};