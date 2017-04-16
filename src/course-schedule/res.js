/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-17 00:09:34
 * 
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 * 
 * Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 * 
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
 * 
 * For example:
 * 
 * 2, [[1,0]]
 * There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
 * 
 * 2, [[1,0],[0,1]]
 * There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 * 
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let canFinish = function(numCourses, prerequisites) {
    let prelen = prerequisites.length,
        maxNoCircle = numCourses * (numCourses - 1) / 2;
    if (!prelen) {
        return true;
    } else if (prelen > maxNoCircle) {
        return false;
    }

    let flags = [], // 存储未访问节点
        nodemarks = new Array(numCourses), // 存储node访问标记
        edges = new Array(numCourses); // 存储连边信息
    for (let i = 0; i < numCourses; i++) {
        flags.push(i);
        nodemarks[i] = 0;
        edges[i] = [];
    }

    for (let i = 0; i < prelen; i++) {
        let source = prerequisites[i][0],
            target = prerequisites[i][1];

        edges[target].push(source);
    }

    while (flags.length) {
        let node = flags[flags.length - 1];
        if (!dfsVisit(node)) {
            return false;
        }
        flags.pop();
    }

    return true;

    function dfsVisit(node) {
        if (nodemarks[node]) {
            return false;
        }

        if (flags.indexOf(node) !== -1) {
            nodemarks[node] = 1;
            let elen = edges[node].length;
            for (let i = 0; i < elen; i++) {
                if (!dfsVisit(edges[node][i])) {
                    return false;
                }
            }
            nodemarks[node] = 0;
        }

        return true;
    }
};
