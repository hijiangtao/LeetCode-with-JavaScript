/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-17 10:46:36
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
 * 4, [[1,0],[2,0],[3,1],[3,2]]
 * There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].
 * 
 * Tips: Otherwise, you should return []
 * 
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let findOrder = function(numCourses, prerequisites) {
	let prelen = prerequisites.length,
		maxNoCircle = numCourses * (numCourses - 1) / 2;
	// 当所有点都有边连接时, 最大的无环边数
	if (prelen > maxNoCircle) {
		return [];
	}

	let queue = [], // 存储 BFS 待访问节点序列
		flags = [], // 存储节点是否被访问过的标记
		res = [], //结果
		nodedegree = new Array(numCourses), // 存储node的连边总数
		edges = new Array(numCourses); // 存储连边信息, 每个元素中存储的数组表示自己的后续课程
	for (let i = 0; i < numCourses; i++) {
		flags[i] = false;
		nodedegree[i] = 0;
		edges[i] = [];
	}

	for (let i = 0; i < prelen; i++) {
		let source = prerequisites[i][0],
			target = prerequisites[i][1];

		edges[target].push(source);
		nodedegree[source]++;
		nodedegree[target]++;
	}

	for (let i = 0; i < numCourses; i++) {
		if (nodedegree[i] === edges[i].length) {
			queue.push(i);
		}
	}

	if (bfsVisit()) {
		return res;
	} else {
		return [];
	}

	function bfsVisit() {
		while (queue.length) {
			let current = queue.shift(), //当前访问节点
				elen = edges[current].length; // 边数

			res.push(current);
			// console.log(current, res);
			flags[current] = true;
			for (let i = 0; i < elen; i++) {
				let target = edges[current][i];
				if (flags[target]) {
					return false; // 有回路,返回 false
				}
				if (--nodedegree[target] === edges[target].length) {
					queue.push(target);
				}
			}
			edges[current] = [];
			nodedegree[current] -= elen;
		}

		if (res.length < numCourses) {
			return false;
		}
		return true;
	}
};
