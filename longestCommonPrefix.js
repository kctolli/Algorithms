/** https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 1) return strs[0];
    let longestPre = '';
    const strsByLen = strs.sort((a,b) => a.length - b.length );
    const shortestWord = strsByLen[0]
    for (let j = 0; j < shortestWord.length; j++){
        let currLetterInShortestWord = shortestWord[j];
        let isInEveryWord = true;
        for (let i = 1; i < strsByLen.length; i++){
           if (currLetterInShortestWord !== strsByLen[i][j]) {
               isInEveryWord = false;
               break;
           }
        }
        if (isInEveryWord) {
            longestPre += currLetterInShortestWord;
        } else {
            break;
        }
    }
    return longestPre
};

module.exports = longestCommonPrefix;