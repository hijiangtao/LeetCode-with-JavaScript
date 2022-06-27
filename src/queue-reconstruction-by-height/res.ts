/**
 * 先按照高度降序排列，再按照人数升序排列
 * 然后依次插入，每次插入时，之前插入过的元素都会比当前元素要高
 * @param people
 */
function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => (b[0] - a[0]) || (a[1] - b[1]));

    let result: number[][] = [];
    people.forEach(item => {
        if (item[1] >= result.length) {
            result.push(item);
        } else {
            result = [...result.slice(0, item[1]), item, ...result.slice(item[1])];
        }
    });

    return result;
};