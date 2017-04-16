/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-16 22:11:56
 *
 * Problem: Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.
 * 
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
let cloneGraph = function(graph) {
	// if (!graph) return graph;
	let res = {};
	return iterateGraph(graph);

	function iterateGraph(subgraph) {
		if (!subgraph) {
			return subgraph;
		}

		let id = subgraph.label;
		if (!res[id]) {
			res[id] = new UndirectedGraphNode(id);
			res[id].neighbors = subgraph.neighbors.map(iterateGraph);
		}

		return res[id];
	}
};
