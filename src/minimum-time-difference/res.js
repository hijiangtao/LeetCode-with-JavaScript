/**
 * @param {string[]} timePoints
 * @return {number}
 */
let findMinDifference = function(timePoints) {
    let len = timePoints.length;
    if (len === 1) return 0;

    let tarray = new Array(24*60),
        min = 1441,
        max = -1,
        res = 1441,
        prev = 0;

    for (let i=0; i<len; i++) {
        let tmplist = timePoints[i].split(':'),
            minute = (tmplist[0]-'0')*60 + (tmplist[1]-'0');

        if (tarray[minute]) {
            return 0;
        } else {
            tarray[minute] = true;
        }
    }

    for (let i=0; i<1440; i++) {
        if (tarray[i]) {
            if (min !== 1441) {
                res = Math.min(res, i-prev);
            } else {
                min = i;
            }

            max = Math.max(max, i);
            prev = i;
        }
    }

    return Math.min(res, 24*60-max+min);
};