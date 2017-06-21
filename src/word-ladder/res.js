/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-06-21 23:22:33
 * 
 * 127. Word Ladder
 * Problem: https://leetcode.com/problems/word-ladder/
 * Discuss: https://discuss.leetcode.com/category/135/word-ladder
 *
 * * Traditional
 * * Two-end BFS
 * * Dijkstra's algorithm
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
let ladderLength = function(beginWord, endWord, wordList) {
    wordList.push(endWord);
    let toVisit = new Set(),
        wordDict = new Set(wordList),
        dist = 2;
    
    if (wordList.length === wordDict.size) return 0;
    addNextWords(beginWord, wordDict, toVisit);
    
    while (toVisit.size > 0) {
        let entriesLen = toVisit.size,
            mark = 0;
        
        for (let item of toVisit.values()) {
            if (mark++ === entriesLen) break;
            toVisit.delete(item);
            
            if (item === endWord) return dist;
            addNextWords(item, wordDict, toVisit);
        }
        
        dist++;
    }
    
    return 0;
};

let addNextWords = function(word, wordDict, toVisit) {
    wordDict.delete(word);
    let len = word.length;
    
    for (let i=0; i<len; i++) {
        for (let j=97; j<123; j++) {
            let tmp = word.substring(0, i) + String.fromCharCode(j) + word.substring(i+1, len);
            if (wordDict.has(tmp)) {
                toVisit.add(tmp);
                wordDict.delete(tmp);
            }
        }
    }
};