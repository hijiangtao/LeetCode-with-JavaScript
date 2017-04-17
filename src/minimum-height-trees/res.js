/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-17 14:02:24
 * 
 * For a undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.
 * 
 * Format
 * The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).
 * 
 * You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
 * 
 * Note:
 * 
 * (1) According to the definition of tree on Wikipedia: “a tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”
 * 
 * (2) The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.
 * 
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
let findMinHeightTrees = function(n, edges) {
	let elen = edges.length, // 边数长度
		nlist = [], // 节点列表
		deglist = [], //度数列表
		adj = new Array(n); //存储连边信息

	for (let i = 0; i < n; i++) {
		nlist.push(i);
		deglist.push(0);
		adj[i] = new Set();
	}
	for (let i = 0; i < elen; i++) {
		let source = edges[i][0],
			target = edges[i][1];

		adj[source].add(target);
		adj[target].add(source);
		deglist[source]++;
		deglist[target]++;
	}

	// 结果中只能是一个元素或者两个元素, 或者全部元素 (如果有多个树结构)
	while (nlist.length > 2) {
		let lenNow = nlist.length,
			dellist = [];

		for (let i = 0; i < lenNow; i++) {
			let node = nlist[i];
			if (!deglist[node]) {
				//当前节点边数为0
				nlist.splice(i--, 1);
				lenNow--;
			} else if (deglist[node] === 1) {
				//删除边并减少两端节点的degree
				let anothernode = -1;
				for (let j = 0; j < lenNow; j++) {
					if (i === j) continue;
					if (adj[node].has(nlist[j])) {
						anothernode = nlist[j];
						break;
					}
				}
				adj[node].delete(anothernode);
				adj[anothernode].delete(node);
				dellist.push(anothernode);
				deglist[node] = 0;
				nlist.splice(i--, 1);
				lenNow--;
			}
		}

		for (let i = dellist.length - 1; i >= 0; i--) {
			deglist[dellist[i]]--;
		}
	}

	return nlist;
};
